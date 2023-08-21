import "./Home.css";
import Header from "../components/Header/Header";
import Hero from "../components/Hero/Hero";
import SubHero from "../components/SubHero/SubHero";
import GalleryItems from "../components/GalleryItems/GalleryItems";
import NewsTeaser from "../components/NewsTeaser/NewsTeaser";
import Publisher from "../components/Publisher/Publisher";

const Home = () => {
  return (
    <>
      <Header />
      <Hero />
      <SubHero />
      <section className="container mt_80">
        <header className="Gallery_header">Models</header>
        <div className="row g-2">
          <div className="col-12 col-md-6">
            <GalleryItems
              GalleryImage="images/GalleryImg01.jpeg"
              GalleryText="W16 Mistral"
            />
          </div>
          <div className="col-12 col-md-6">
            <GalleryItems
              GalleryImage="images/GalleryImg02.jpeg"
              GalleryText="One Off Models"
            />
          </div>
          <div className="col-12 col-md-6">
            <GalleryItems
              GalleryImage="images/GalleryImg03.jpeg"
              GalleryText="Chiron Models"
            />
          </div>
          <div className="col-12 col-md-6">
            <GalleryItems
              GalleryImage="images/GalleryImg04.jpeg"
              GalleryText="Concept Cars"
            />
          </div>
        </div>
      </section>

      <section className="container mt_80">
        <header className="Gallery_header">Bugatti Universe</header>
        <div className="row g-2">
          <div className="col-12 col-md-6 col-lg-4">
            <GalleryItems
              GalleryImage="images/GalleryImg05.jpeg"
              GalleryText="Lifestyle"
            />
          </div>
          <div className="col-12 col-md-6 col-lg-4">
            <GalleryItems
              GalleryImage="images/GalleryImg06.jpeg"
              GalleryText="Find a BUGATTI Partner"
            />
          </div>
          <div className="col-12 col-md-6 col-lg-4">
            <GalleryItems
              GalleryImage="images/GalleryImg07.jpeg"
              GalleryText="Career"
            />
          </div>
        </div>
      </section>

      <NewsTeaser />
      <Publisher />
    </>
  );
};

export default Home;
