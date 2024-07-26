// Create your Body component here
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Avatar from '../assets/opt1.png';

const Body = () => {
    return (
        <div id="body" className="body">
            <div className="body-container">
                <div className="body-profile">
                    <img className="body-img" alt='avatar' src={Avatar} />

                    <div className="body-content">
                        <div className="body-headline">Bryan Gonsalves</div>
                        <div className="body-text">Software & Data Developer</div>
                    </div>

                    <div className="body-icons">
                        <a href="https://github.com/BryanGonsalves" target="_blank" rel="noreferrer" className="icon-link"><i><FaGithub /></i> </a>
                        <a href="https://www.linkedin.com/in/bryangonsalves/" target="_blank" rel="noreferrer" className="icon-link"><i><FaLinkedin /></i></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Body;