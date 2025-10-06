import React from 'react'
import './features.css'


const Features = () => {
  return (
    <section class="features-section">
  <h2 class="features-title">Powerful Features of CryptoPlace</h2>
  <p class="features-subtitle">
    Stay ahead of the market with real-time data, insightful charts, and user-friendly tools — 
    all in one place.
  </p>

  <div class="features-container">
    <div class="feature-box">
      <img src="https://cdn-icons-png.flaticon.com/512/9420/9420856.png" alt="Live Prices" />
      <h3>Real-Time Price Tracking</h3>
      <p>
        Get up-to-the-second price updates for thousands of cryptocurrencies, 
        including Bitcoin, Ethereum, and altcoins.
      </p>
    </div>

    <div class="feature-box">
      <img src="https://cdn-icons-png.flaticon.com/512/3514/3514517.png" alt="Graph Analysis" />
      <h3>Interactive Charts</h3>
      <p>
        Visualize price movements through dynamic line graphs and analyze trends 
        to make smarter trading decisions.
      </p>
    </div>

    <div class="feature-box">
      <img src="https://cdn-icons-png.flaticon.com/512/1170/1170678.png" alt="Search Coins" />
      <h3>Advanced Search</h3>
      <p>
        Quickly search for any cryptocurrency by name or symbol to view 
        detailed insights in just seconds.
      </p>
    </div>

    <div class="feature-box">
      <img src="https://cdn-icons-png.flaticon.com/512/3594/3594375.png" alt="Currency Selector" />
      <h3>Multi-Currency Support</h3>
      <p>
        Switch between USD, INR, and EUR to compare crypto values across 
        multiple international currencies.
      </p>
    </div>

    <div class="feature-box">
      <img src="https://cdn-icons-png.flaticon.com/512/597/597874.png" alt="Responsive Design" />
      <h3>Responsive Design</h3>
      <p>
        Access all features seamlessly from your desktop, tablet, or mobile device 
        with our fully responsive interface.
      </p>
    </div>

    <div class="feature-box">
      <img src="https://cdn-icons-png.flaticon.com/512/3281/3281324.png" alt="API Integration" />
      <h3>Powered by CoinGecko API</h3>
      <p>
        Reliable and accurate market data fetched directly from CoinGecko — 
        trusted by developers worldwide.
      </p>
    </div>
  </div>
</section>

  )
}

export default Features