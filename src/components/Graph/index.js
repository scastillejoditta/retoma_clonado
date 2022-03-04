import { useRef, useEffect } from "react";
import * as d3 from "d3";
import * as d3Force from "d3-force";
import {isMobileOnly} from "react-device-detect";

import {Circle, Reference, References, GraphScroll, SvgWrapper} from './styles'
import Paragraph from "../../components/Paragraph";

const xAxles = {
  "Las personas LGBTIQ+ son víctimas de discursos de odio, discriminación, amenazas y asesinatos, sobre todo en regiones donde operan grupos armados ilegales. ¿Qué prioridad le dará usted a resolver este problema en su ejercicio como congresista?": ['Baja', 'Media', 'Alta'],
  "Algunas entidades estatales como notarías, registradurías, la rama judicial, la fuerza pública, y otras como las entidades de salud, estigmatizan, discriminan y violentan a la población LGBTIQ+. ¿Qué prioridad le dará usted a resolver este problema en su ejercicio como congresista?": ['Baja', 'Media', 'Alta'],
  'Existe desatención de la salud mental y desconocimiento sobre protocolos de tratamiento de la depresión causada por el matoneo, la discriminación y la exclusión en las instituciones educativas, especialmente hacia menores de edad LGBTIQ+. ¿Qué prioridad le dará usted a resolver este problema en su ejercicio como congresista?': ['Baja', 'Media', 'Alta'],
  '¿Estaría usted a favor o en contra de impulsar una ley que aborde problemáticas específicas de la población LGBTIQ+ y elimine inequidades en ámbitos como atención en salud, inclusión laboral, acceso a la educación y derechos patrimoniales, y que garantice el respeto por la identidad, el nombre, los procesos de tránsito y el libre desarrollo de la personalidad?':  ['En contra', 'No he definido mi posición/No tengo una posición', 'A favor'],
  '¿Estaría usted a favor o en contra de hacer control político al Ministerio de Educación frente a los lineamientos impartidos a las secretarías de Educación y las instituciones educativas sobre políticas antidiscriminación a estudiantes LGBTIQ+ en manuales de convivencia y el seguimiento que hace a su cumplimiento?': ['En contra', 'No he definido mi posición/No tengo una posición', 'A favor'],
  '¿Estaría usted a favor o en contra de incluir en el Plan Nacional de Desarrollo metas y acciones claras sobre temas relacionados con población LGBTIQ+ que aseguren la asignación de recursos?': ['En contra', 'No he definido mi posición/No tengo una posición', 'A favor'],
  '¿Estaría usted a favor o en contra de aprobar la muerte política para políticos corruptos?': ['En contra', 'No he definido mi posición/No tengo una posición', 'A favor'],
  '¿Estaría usted a favor o en contra de aprobar proyectos de ley para implementar estímulos y canales de participación para las veedurías ciudadanas contra la corrupción?': ['En contra', 'No he definido mi posición/No tengo una posición', 'A favor'],
  '¿Estaría usted a favor o en contra de aprobar que los procesos judiciales por corrupción sean públicos e imprescriptibles?': ['En contra', 'No he definido mi posición/No tengo una posición', 'A favor'],
  'Las mujeres son víctimas de un amplio rango de violencias por ser mujeres: intrafamiliar, sexual, política y feminicida. ¿Qué prioridad le dará usted a resolver este problema en su ejercicio como congresista?': ['Baja', 'Media', 'Alta'],
  'Hay una alta inoperancia del Estado en casos de violencias contra las mujeres e impunidad en la justicia que termina en estrategias como el ‘escrache’, alta tolerancia social frente al tema, y falta de garantías para la atención tanto de salud física como mental para las víctimas de violencias. ¿Qué prioridad le dará usted a resolver este problema en su ejercicio como congresista?': ['Baja', 'Media', 'Alta'],
  'Las mujeres en el campo, sobre todo si son jóvenes y empobrecidas, no tienen acceso a la propiedad de la tierra, ni posibilidades equitativas de acceder a programas productivos y de empleo, lo que repercute en su autonomía y autodeterminación. ¿Qué prioridad le dará usted a resolver este problema en su ejercicio como congresista?': ['Baja', 'Media', 'Alta'],
  '¿Estaría usted a favor o en contra de hacer control político y exigencias al Ministerio de Salud y Protección Social para que garantice el cumplimiento de la Ley 1257 para que las EPS y las administradoras del régimen subsidado garanticen la atención y alojamiento de mujeres víctimas de violencias?': ['En contra', 'No he definido mi posición/No tengo una posición', 'A favor'],
  '¿Estaría usted a favor o en contra de hacer control político a la implementación del acuerdo de paz, especialmente en relación con el enfoque de género, por ejemplo, en temas como la formalización de las tierras para mujeres rurales?': ['En contra', 'No he definido mi posición/No tengo una posición', 'A favor'],
  '¿Estaría usted a favor o en contra de impulsar un proyecto de ley que garantice la implementación de un sistema educativo con enfoque de género y territorial desde la primera infancia?': ['En contra', 'No he definido mi posición/No tengo una posición', 'A favor'],
  'La policía incurre en prácticas corruptas como la complicidad con actores ilegales y la aceptación de sobornos. ¿Qué prioridad le dará usted a resolver este problema en su ejercicio como congresista?': ['Baja', 'Media', 'Alta'],
  'Las campañas políticas incumplen las reglas de financiación e ingreso de recursos ilícitos, practican la compra y trasteo de votos en periodos electorales. ¿Qué prioridad le dará usted a resolver este problema en su ejercicio como congresista?': ['Baja', 'Media', 'Alta'] 
}

