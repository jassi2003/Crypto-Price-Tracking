import './home.css'

import React, { useState, useEffect, useContext } from 'react'
import { CoinContext } from '../../context/CoinContext';
import { Link } from 'react-router-dom';

const Home = () => {
    const { allCoin, currency } = useContext(CoinContext);
    const [displayCoin, setDisplayCoin] = useState([]);
    const [input, setInput] = useState('');

const inputHandler=(event)=>{
setInput(event.target.value);
if(event.target.value===""){
    setDisplayCoin(allCoin);
}
}

const searchHandler= async (event)=>{
event.preventDefault();
const coins= await allCoin.filter((item)=>{
    return item.name.toLowerCase().includes(input.toLowerCase())
})

setDisplayCoin(coins)

}


    useEffect(() => {
        setDisplayCoin(allCoin);
    }, [allCoin])

    return (
        <div>
            <div className="home-section">
                <h2>ALL ABOUT CRYPTO</h2>
                <p>Welcome to the world's largest crypto currency marketplace. Sign up to explore more about cryptos</p>
                <form onSubmit={searchHandler}action="">

                    <input onChange={inputHandler} list="coinList" value={input} type="text" placeholder="Search Crypto..." />
  
<datalist id="coinList">
{allCoin.map((item,index)=>(<option key={index} value={item.name}/>))}

</datalist>


                    <button type="submit" >Search</button>
                </form>
            </div>

            <div className="crypto-table">
                <div className="crypto-layout">
                        <p id="hash">#</p>
                        <p>Coins</p>
                         <p>Price</p>
                        <p>24H Change</p>
                        <p id="cap">Market Cap</p>
                </div>
            </div>

            {
                displayCoin.slice(0, 10).map((item, index) => (
                    <Link to={`/coin/${item.id}`} className={`crypto-tablee bg-color-${index + 1}`} key={index}>
                        <p>{item.market_cap_rank}</p>
                        <div class="coin-class">
                            <img class="imgg"src={item.image} alt="" />
                        <p>{item.name +"-" +item.symbol}</p>
                        </div>
                        <p>{currency.symbol}{item.current_price.toLocaleString()}</p>
                        <p className={item.price_change_percentage_24h >0 ? "green":"red"}>
                            {Math.floor(item.price_change_percentage_24h*100)/100}</p>
                        <p>{item.market_cap.toLocaleString()}</p>
                    </Link>
                ))
            }
        </div>
    )
}

export default Home;
