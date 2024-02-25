import bannerImage from '../assets/D_HGeI44.jpeg'
function Banner(){
    return(        
        <div className="title" style={{backgroundImage: `url(${bannerImage})`,backgroundRepeat: 'no-repeat',}}>
            <h1>Breaking Folds</h1>
            <p>Opening Date: 22nd March, 2024</p>
            {/* <img src={bannerImage} alt="Banner Image" /> */}
        </div>        
    );
}
export default Banner;