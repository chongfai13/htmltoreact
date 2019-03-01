import React from "react";

class Sitename extends React.Component {
  render() {
    return (

        <header class="site-header wrapper" role="banner">
            <div class="row">
                <hgroup>
                    <h1 class="site-title"> <a href="index.html" title="Read" rel="home">Blackwell</a> </h1>
                    <h2 class="site-description">Hello! I'm ChongHwi</h2>
                </hgroup>
            </div>

            <nav id="site-navigation" className="main-navigation" role="navigation">
                <ul>
                    <li className="current-menu-item">
                        <a href="index.html">Home</a>
                    </li>
                    <li>
                        <a href="about.html">About</a>
                    </li>
                    <li>
                        <a href="portfolio.html">Portfolio</a>
                    </li>
                    <li>
                        <a href="contact.html">Contact</a>
                    </li>
                </ul>
            </ nav>
        </header>
    );
  }
}

export default Sitename;
