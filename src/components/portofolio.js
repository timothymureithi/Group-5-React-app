function Portfolio() {
  return (
    <div id="portfolio" className="container-fluid text-center bg-grey">
      <h2>Portfolio</h2>
      <br />
      <h4>What we have created</h4>
      <div className="row text-center slideanim">
        <div className="col-sm-4">
          <div className="thumbnail">
            <img
              src="https://images.unsplash.com/photo-1511739001486-6bfe10ce785f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
              alt="Paris"
              width="400"
              height="300"
            />
            <p>
              <strong>Paris</strong>
            </p>
            <p>Yes, we built Paris</p>
          </div>
        </div>
        <div className="col-sm-4">
          <div className="thumbnail">
            <img src="https://images.unsplash.com/photo-1595901688281-9cef114adb0b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
              alt="New York"
              width="400"
              height="300"
            />
            <p>
              <strong>New York</strong>
            </p>
            <p>We built New York</p>
          </div>
        </div>
        <div className="col-sm-4">
          <div className="thumbnail">
            <img src="https://images.unsplash.com/photo-1471306224500-6d0d218be372?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
              alt="San Francisco"
              width="400"
              height="300"
            />
            <p>
              <strong>San Francisco</strong>
            </p>
            <p>Yes, San Fran is ours</p>
          </div>
        </div>
      </div>
      <br />

      <h2>What our customers say</h2>
      <div
        id="myCarousel"
        className="carousel slide text-center"
        data-ride="carousel"
      >
        <ol className="carousel-indicators">
          <li
            data-target="#myCarousel"
            data-slide-to="0"
            className="active"
          ></li>
          <li data-target="#myCarousel" data-slide-to="1"></li>
          <li data-target="#myCarousel" data-slide-to="2"></li>
        </ol>

        <div className="carousel-inner" role="listbox">
          <div className="item active">
            <h4>
              "This company is the best. I am so happy with the result!"
              <br />
              <span>Michael Roe, Vice President, Comment Box</span>
            </h4>
          </div>
          <div className="item">
            <h4>
              "One word... WOW!!"
              <br />
              <span>John Doe, Salesman, Rep Inc</span>
            </h4>
          </div>
          <div className="item">
            <h4>
              "Could I... BE any more happy with this company?"
              <br />
              <span>Chandler Bing, Actor, FriendsAlot</span>
            </h4>
          </div>
        </div>

        <a
          className="left carousel-control"
          href="#myCarousel"
          role="button"
          data-slide="prev"
        >
          <span
            className="glyphicon glyphicon-chevron-left"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="right carousel-control"
          href="#myCarousel"
          role="button"
          data-slide="next"
        >
          <span
            className="glyphicon glyphicon-chevron-right"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
    </div>
  );
}
export default Portfolio;
