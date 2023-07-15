import './App.css';
import { Calendar } from './Calendar';
import { Home } from './Home';
import { Navbar } from './Navbar';
import Banner from './components/Banner';
import Header from './components/Header';
import News from './components/News';
import OngoingProj from './components/OngoingProj';
import Portfolio from './components/Portfolio';
import CalenarPage from './pages/CalendarPage'
import { Routes, Route, Link } from "react-router-dom";



function App() {
  return (<div className="App">
    <Header/>
    <Routes>
    <Route path="/" element={<Home />} />
      <Route path="/ongoingProject" element={<OngoingProj />} />
      <Route path="/portfolio" element={<Portfolio />} />
      <Route path="/news" element={<News />} />
      <Route path="/calendar" element={<Calendar />} />
    </Routes>
  </div >
  );
}

export default App;
