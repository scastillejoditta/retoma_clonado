import styled from "styled-components";
import Feminindex from "./assets/Feminindex";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <SvgWrapper>
          <Feminindex />
        </SvgWrapper>
        <p>Sitio en Construcción</p>
        <p className="App-text">
          Estamos trabajando en el Feminindex 2021, tercera edición del índice
          de Eco Feminita que releva las posiciones de les candidates sobre la
          agenda de género. Si sos candidate o formas parte de un equipo de
          campaña y querés responder, envianos un correo a{" "}
          <span className="App-mail">hola@ecofeminita.com</span>
        </p>
      </header>
    </div>
  );
}

const SvgWrapper = styled.div`
  > svg {
    height: 200px;
    width: 100%;
  }
`;

export default App;
