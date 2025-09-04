import ContactBtn from "./ContactBtn";
import MoreBtn from "./MoreBtn";

export default function Main(){
    return (
        <main className="main">
            <div className="main-wrapper">
                <div className="text-wrapper">
                    <h1 className="main-heading">Redefining<br /> the Web Design</h1>
                    <p className="main-paragraf">Need a new website for your business or update your current one? Here's a great opportunity for you</p>
                    <div className="btn-wrapper">
                        <ContactBtn/>
                        <MoreBtn text="Explore"/>
                    </div>
                </div>
                <div className="img-wrapper">
                    <img className="main-image" alt="Photo of mine" src=''></img>
                </div>
            </div>
            {/* <section className="about-section" id="about-section">
            </section> */}
            <section className="features">
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
            </section>
        </main>
    );
}