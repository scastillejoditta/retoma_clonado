import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
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

export default App;
