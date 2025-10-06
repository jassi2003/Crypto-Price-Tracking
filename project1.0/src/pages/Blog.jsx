import React from 'react'
import './blog.css'

const Blog = () => {
  return (
<section class="blog-section">
  <h2 class="blog-title">Crypto Insights & Market Trends</h2>
  <p class="blog-subtitle">
    Get the latest updates, insights, and in-depth articles about cryptocurrencies, 
    blockchain technology, and global market movements.
  </p>

  <div class="blog-container">
    <div class="blog-card">
      <div class="blog-content">
        <h3>Bitcoin Price Analysis – Volatility Returns in 2025</h3>
        <p>
          Bitcoin continues to dominate the crypto market, showing strong momentum in early 2025.
          Analysts predict a potential breakout beyond previous highs due to increased institutional adoption.
        </p>
        <a href="https://www.investopedia.com/articles/forex/121815/bitcoins-price-history.asp" class="read-more">Read More →</a>
      </div>
    </div>

    <div class="blog-card">
      <div class="blog-content">
        <h3>Ethereum 2.0 – The Shift to Proof of Stake</h3>
        <p>
          Ethereum's transition to a proof-of-stake network marks a historic step towards 
          scalability and energy efficiency. Here’s what investors should know.
        </p>
        <a href="https://www.investopedia.com/ethereum-2-0-6455959" class="read-more">Read More →</a>
      </div>
    </div>

    <div class="blog-card">
      <div class="blog-content">
        <h3>Top Altcoins to Watch in 2025</h3>
        <p>
          Beyond Bitcoin and Ethereum, several altcoins are making headlines for innovation and
          performance. Explore the projects leading the next crypto wave.
        </p>
        <a href="https://www.youhodler.com/blog/most-interesting-altcoins-to-consider-now" class="read-more">Read More →</a>
      </div>
    </div>
  </div>
</section>
  )
}

export default Blog