const Graph = ({ data, size, question, label}) => {
  const svgRef = useRef(null);
  const { width, height, margin } = size;
  const svgWidth = width - margin * 2;
  const svgHeight = height;

  useEffect(() => {
    const svgContainer = d3.select(svgRef.current);
    svgContainer.selectAll("*").remove(); //cleanup

    const x = d3.scaleLinear().range([100, width - 100]);
    x.domain([-10, 10]);
    let tickLabels = [];
    tickLabels[1] = label ? xAxles[label] : ['En contra', 'No he definido mi posición/No tengo una posición', 'A favor'],
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

    const nombre = filterData.find(n  => n.fields.Nombre === 'Diana Rodríguez Uribe')

    console.log(nombre, 'nombre')
    console.log(ans, 'ans')
    console.log(filterData, 'filter-data')
    console.log(data, 'data')

    let candidates = svgContainer
      .selectAll("svg")
      .data(filterData)
      .enter()
      .append("circle")
      .style("position", "relative")
      .attr("r", isMobileOnly ? 10 : 15)
      .attr("fill", (d) => {
        switch (d.fields.Partido_politico) {
          case "Partido Alianza verde":
            return "#00D857";
          case "Alianza Verde":
            return "#8CDDD3";
          case "Estamos Listas Colombia":
            return "#FF00A4";
          case "Coalición Centro Esperanza":
            return "#64FFA3";
          case "Partido de la U":
            return "#FFF422";
          case "Coalición Alianza Verde Centro Esperanza":
            return "#999999";
          case "Cambio Radical":
            return "#142FF4";
          case "Partido de la Unión por la gente":
            return "#FFF422";
          case "Pacto Histórico":
            return "#7E3BFF";
          case "Partido Liberal Colombiano":
            return "#FF2928";
          case "Fuerza Ciudadana":
            return "#FF9D00";
          case "Nuevo Liberalismo":
            return "#FFCCF1";
          case "Centro Democrático":
            return "#839EFF";
            case "Gente en Movimiento":
            return "#00AA45";
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
            switch (politicalParty) {
              case "Alianza Verde":
                return "#8CDDD3";
              case "Estamos Listas Colombia":
                return "#FF00A4";
              case "Coalición Centro Esperanza":
                return "#64FFA3";
              case "Partido de la U":
                return "#FFF422";
              case "Cambio Radical":
                return "#142FF4";
              case "Pacto Histórico":
                return "#7E3BFF";
              case "Partido Liberal Colombiano":
                return "#FF2928";
              case "Fuerza Ciudadana":
                return "#FF9D00";
              case "Nuevo Liberalismo":
                return "#FFCCF1";
              case "Centro Democrático":
                return "#839EFF";
              case "Gente en Movimiento":
                return "#00AA45";
              default:
                return "black";
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
      <SvgWrapper id="svg-wrapper" >
        <svg id="svg" ref={svgRef} width={svgWidth} height={svgHeight} />
      </SvgWrapper>
      <GraphScroll>*Deslizarse a lo ancho</GraphScroll>
      <References>
        <Reference>
          <Circle color={"#8CDDD3"} />
          <Paragraph color="black" desktopFontSize="xs">
            Alianza Verde
          </Paragraph>
        </Reference>
        <Reference>
          <Circle color={"#FF00A4"} />
          <Paragraph color="black" desktopFontSize="xs">
            Estamos Listas Colombia
          </Paragraph>
        </Reference>
        <Reference>
          <Circle color={"#64FFA3"} />
          <Paragraph color="black" desktopFontSize="xs">
            Coalición Centro Esperanza
          </Paragraph>
        </Reference>
        <Reference>
          <Circle color={"#FFF422"} />
          <Paragraph color="black" desktopFontSize="xs">
            Partido de la U
          </Paragraph>
        </Reference>
        <Reference>
          <Circle color={"#142FF4"} />
          <Paragraph color="black" desktopFontSize="xs">
            Cambio Radical
          </Paragraph>
        </Reference>
        <Reference>
          <Circle color={"#7E3BFF"} />
          <Paragraph color="black" desktopFontSize="xs">
            Pacto Histórico
          </Paragraph>
        </Reference>
        <Reference>
          <Circle color={"#FF2928"} />
          <Paragraph color="black" desktopFontSize="xs">
            Partido Liberal Colombiano
          </Paragraph>
        </Reference>
        <Reference>
          <Circle color={"#FF9D00"} />
          <Paragraph color="black" desktopFontSize="xs">
            Fuerza Ciudadana
          </Paragraph>
        </Reference>
        <Reference>
          <Circle color={"#FFCCF1"} />
          <Paragraph color="black" desktopFontSize="xs">
            Nuevo Liberalismo
          </Paragraph>
        </Reference>
        <Reference>
          <Circle color={"#839EFF"} />
          <Paragraph color="black" desktopFontSize="xs">
            Centro Democrático
          </Paragraph>
        </Reference>
        <Reference>
          <Circle color={"#00AA45"} />
          <Paragraph color="black" desktopFontSize="xs">
            Gente en Movimiento
          </Paragraph>
        </Reference>
      </References>
    </>
  );
};

export default Graph;
