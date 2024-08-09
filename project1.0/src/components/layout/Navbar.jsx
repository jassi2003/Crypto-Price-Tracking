import React,{useContext} from 'react'
import { CoinContext } from '../../context/CoinContext'
import './navbar.css'
import { Link } from 'react-router-dom'



const Navbar = () => {
const {setCurrency}= useContext(CoinContext)

  const CurrencyHandler=(event)=>{
switch(event.target.value){
  case "usd":{
    setCurrency({name:"usd",symbol:"$"});
    break;
  }
  case "eur":{
    setCurrency({name:"eur",symbol:"€"});
    break;
  }
  case "inr":{
    setCurrency({name:"inr",symbol:"₹"});
    break;
  }
  default:{
    setCurrency({name:"usd",symbol:"$"});
    }

}



  }



  return (
<div className="find1">
  <Link to="/">
<img class="logo-img"src="https://cdn.vectorstock.com/i/preview-1x/21/08/letter-c-creative-technological-dotted-modern-logo-vector-44712108.jpg" alt="" />
</Link>
 <div className="navv-elements">
 <ul>
 <Link to="/">  <li>Home</li>  </Link>
 <li>Features</li>
 <li>Pricing</li>
 <li>Blog</li>
 </ul>
 </div>
 <div className="navv-right">
  <select class="currency-select" onChange={CurrencyHandler}>
<option value="usd">USD</option>
<option value="eur">EUR</option>
<option value="inr">INR</option>
  </select>
  <button className="btn">Sign Up <img src="https://static.thenounproject.com/png/143046-200.png" alt="" /></button>
 </div>

</div>
  )
}

export default Navbar