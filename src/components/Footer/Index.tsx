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
                <div><img src={linkedin} alt="LinkedIn icon" /></div>
                <div><img src={instagram} alt="instagram icon" /></div>
                <div><img src={github} alt="GitHub icon" /></div>
            </div>

            <img src={KSlogo} alt="kist's logo" className="KSlogo"></img>

        </footer>
    )
}