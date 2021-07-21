import linkedin from "../../assets/images/linkedin.svg"
import instagram from "../../assets/images/instagram.svg"
import github from "../../assets/images/github.svg"

export default function FrontPage () {

    return (
        <footer>

            <div>
                <h2>Contact me!</h2>
                <p>
                    Interested in working together? We should<br/>
                    queue up a chat. I'll buy tje coffee.
                </p>
                <button>Contact me</button>
            </div>

            <div>
                <img src={linkedin} alt="LinkedIn icon" />
                <img src={instagram} alt="instagram icon" />
                <img src={github} alt="GitHub icon" />
            </div>

            <img alt="kist's logo"></img>

        </footer>
    )
}