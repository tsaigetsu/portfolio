import ContactBtn from "./ContactBtn";
import MoreBtn from "./MoreBtn";
import About from "./About";
import Portfolio from "./Portfolio";
import avatar from "../../public/img/me.jpg";
import Style from "./Style";

export default function Main() {
  return (
    <main className="main" id="home">
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
      <About/>
      <Portfolio/>
      <Style/>
    </main>
  );
}
