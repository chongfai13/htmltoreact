import React from "react";




import '../css/print.css';
import '../css/grid.css';
import '../css/style.css';


import '../css/normalize.css';
import '../css/font-awesome.css';
import '../js/google-code-prettify/prettify.css';
import '../css/uniform.default.css';
import '../css/main.css';
import '../css/flexslider.css';



class LandingPage extends React.Component {
  render() {
    return (
      <div className="entry-content">
        <div className="featured-image">
          <img src="images/blog/blog-01.jpg" alt="blog-image" />
        </div>
        {}
        <div className="portfolio-text">
          <p>
            Born 1986 year of Tiger that always inspire me to bring out the
            courage to pursuit my dreams. A bright, talented, ambitious and
            self-motivated web designer with a strong technical background who
            possesses self-discipline and the ability to work with the minimum
            of supervision.
          </p>
          <p className="launch-wrap">
            <a href="portfolio.html">Launch Project</a>
          </p>
        </div>
        {}
        <hr />
      </div>
    );
  }
}

export default LandingPage;
