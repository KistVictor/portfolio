import "./styles.scss"

import studing from "../../assets/images/studing.svg"
import developing from "../../assets/images/developing.svg"
import graduating from "../../assets/images/graduating.svg"

export default function About () {

    return (
        <>
            <div className="bg-blue" />
            <section id="about" className="about">
                
                <h2>Hi, i'm Victor, Nice to meet you.</h2>
                <p>
                    In January, 2021 I discovered myself as much interested in HTML, CSS and ReactJS so I started learn.<br/>
                    I started my Front End career on May 2021 using ReactJS, Gatsby and Tailwind<br/>
                    Now livind in Santa Cruz do Sul - RS, Brazil.<br/>
                </p>

                <ul className="cards">
                    <li className="card">
                        <h3>Study</h3>
                        <p>i like to study in my free timeabout UX UI and Front End</p>
                        <h4>Main courses</h4>
                        <ul>
                            <li>HTML5</li>
                            <li>CSS3</li>
                            <li>ReactJS</li>
                            <li>Django</li>
                            <li>JavaScript</li>
                        </ul>
                        <h4>Platforms</h4>
                        <ul className="last">
                            <li>Alura</li>
                            <li>Rocketseat</li>
                        </ul>
                        <img src={studing} alt="Studing" height="200" />
                    </li>

                    <li className="card">
                        <h3>Front End</h3>
                        <p>I like making layouts, styling pages and doing logic</p>
                        <h4>Main languages</h4>
                        <ul>
                            <li>HTML5</li>
                            <li>CSS3</li>
                            <li>JavaScript</li>
                            <li>ReactJS</li>
                        </ul>
                        <h4>Dev tools</h4>
                        <p className="last">ReactJS, Tailwind, AMP, Gatsby, NextJS, Figma, ClickUP, GraphQL</p>
                        <img src={developing} alt="Developing" height="200" />
                    </li>

                    <li className="card">
                        <h3>Bachelor</h3>
                        <p>Computer Science 4/8</p>
                        <h4>Main courses</h4>
                        <ul className="last">
                            <li>Object orientation</li>
                            <li>Data structure</li>
                            <li>Database</li>
                            <li>Database Management</li>
                            <li>Computer Architecture</li>
                            <li>UX</li>
                            <li>Logic</li>
                            <li>Entrepreneurship</li>
                        </ul>
                        <img src={graduating} alt="Graduating" height="200" />
                    </li>
                </ul>

            </section>
        </>
    )
}