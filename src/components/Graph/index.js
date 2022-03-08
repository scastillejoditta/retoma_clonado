import { useRef, useEffect } from "react";
import * as d3 from "d3";
import * as d3Force from "d3-force";
import {isMobileOnly} from "react-device-detect";

import {Circle, Reference, References, GraphScroll, SvgWrapper} from './styles'
import Paragraph from "../../components/Paragraph";
import Spinner from '../../assets/Icons/Spinner'

import {useFetch} from '../../hooks/useFetch'

const xAxles = {
  "QN_001_Q": ['Baja', 'Media', 'Alta'],
  "QN_002_Q": ['Baja', 'Media', 'Alta'],
  'QN_003_Q': ['Baja', 'Media', 'Alta'],
  'QN_005_Q':  ['En contra', 'No he definido mi posición/No tengo una posición', 'A favor'],
  'QN_006_Q': ['En contra', 'No he definido mi posición/No tengo una posición', 'A favor'],
  'QN_007_Q': ['En contra', 'No he definido mi posición/No tengo una posición', 'A favor'],
  'QN_008_Q': ['En contra', 'No he definido mi posición/No tengo una posición', 'A favor'],
  'QN_009_Q': ['En contra', 'No he definido mi posición/No tengo una posición', 'A favor'],
  'QN_010_Q': ['En contra', 'No he definido mi posición/No tengo una posición', 'A favor'],
  'QN_011_Q': ['Baja', 'Media', 'Alta'],
  'QN_012_Q': ['Baja', 'Media', 'Alta'],
  'QN_013_Q': ['En contra', 'No he definido mi posición/No tengo una posición', 'A favor'],
  'QN_014_Q': ['En contra', 'No he definido mi posición/No tengo una posición', 'A favor'],
  'QN_015_Q': ['En contra', 'No he definido mi posición/No tengo una posición', 'A favor'],
  'QN_016_Q': ['Baja', 'Media', 'Alta'],
  'QN_017_Q': ['Baja', 'Media', 'Alta'],
  'QN_018_Q': ['Baja', 'Media', 'Alta'],
  'QN_019_Q': ['Baja', 'Media', 'Alta'],
  'QN_020_Q': ['Baja', 'Media', 'Alta'],
  'QN_021_Q': ['Baja', 'Media', 'Alta'],
  'QN_022_Q': ['En contra', 'No he definido mi posición/No tengo una posición', 'A favor'],
  'QN_023_Q': ['En contra', 'No he definido mi posición/No tengo una posición', 'A favor'],
  'QN_024_Q': ['En contra', 'No he definido mi posición/No tengo una posición', 'A favor'],
  'QN_025_Q': ['Baja', 'Media', 'Alta'],
  'QN_026_Q': ['Baja', 'Media', 'Alta'],
  'QN_027_Q': ['Baja', 'Media', 'Alta'],
  'QN_028_Q': ['Baja', 'Media', 'Alta'],
  'QN_029_Q': ['Baja', 'Media', 'Alta'],
  'QN_030_Q': ['Baja', 'Media', 'Alta'],
}

const Graph = ({ data, size, question}) => {
  const {data: politicalParties, loading: loadingPoliticalParties} = useFetch('Partidos_Politicos', [])
  const {data: questionsOptions, loading: loadingQuestionsOptions} = useFetch('Preguntas_Opciones', [])
  const svgRef = useRef(null);
  const { width, height, margin } = size;
  const svgWidth = width - margin * 2;
  const svgHeight = height;

  // const result = questionsOptions.reduce((acc, curr) => {
  //   const { Name, Opcion } = curr.fields 
  //   acc[Name] ??= {Name: Name, Opcion: []};
  //   if(Array.isArray(Opcion)) // if it's array type then concat 
  //     acc[Name].Opcion = acc[Name].Opcion.concat(Opcion);
  //   else
  //     acc[Name].Opcion.push(Opcion);
    
  //   return acc;
  // }, {});

  // console.log(result, 'output')


  useEffect(() => {
    const svgContainer = d3.select(svgRef.current);
    svgContainer.selectAll("*").remove(); //cleanup

    const x = d3.scaleLinear().range([100, width - 100]);
    x.domain([-10, 10]);
    let tickLabels = [];
    tickLabels[1] = question ? xAxles[question] : ['En contra', 'No he definido mi posición/No tengo una posición', 'A favor'],

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
        const score = d.fields[ans]; //scores are 1, 0.5, 0
        
        switch (score) {
          case 0:
            return 0 + 50;
          case 0.5:
            return width * 0.5;
          case 1:
            return width - 100;
          default:
            return width - 100;
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
      const { Nombre, Corporación, Partido_politico } = d.path[0].__data__.fields;
      const { id } = d.path[0].__data__;
      const path = window.location.href;

      // Código que rompe el routing al perfil de candidate SOLO en producción. VER.
      //  <a style='color:white; text-decoration: underline; font-weight: bold; margin-bottom: 0.5rem' href=${path}candidates/${id}>Ver perfil</a>

      return `<ul style='margin: 0; padding: 0; text-align: center'>
                    <li style='list-style-type: none; margin-bottom: 0.5rem; font-weight: bold'>${Nombre}</li>
                    <li style='list-style-type: none; margin-bottom: 0.5rem'>${Corporación}</li>
                    <li style='list-style-type: none; margin-bottom: 0.5rem'>${Partido_politico}</li>
                </ul>
                `;
    };

    const ans = `QN_${question?.replace(/\D/g, "")}_P`; //transform QN_xxx_Q into QN_xxx_P for score
    const filterData = data?.filter(d => d.fields[ans] >= 0)

    let candidates = svgContainer
      .selectAll("svg")
      .data(filterData)
      .enter()
      .append("circle")
      .style("position", "relative")
      .attr("r", isMobileOnly ? 10 : 15)
      .attr("fill", (d) => {
        const politicalParty = d.fields.Partido_politico
        const politicalPartyObj = politicalParties.find(pp => pp.fields.Nombre === politicalParty).fields
        return politicalPartyObj['Color']
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
            return `${xAxis - 45}px`;
          } else {
            return `${xAxis - 45}px`;
          }
        }

        tooltip
          .html(HtmlToDisplayInTooltip(d))
          .style("display", "initial")
          .style("left", calculateTooltipPosition(d.path[0].cx.animVal.value)) // It is important to put the +90: other wise the tooltip is exactly where the point is an it creates a weird effect
          .style("top", `${d.path[0].cy.animVal.value + 5}px`)
          .style("background-color", () => {
            const politicalParty = d.path[0].__data__.fields.Partido_politico

            const politicalPartyObj = politicalParties.find(pp => pp.fields.Nombre === politicalParty).fields
            return politicalPartyObj['Color']
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
      <SvgWrapper id="svg-wrapper" >
        <svg id="svg" ref={svgRef} width={svgWidth} height={svgHeight} />
      </SvgWrapper>
      <GraphScroll>*Deslizarse a lo ancho</GraphScroll>
      <References>
        {politicalParties?.map(pp =>
          <Reference>
            <Circle color={pp.fields.Color} />
            <Paragraph color="black" desktopFontSize="xs">
              {pp?.fields?.Nombre}
            </Paragraph>
          </Reference>
        )}   
      </References>
    </>
  );
};

export default Graph;
