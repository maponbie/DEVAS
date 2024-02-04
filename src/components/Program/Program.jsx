import React from "react";
import "./Program.css";

const Program = () => {
  return (
    <>
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <title>Get Started</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css"
          integrity="sha512-+4zCK9k+qNFUR5X+cKL9EIR+ZOhtIloNl9GIKS57V1MyNsYpYcUrUeQc9vNfzsWfV28IaLL3i96P9sdNyeRssA=="
          crossOrigin="anonymous"
        />
      </head>
      <body>
        {/* Header */}
        <header>
          <nav className="navbar">
            <div className="container">
              <a href="program.html" className="navbar-brand">
                Services and Programs
              </a>
              <div className="navbar-nav">
                <a href="">Home</a>
              </div>
            </div>
          </nav>
          <div className="banner">
            <div className="container">
              <h1 className="banner-title">Nourish Net Blog</h1>
              <p>
                Our comprehensive range of services is designed
                <br /> to meet the diverse needs of college students facing food
                insecurity
                <br />
                From on-campus food pantries to meal assistance programs,
                <br /> we provide vital support to ensure that no student goes
                hungry.
              </p>
              <form>
                <input
                  type="text"
                  className="search-input"
                  placeholder="find an article"
                />
                <button type="submit" className="search-btn">
                  <i className="fas fa-search"></i>
                </button>
              </form>
            </div>
          </div>
        </header>
        {/* End of Header */}

        {/* Section 1 */}
        <section className="design" id="design">
          <div className="container">
            <div className="title">
              <h2>Colleges and Neighbors</h2>
              <p>Current update of how Nourish Net is impacting colleges</p>
            </div>

            <div className="design-content">
              {/* Item 1 */}
              <div className="design-item">
                <div className="design-img">
                  <img src="./1.jpg" alt="" />
                  <span>
                    <i className="far fa-heart"></i> 100
                  </span>
                  <span>East</span>
                </div>
                <div className="design-title">
                  <a href="#">Impacts in the East</a>
                </div>
              </div>
              {/* End of Item 1 */}
              {/* Item 2 */}
              <div className="design-item">
                <div className="design-img">
                  <img src="./2.jpg" alt="" />
                  <span>
                    <i className="far fa-heart"></i> 85
                  </span>
                  <span>Midwest</span>
                </div>
                <div className="design-title">
                  <a href="#">Impacts in the Midwest</a>
                </div>
              </div>
              {/* End of Item 2 */}
              {/* Item 3 */}
              <div className="design-item">
                <div className="design-img">
                  <img src="./3.jpg" alt="" />
                  <span>
                    <i className="far fa-heart"></i> 300
                  </span>
                  <span>South</span>
                </div>
                <div className="design-title">
                  <a href="#">Impacts in the South</a>
                </div>
              </div>
              {/* End of Item 3 */}
              {/* Item 4 */}
              <div className="design-item">
                <div className="design-img">
                  <img src="./4.jpg" alt="" />
                  <span>
                    <i className="far fa-heart"></i> 150
                  </span>
                  <span>West Coast</span>
                </div>
                <div className="design-title">
                  <a href="#">Impacts in the West Coast</a>
                </div>
              </div>
              {/* End of Item 4 */}
              {/* Item 5 */}
              <div className="design-item">
                <div className="design-img">
                  <img src="./5.jpg" alt="" />
                  <span>
                    <i className="far fa-heart"></i> 200
                  </span>
                  <span>Mid-Atlantic</span>
                </div>
                <div className="design-title">
                  <a href="#">Impacts in Mid-Atlantic</a>
                </div>
              </div>
              {/* End of Item 5 */}
              {/* Item 6 */}
              <div className="design-item">
                <div className="design-img">
                  <img src="./6.jpg" alt="" />
                  <span>
                    <i className="far fa-heart"></i> 500
                  </span>
                  <span>New England</span>
                </div>
                <div className="design-title">
                  <a href="#">Impacts in New England</a>
                </div>
              </div>
              {/* End of Item 6 */}
            </div>
          </div>
        </section>
        {/* End of Section 1 */}

        {/* Section 2 */}
        <section className="design" id="design2">
          <div className="container">
            <div className="title">
              <h2>2023 Impact Review</h2>
              <p>Nourish Net Community Impact Review</p>
            </div>

            <div className="design-content">
              {/* Item 1 */}
              <div className="design-item">
                <div className="design-img">
                  <img src="./impact_1.jpg" alt="" />
                  <span>
                    <i className="far fa-heart"></i> 500
                  </span>
                  <span>January</span>
                </div>
                <div className="design-title">
                  <a href="#">Working with Food Bank of America</a>
                </div>
              </div>
              {/* End of Item 1 */}
              {/* Item 2 */}
              <div className="design-item">
                <div className="design-img">
                  <img src="./impact_2.jpg" alt="" />
                  <span>
                    <i className="far fa-heart"></i> 600
                  </span>
                  <span>March</span>
                </div>
                <div className="design-title">
                  <a href="#">College Soup Kitchens</a>
                </div>
              </div>
              {/* End of Item 2 */}
              {/* Item 3 */}
              <div className="design-item">
                <div className="design-img">
                  <img src="./impact_3.jpg" alt="" />
                  <span>
                    <i className="far fa-heart"></i> 700
                  </span>
                  <span>April</span>
                </div>
                <div className="design-title">
                  <a href="#">ELEVATE college programs</a>
                </div>
              </div>
              {/* End of Item 3 */}
              {/* Item 4 */}
              <div className="design-item">
                <div className="design-img">
                  <img src="./impact_4.jpg" alt="" />
                  <span>
                    <i className="far fa-heart"></i> 800
                  </span>
                  <span>July</span>
                </div>
                <div className="design-title">
                  <a href="#">Your Donation Helped</a>
                </div>
              </div>
              {/* End of Item 4 */}
              {/* Item 5 */}
              <div className="design-item">
                <div className="design-img">
                  <img src="./impact_5.jpg" alt="" />
                  <span>
                    <i className="far fa-heart"></i> 900
                  </span>
                  <span>October</span>
                </div>
                <div className="design-title">
                  <a href="#">Impact Fund Initiatives</a>
                </div>
              </div>
              {/* End of Item 5 */}
              {/* Item 6 */}
              <div className="design-item">
                <div className="design-img">
                  <img src="./impact_6.jpg" alt="" />
                  <span>
                    <i className="far fa-heart"></i> 1000
                  </span>
                  <span>December</span>
                </div>
                <div className="design-title">
                  <a href="#">Celebrate with Us</a>
                </div>
              </div>
              {/* End of Item 6 */}
            </div>
          </div>
        </section>
        {/* End of Section 2 */}

        {/* About */}
        <section className="about" id="about">
          <div className="container">
            <div className="about-content">
              <div>
                <img src="./logo.png" alt="" />
              </div>
              <div className="about-text">
                <div className="title">
                  <h2>Nourish Net</h2>
                  <p>Our Vision</p>
                </div>
                <p>
                  Nourish Net's vision is “No college student should have to
                  worry about where their next meal is coming from.” To make
                  this vision a reality, we commit to Diversity, Equity, and
                  Inclusion throughout our organization and across the nation.
                  We proudly intend to integrate and elevate diverse views and
                  perspectives to tackle systemic and racial injustices at
                  universities around the United States.
                </p>
                <p>
                  We work with multiple local organizations like Girl Scouts,
                  Feeding America, and the Houston Food Bank (or more local food
                  programs) to help provide donations and opportunities for our
                  college students to receive quality meals and opportunities
                  for our volunteers to increase our outreach and create events
                  for college students.
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* End of About */}
      </body>
    </>
  );
};

export default Program;
