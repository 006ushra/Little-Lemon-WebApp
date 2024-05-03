import "../Styles/Homepage.css"
import BannerImage from "../assets/home_background_img.jpg";
import OrganicVegImg from "../assets/organic-vegetables.webp";
import CoffeeImg from "../assets/coffee.jpg";
import DeliveryImg from "../assets/delivery.jpg"


function Homepage() {
    return (
        <>
        <div className="hero-section" >
            <div className="title-div" >
                <h1 className="title" >Little Lemon</h1>
                <h2 className="subtext" >Chicago</h2>
            </div>
            <img className="banner-image" src={BannerImage} />
        </div>
        <div className="info-section" >
            <p className="info">We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
        </div>
        <div className="info-pics-section" >
            <div className="info-pic-div" >
                <img className="info-pic" src={OrganicVegImg} />
                <h3 className="info-pic-title" >We Use Organic Vegetables</h3>
                <p className="info-pic-text" >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
            <div className="info-pic-div" >
                <img className="info-pic" src={CoffeeImg} />
                <h3 className="info-pic-title" >We Roast Our Own Coffee</h3>
                <p className="info-pic-text" >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
            <div className="info-pic-div" >
                <img className="info-pic" src={DeliveryImg} />
                <h3 className="info-pic-title" >We Deliver Your Favorite Dishes</h3>
                <p className="info-pic-text" >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
        </div>
        </>
    )
}

export default Homepage;