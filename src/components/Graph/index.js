import { useRef, useState, useEffect } from "react";
import * as d3 from "d3";
import * as d3Force from "d3-force";
import { isMobileOnly } from "react-device-detect";
import styled from "styled-components";
import Paragraph from "../../components/Paragraph";

const Graph = ({ data, size, question }) => {
  const svgRef = useRef(null);
  const { width, height, margin } = size;
  const svgWidth = width - margin * 2;
  const svgHeight = height;
  const score = "";

  useEffect(() => {
    const svgContainer = d3.select(svgRef.current);
    svgContainer.selectAll("*").remove(); //cleanup

    const x = d3.scaleLinear().range([100, width - 100]);
    x.domain([-10, 10]);
    let tickLabels = [];
    tickLabels[1] = [
      "No avanza la agenda feminista",
      "Avanza parcialmente la agenda feminista",
      "Avanza la agenda feminista",
    ];
    svgContainer
      .attr("height", svgHeight)
      .attr("width", svgWidth)
      .append("g")
      .attr(
        "transform",
        "translate(" + svgWidth / 2 + "," + svgHeight / 2 + ")"
      ); //start at middle
    const ejes = svgContainer
      .append("g")
      .attr("class", "axis axis--x")
      .attr("transform", "translate(0, " + (svgHeight - 50) + ")")
      .call(
        d3
          .axisBottom(x)
          .ticks(2.5)
          .tickFormat((d, i) => tickLabels[1][i])
      );

    const horizontalForce = d3Force
      .forceX((d) => {
        if (!question) {
          return width / 2;
        }
        const ans = `QN_${question.replace(/\D/g, "")}_P`; //transform QN_xxx_Q into QN_xxx_P for score
        const score = d.fields[ans]; //scores are -0.33, 0, 0.165, 0.33
        switch (score) {
          case -0.33:
            return 0 + 50;
          case 0:
            return width * 0.25;
          case 0.165:
            return width * 0.5;
          case 0.33:
            return width - 100;
          default:
            return width / 2;
        }
      })
      .strength(0.05);

    const simulation = d3Force
      .forceSimulation()
      .force("x", horizontalForce)
      .force("y", d3Force.forceY(height / 2).strength(0.02))
      .force("collide", d3Force.forceCollide(15));

    let tooltip = d3
      .select("#svg-wrapper")
      .on("click", (e) => {
        if (e.target.tagName !== "circle") {
          tooltip.style("display", "none");
        }
      })
      .on("mouseleave", (e) => {
        tooltip.style("display", "none");
      })
      .append("div")
      .attr("class", "tooltip")
      .attr("id", "tooltip")
      .style("position", "absolute")
      .style("overflow", "hidden")
      .style("color", "white")
      .style("font-weight", "500")
      .style("border", "solid")
      .style("border-width", "1px")
      .style("border-radius", "5px")
      .style("padding", "20px")
      .style("width", "125px")
      .style("z-index", 1);

    const HtmlToDisplayInTooltip = (d) => {
      const { Nombre, Orientacion, Provincia } = d.path[0].__data__.fields;
      const { id } = d.path[0].__data__;
      const path = window.location.href;

      // Código que rompe el routing al perfil de candidate SOLO en producción. VER.
      //  <a style='color:white; text-decoration: underline; font-weight: bold; margin-bottom: 0.5rem' href=${path}candidates/${id}>Ver perfil</a>

      return `<ul style='margin: 0; padding: 0; text-align: center'>
                    <li style='list-style-type: none; margin-bottom: 0.5rem; font-weight: bold'>${Nombre}</li>
                    <li style='list-style-type: none; margin-bottom: 0.5rem'>${Orientacion}</li>
                    <li style='list-style-type: none; margin-bottom: 0.5rem'>${Provincia}</li>
                </ul>
                `;
    };

    console.log(data, 'data in graph');

    let candidates = svgContainer
      .selectAll("svg")
      .data(data)
      .enter()
      .append("circle")
      .style("position", "relative")
      .attr("r", isMobileOnly ? 10 : 15)
      .attr("fill", (d) => {
        switch (d.fields.Partido_politico) {
          case "Partido Alianza verde":
            return "#FBD17E";
          case "Alianza Verde":
            return "#8CDDD3";
          case "FIT-U":
            return "#E4626F";
          case "Socialista":
            return "#E4626F";
          case "Vamos con Vos":
            return "#66B26B";
          case "Frente Renovador":
            return "#999999";
          case "Partido Vecinal":
            return "#B193CE";
          default:
            return "black";
        }
      })

      .on("mouseover", (d, i) => {
        function calculateTooltipPosition(xAxis) {
          // Wrapper has a 4rem margin on each sides, 128 is the result of converting REM to PX.
          let marginsSum = 128;
          let windowWidth = window.innerWidth + marginsSum;
          let tooltipWidth = 150;
          let position = xAxis + tooltipWidth;

          let isPositive = windowWidth > position;

          let isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

          // La lógica acá puede parecer rara, pero es para resolver el problema en desktop.
          // En el caso que sea desktop (width > 768) y la posicion del circle esté en la primera mitad
          // del width total (windowWidth/2), quiero que el tooltip se muestre hacia la derecha.
          // Caso contrario, hacia la izquierda.
          // El 180 aparece hardcodeado porque es la posicion exacta del circle partiendo desde la izquierda
          // (.style('left') en el componente).

          // Obviamente en mobile aplica una lógica distinta, por eso el Boolean para chequear si es mobile.

          if (isMobile) {
            if (isPositive) {
              return `${xAxis}px`;
            } else {
              return `${xAxis - 180}px`;
            }
          }

          if (isPositive && windowWidth > 768 && position < windowWidth / 2) {
            return `${xAxis}px`;
          } else {
            return `${xAxis - 180}px`;
          }
        }

        tooltip
          .html(HtmlToDisplayInTooltip(d))
          .style("display", "initial")
          .style("left", calculateTooltipPosition(d.path[0].cx.animVal.value)) // It is important to put the +90: other wise the tooltip is exactly where the point is an it creates a weird effect
          .style("top", `${d.path[0].cy.animVal.value + 5}px`)
          .style("background-color", () => {
            const politicalParty = d.path[0].__data__.fields.Partido_politico
            console.log(politicalParty);
            switch (politicalParty) {
              case "Partido Alianza verde":
                // console.log(d, 'ddd');
                return "#FBD17E";
              case "Alianza Verde":
                return "#8CDDD3";
            }
          });
      });

    simulation.nodes(data).on("tick", ticked);

    function ticked() {
      candidates
        .attr("cx", (d) => {
          return d.x;
        })
        .attr("cy", (d) => {
          return d.y;
        });
    }
  }, [data, question]);
  return (
    <>
      <div id="svg-wrapper" style={{ position: "relative" }}>
        <svg id="svg" ref={svgRef} width={svgWidth} height={svgHeight} />
      </div>
      <GraphScroll>*Deslizarse a lo ancho</GraphScroll>
      <References>
        <Reference>
          <Circle color={"#FBD17E"} />
          <Paragraph color="black" desktopFontSize="xs">
            Partido Alianza Verde
          </Paragraph>
        </Reference>
        <Reference>
          <Circle color={"#8CDDD3"} />
          <Paragraph color="black" desktopFontSize="xs">
            Alianza Verde
          </Paragraph>
        </Reference>
      </References>
    </>
  );
};

const GraphScroll = styled.div`
  display: none;
  width: 768px;
  text-align: center;
  margin-bottom: 1rem;
  @media only screen and (max-width: ${(props) => props.theme.breakpoints.sm}) {
    display: block;
  }
`;

const References = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  justify-items: start;
  align-self: center;

  @media only screen and (max-width: ${(props) => props.theme.breakpoints.sm}) {
    display: flex;
    width: 768px;
    align-self: unset;
  }
`;

const Reference = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  margin-bottom: 1rem;
  margin-right: 1rem;
`;

const Circle = styled.div`
  background-color: ${(props) => props.color};
  width: 15px;
  height: 15px;
  min-width: 15px;
  margin-right: 0.5rem;
  border-radius: 50%;
`;

export default Graph;
