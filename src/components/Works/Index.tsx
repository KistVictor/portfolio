import Slider from "react-slick";

import JSONData from "../../content/test.json"
//import ProjectCard from "../ProjectCard/index"

export default function Works () {

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };

    return (
        <section>
            <h2>Recent Works</h2>
            
            <Slider {...settings}>
                {/*JSONData.map( (project,i) => <div key={i}><ProjectCard project={project.name} /></div> )*/}
            </Slider>

            <ul>
                <li></li>
                <li></li>
                <li></li>
            </ul>
        </section>
    )
}