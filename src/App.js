import { Container } from '@mui/material';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import "./App.css";
import Header from "./components/Header";
import Movies from './components/Movies';
import Nav from "./components/Nav";
import Search from './components/Search';
import Trending from './components/Trending';
import TvSeries from './components/TvSeries';
import GlobalStyles from "./style/Global.styles";


function App() {
  return (
    <Router>
    <div className="app">
      <Header />
      <Nav />
      <Container>
        <Routes>
          <Route exact path='/' element={<Trending />} />
          <Route path='/movies' element={<Movies/>} />
          <Route path='/tvSeries' element={<TvSeries/>} />
          <Route path='/search' element={<Search/>} />
        </Routes>
      </Container>

      <GlobalStyles />
     
    </div>
    </Router>
  );
}

export default App;
