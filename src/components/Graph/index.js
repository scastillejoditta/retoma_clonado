import { useRef, useState, useEffect } from "react";
import * as d3 from "d3";
import { queue } from "d3-queue";
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

    let candidates = svgContainer
      .selectAll(".candidate")
      .data(data)
      .enter()
      .append("circle")
      .attr("class", "candidate")
      .attr("r", isMobileOnly ? 10 : 15)
      .attr("fill", (d) => {
        switch (d.fields.Orientacion) {
          case "Frente Juntos":
            return "#FBD17E";
          case "Frente de Todos":
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
      <svg ref={svgRef} width={svgWidth} height={svgHeight} />
      <GraphScroll>*Deslizarse a lo ancho</GraphScroll>
      <References>
        <Reference>
          <Circle color={"#FBD17E"} />
          <Paragraph color="black" desktopFontSize="xs">
            Frente Juntos
          </Paragraph>
        </Reference>
        <Reference>
          <Circle color={"#8CDDD3"} />
          <Paragraph color="black" desktopFontSize="xs">
            Frente de Todos
          </Paragraph>
        </Reference>
        <Reference>
          <Circle color={"#E4626F"} />
          <Paragraph color="black" desktopFontSize="xs">
            FIT-U
          </Paragraph>
        </Reference>
        <Reference>
          <Circle color={"#E4626F"} />
          <Paragraph color="black" desktopFontSize="xs">
            Socialista
          </Paragraph>
        </Reference>
        <Reference>
          <Circle color={"#66B26B"} />
          <Paragraph color="black" desktopFontSize="xs">
            Vamos con Vos
          </Paragraph>
        </Reference>
        <Reference>
          <Circle color={"#999999"} />
          <Paragraph color="black" desktopFontSize="xs">
            Frente Renovador
          </Paragraph>
        </Reference>
        <div />
        <Reference>
          <Circle color={"#B193CE"} />
          <Paragraph color="black" desktopFontSize="xs">
            Partido Vecinal
          </Paragraph>
        </Reference>
        <div />
        {/* <Reference>
          <Circle color={"black"} />
          <Paragraph color="black" desktopFontSize="xs">
            Indefinido
          </Paragraph>
        </Reference> */}
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
  width: 768px;
`;

const Reference = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  margin-bottom: 1rem;
`;

const Circle = styled.div`
  background-color: ${(props) => props.color};
  width: 15px;
  height: 15px;
  margin-right: 1rem;
  border-radius: 50%;
`;

export default Graph;