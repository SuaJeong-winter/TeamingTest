import './App.css';
import Banner from './components/Banner';
import Header from './components/Header';
import News from './components/News';
import OngoingProj from './components/OngoingProj';
import Portfolio from './components/Portfolio';



function App() {
  return (
    <div className="App">
      <div className='Header'>
        <Header/>
        헤더 영역
      </div>
      <div className="Banner">
      <Banner/>
        배너 영역
      </div>
      <div className="bodySection">
        <div className="onGoingProj">
          <OngoingProj/>
          진행 중인 프로젝트 영역
        </div>
        <div className="news">
          <News/>
          새 소식 영역
        </div>
      </div>
      <div className="portfolio">
        <Portfolio/>
        포트폴리오 영역
      </div>
    </div>
  );
}

export default App;
