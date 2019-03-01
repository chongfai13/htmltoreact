import React from "react";
import LandingPage from "./landing_page";

class Main extends React.Component {
  render() {
    return (
      <section id="main" className="middle wrapper">
        <div className="row row-fluid">

          <div id="primary" className="site-content">

            <div id="content" role="main">

              <div className="readable-content row-fluid page">

                <article className="page hentry">

                  <LandingPage />


                </article>

              </div>

            </div>

          </div>

        </div>
      </section>
    );
  }
}

export default Main;
