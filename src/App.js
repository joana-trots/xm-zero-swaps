import React, {useState, useEffect} from "react";
import './styles/App.sass';
import Header from './components/Header';
import Top from './components/Main/Top';
import Currency from './components/Main/Currency';
import axios from "axios";
import WhyTrade from "./components/Main/WhyTrade";
import Registration from "./components/Main/Register";
import Gallery from "./components/Main/Gallery";
import BigFairHuman from "./components/Main/BigFairHuman";
import Footer from "./components/Footer";
import Background from './components/Background/index';

function App() {
  const [coins, setCoins] = useState([]);
  useEffect(() => {
      axios.get('https://api.coinlore.net/api/tickers/').then((response) => {
          setCoins([
            response.data.data.find(el => el.symbol === "BTC"), 
            response.data.data.find(el => el.symbol === "ETH"), 
            response.data.data.find(el => el.symbol === "XRP"), 
            response.data.data.find(el => el.symbol === "LTC"), 
            response.data.data.find(el => el.symbol === "BCH")
          ])
      }).catch((error) => {
          console.log(error)
      })
      
  }, [])

  return (
    <div className="App">
      <div className='wrapper'>
        <header className='header'><Header/></header>
        <main className='main'>
          <Background />
          <Top />
          <Currency coins={coins} />
          <WhyTrade />
          <Registration />
          <Gallery />
          <BigFairHuman />
        </main>
        <footer className='footer'><Footer /></footer>
      </div>
      
    </div>
  );
}

export default App;
