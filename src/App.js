import "./App.css";
import Header from "./components/Header";
import Nav from "./components/Nav";
import GlobalStyles from "./style/Global.styles";


function App() {
  return (
    <div className="app">
      <GlobalStyles />
      <Header />
      <Nav />
      
    </div>
  );
}

export default App;
