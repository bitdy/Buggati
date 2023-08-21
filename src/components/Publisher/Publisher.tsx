import "./Publisher.css";
import { GrLinkNext } from "react-icons/gr";

const Publisher = () => {
  return (
    <section className="container mt_80">
      <div className="row g-2">
        <div className="col-12 col-md-6 col-lg-4">
          <div className="publider_img">
            <img src="images/GalleryImg08.jpeg" alt="" />
            <div className="NewsTeaser_text">
              <div className="NewsTeaser_detail">
                <address>MOLSHEIM</address>
                <time>03 July 2023</time>
              </div>
              <h3>
                <a href="#">
                  <p className="NewsTeaser_text_paragraph">
                    BUGATTI TO GROW ITS MOLSHEIM HOME
                  </p>
                </a>
              </h3>
              <a className="NewsTeaser_arrow arrow_link" href="">
                To Press Release
                <GrLinkNext size="15px" color="707070" className="mx-2" />
              </a>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-6 col-lg-4">
          <div className="publider_img">
            <img src="images/GalleryImg09.jpeg" alt="" />
            <div className="NewsTeaser_text">
              <div className="NewsTeaser_detail">
                <address>MOLSHEIM</address>
                <time>03 July 2023</time>
              </div>
              <h3>
                <a href="#">
                  <p className="NewsTeaser_text_paragraph">
                    BUGATTI BOLIDE MAKES SPECTACULAR PUBLIC DEBUT AT 24 HOURS OF
                    LE MANS CENTENARY
                  </p>
                </a>
              </h3>
              <a className="NewsTeaser_arrow arrow_link" href="">
                To Press Release
                <GrLinkNext size="15px" color="707070" className="mx-2" />
              </a>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-6 col-lg-4">
          <div className="publider_img">
            <img src="images/GalleryImg10.jpeg" alt="" />
            <div className="NewsTeaser_text">
              <div className="NewsTeaser_detail">
                <address>MOLSHEIM</address>
                <time>03 July 2023</time>
              </div>
              <h3>
                <a href="#">
                  <p className="NewsTeaser_text_paragraph">
                    THE HISTORY OF BUGATTI AT 24 HOURS OF LE MANS
                  </p>
                </a>
              </h3>
              <a className="NewsTeaser_arrow arrow_link" href="">
                To Press Release
                <GrLinkNext size="15px" color="707070" className="mx-2" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="viewAll_NewsTeaser">
        <a className="NewsTeaser_arrow arrow_link " href="">
          View all news
          <GrLinkNext size="15px" color="707070" className="mx-2" />
        </a>
      </div>
    </section>
  );
};

export default Publisher;
