// Create your About component here
import IMG from '../assets/Detective.png';

const About = () => {
    return (
        <div id="about" className="about">
            <h1 className="about-heading">About Me</h1>
            <div className="about-info">
                <p className="about-desc">Hi there! I'm a 2nd Computer Science student at Vellore institute of Technology with a drive to build software that has genuine positive impacts to the world. I'm constantly upskilling myself by working with new technology, and my favourites include React (ReactJs) for frontend full-stack development, and Python for backend and general problem solving.<br/><br/>

Beyond my technical endeavours, I'm also deeply interested in entrepreneurship, exploring avenues to innovate and create solutions that address real-world challenges.</p>
                <div className="about-img">
                    <div className="about-img-wrapper">
                        <img src={IMG} alt="Detective" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;