import BannerImage from "../assets/home_background_img.jpg";

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
        </>
    )
}

export default Homepage;