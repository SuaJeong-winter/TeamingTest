import React from 'react'
import Header from './components/Header';
import Banner from './components/Banner';
import OngoingProj from './components/OngoingProj';
import News from './components/News';
import Portfolio from './components/Portfolio';

export const Home = () => {
  return (
    <div className="App">
      <div className='Header'>
        <Header />
      </div>
      <div className="Banner">
        <Banner />
      </div>
      <div className="bodySection">
        <div className="onGoingProj">
          <OngoingProj/>
        </div>
        <div className="news">
          <News />
        </div>
      </div>
      <div className="portfolio">
        <Portfolio />
      </div>
    </div>
  );
}
