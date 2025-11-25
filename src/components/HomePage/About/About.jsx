
import { useMemo } from 'react'
import './About.scss';
import aboutsection from "../../../assets/photos/aboutsection.webp";

const About = () => {

    const photo = aboutsection;

    return (
        <section className="about-intro" id="about">
            <div className="about-photo">
                <img src={photo} alt="aboutSection" width="700" height="900" />
            </div>
            <div className="about-text">
                <h2 className="about-title">About Me</h2>
                <p>
                    Hello! My name is <span className="red-text">Anton Miguel Canlas</span>,
                    I'm a passionate developer who thrives on creating meaningful and interactive digital experiences.
                    Recently, I'm working as a{" "}
                    <span className="red-text">
                        Front-End Developer </span> {" "} and <span className="red-text"> Game Developer </span> {" "}at{" "}
                    <span className="red-text">
                        <a
                            href="https://www.taktylstudios.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ color: "inherit", textDecoration: "underline" }}
                        >
                            Taktyl Studios {" "}
                        </a>
                    </span>
                    where I explore creative ways to blend design, technology, and gameplay. I'm also part of the
                    {" "} <span className="red-text">Research and Development (R&D) </span>team, where I experiment with new tech to build prototypes that
                    potentially improve production workflows and potential projects we can move forward with.
                </p>

                <p>
                    Before this, I had the opportunity to <span className="red-text">lead and supervise interns and junior developers, conduct training sessions, and collaborate directly
                        with clients to understand project goals and deliver effective solutions.</span> Those experiences helped me develop a balance between technical
                    execution and team coordination - skills that continue to guide my approach to development today.
                </p>

                <p>
                    I graduated from {" "}
                    <span className="red-text">
                        <a
                            href="https://www.feutech.edu.ph/"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ color: "inherit", textDecoration: "underline" }}
                        >
                            FEU Institute of Technology
                        </a>
                    </span>
                    {" "} with a {" "}
                    <span className="red-text">
                        Bachelor of Science in Information Technology
                    </span>{" "}
                    I'm passionate about pushing both my technical and creative sides, from building responsive front-end experiences to experimenting with new game
                    mechanics and performance optimization.

                </p>
                <p>
                    I don't limit myself to a single framework or language - I believe in using the right tools for the right job. Whether it's crafting smooth user
                    interfaces or building gameplay systems, I like optimizing workflows and exploring new ideas that make an impact.
                </p>

                <p>
                    Outside of tech, you'll usually find me riding my motorcycle, experimenting in the kitchen, or traveling for a peace of mind
                </p>
            </div>
        </section >
    );
};

export default About;