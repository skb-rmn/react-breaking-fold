// import bannerImage from '../assets/D_HGeI44.jpeg';
import styles from './Banner.module.css';

function Banner(){
    const divStyle = {        
        // backgroundImage: `url(${bannerImage})`,
        // backgroundRepeat: 'no-repeat',
        // background: `#ffffff url(${bannerImage}) center bottom/cover no-repeat`,
        color: "white",
        fontSize: "1.2rem",
        border: "2px solid black",
        padding: "10px",
        margin: "5px",        
    };
    return(        
        // <div className="title" style={{backgroundImage: `url(${bannerImage})`,backgroundRepeat: 'no-repeat',}}>
        <div className={styles.flexContainer3}>
            <div className={styles.flexItems3}>
                <h1>Breaking Folds</h1>
                <p>Opening Date: 22nd March, 2024</p>
            </div>
            <div className={styles.flexItems3}>
                <h3>
                    Location:
                </h3>
                <p>
                    FabLab Bremen e. V. <br />
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4793.232634191971!2d8.813599877055733!3d53.08116539453158!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47b1280deead11c1%3A0x9bf86da267170104!2sFabLab%20Bremen%20e.%20V.!5e0!3m2!1sen!2sde!4v1708900993131!5m2!1sen!2sde"
                            width="600"
                            height="450"
                            style={{border:0,}}
                            allowfullscreen=""
                            loading="lazy"
                            referrerpolicy="no-referrer-when-downgrade"></iframe>
                </p>
            </div>
            <div className={styles.flexItems3}>
                <h3>
                    Date:
                </h3>
                <p>
                    22nd March, 2024
                </p>
            </div>
        </div>
    );
}
export default Banner;