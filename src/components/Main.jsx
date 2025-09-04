import ContactBtn from "./ContactBtn";
import MoreBtn from "./MoreBtn";
import avatar from "../../public/img/me.jpg";

export default function Main() {
  return (
    <main className="main">
      <div className="main-wrapper">
        <div className="text-wrapper">
          <h1 className="main-heading">
            Redefining
            <br /> the Web Design
          </h1>
          <p className="main-paragraf">
            Need a new website for your business or update your current one?
            Here's a great opportunity for you
          </p>
          <div className="btn-wrapper">
            <ContactBtn />
            <MoreBtn text="Explore" />
          </div>
        </div>
        <div className="img-wrapper">
          <img className="main-image" alt="Photo of mine" src={avatar}></img>
        </div>
      </div>
      {/* <section className="about-section" id="about-section">
            </section> */}
      {/* <section className="features">
                <div className="feature left">
                    <h3>Gracefully</h3>
                    <p>Minimalism is my thing, but not the limit</p>
                    <img src="..." alt="">
                    <img src="..." alt="">
                </div>
                <div className="feature right">
                    <h3>FAST</h3>
                    <p>Landing in 2 business days</p>
                    <img src="..." alt="">
                    <img src="..." alt="">
                </div>
            </section> */}
      <section className="about-section" id="about-section">
        <div className="about-wrapper">
          <div className="about-right">
            <h2 className="second-heading-about">FAST</h2>
            <p className="paragraf-about">Landing in 2 business days</p>
          </div>
          <div className="about-left">
            <h2 className="second-heading-about">Gracefully</h2>
            <p className="paragraf-about">
              Minimalism is my thing, but not the limit
            </p>
          </div>
          <div className="about-right">
            <h2 className="second-heading-about">Modernity</h2>
            <p className="paragraf-about">You will be proud of your site</p>
          </div>
          <div className="about-left">
            <h2 className="second-heading-about">Convenience</h2>
            <p className="paragraf-about">
              Customers will appreciate the ease of use
            </p>
          </div>
          <div className="about-right">
            <h2 className="second-heading-about">Brand</h2>
            <p className="paragraf-about">Unique, not just one of them</p>
          </div>
        </div>
      </section>
    </main>
  );
}
