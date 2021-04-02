import Experience from "./Experience/Experience";
import Projects from "./Projects/Projects";
import Skills from "./Skills/Skills";
import About from "./About/About";

export default function ProgrammerPage() {
    return (
        <div className="container">
            <div className="row mt-2">
                <div className="col-lg-3 col-xl-3 ">
                    <About/>
                    <Skills/>
                </div>
                <div className="col-lg-8 col-xl-8">
                    <div className="card-box">
                        <div className="tab-content">
                            <div className="tab-pane show active" id="about-me">
                                <Projects/>
                                <br/>
                                <Experience/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}