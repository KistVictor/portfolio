import linkedin from "../../assets/images/linkedin.svg"
import instagram from "../../assets/images/instagram.svg"
import github from "../../assets/images/github.svg"
import KSlogo from '../../assets/images/KVlogo.svg'

import "./styles.scss"

export default function FrontPage () {

    return (
        <footer>

            <div className="contactContainer">
                <h2>Contact me!</h2>
                <p>
                    Interested in working together? We should<br/>
                    queue up a chat. I'll buy the coffee.
                </p>
                <div><a href="https://mywhats.net/whatsappvictorkist">Contact me</a></div>
            </div>

            <div className="socialContainer">
                <a href="https://www.linkedin.com/in/kistvictor/"><div><img src={linkedin} alt="LinkedIn icon" /></div></a>
                <a href="https://www.instagram.com/kistvictor_/"><div><img src={instagram} alt="instagram icon" /></div></a>
                <a href="https://github.com/KistVictor"><div><img src={github} alt="GitHub icon" /></div></a>
            </div>

            <img src={KSlogo} alt="kist's logo" className="KSlogo"></img>

        </footer>
    )
}