import BannerImage from "../assets/home_background_img.jpg";
import OrganicVegImg from "../assets/organic-vegetables.webp";
import CoffeeImg from "../assets/coffee.jpg";
import DeliveryImg from "../assets/delivery.jpg"


function Homepage() {
    return (
        <>
        <div style={{display: "flex", flexDirection: "row", justifyContent: "space-around"}}>
            <div style={{paddingLeft: "140px"}}>
                <h1 style={{paddingTop: "33vh", color: "#274600", fontFamily: "Markazi Text", fontWeight: "700", fontSize: "40px"}}>Little Lemon</h1>
                <h2 style={{color: "#e7a90a", textAlign: "end", fontFamily: "Markazi Text", fontSize: "30px"}}>Chicago</h2>
            </div>
            <img src={BannerImage} style={{height: "76vh", borderStyle: "solid", borderWidth: "7px", borderColor: "#e7a90a", borderRadius: "7px", marginTop: "30px", marginBottom: "20px"}}/>
        </div>
        <div style={{backgroundColor: "#274600", height: "60vh"}}>
            <p style={{fontFamily: "sans-serif", fontSize: "25px", color: "white", textAlign: "center", paddingLeft: "220px", paddingRight: "220px", paddingTop: "25vh"}}>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
        </div>
        <div style={{display: "flex", justifyContent: "center", paddingTop: "60px", paddingBottom: "60px"}}>
            <div style={{width: "20%", textAlign: "center"}}>
                <img src={OrganicVegImg} style={{height: "200px", width: "200px", objectFit: "cover", borderRadius: "100px", margin: "auto"}}/>
                <h3>We Use Organic Vegetables</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
            <div style={{width: "20%", textAlign: "center"}}>
                <img src={CoffeeImg} style={{height: "200px", width: "200px", objectFit: "cover", borderRadius: "100px"}}/>
                <h3>We Roast Our Own Coffee</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
            <div style={{width: "20%", textAlign: "center"}}>
            <   img src={DeliveryImg} style={{height: "200px", width: "200px", objectFit: "cover", borderRadius: "100px"}}/>
                <h3>We Deliver Your Favourit Dishes</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
        </div>
        </>
    )
}

export default Homepage;