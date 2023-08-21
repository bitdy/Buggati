import "./NewsTeaser.css";
import { GrLinkNext } from "react-icons/gr";

function NewsTeaser() {
  return (
    <section className="container mt_80">
      <header className="Gallery_header">News</header>
      <div className="row g-2">
        <div className="col-12 col-lg-6">
          <img className="NewsTeaser_img" src="images/News.jpeg" alt="" />
        </div>
        <div className="col-12 col-lg-6 position-relative">
          <div className="NewsTeaser_text">
            <div className="NewsTeaser_detail">
              <address>MOLSHEIM</address>
              <time>03 July 2023</time>
            </div>
            <h3>
              <a href="#">
                <p className="NewsTeaser_text_paragraph">
                  A MOTORSPORT PIONEER CELEBRATES A SPECIAL ANNIVERSARY: 100
                  YEARS OF THE TRAILBLAZING BUGATTI TYPE 32 ‘TANK’
                </p>
              </a>
            </h3>
            <a className="NewsTeaser_arrow arrow_link" href="">
              To Press Release <GrLinkNext size="15px" color="707070" className="mx-2" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default NewsTeaser;
