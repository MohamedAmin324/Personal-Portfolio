import javascriptIcon from "../assets/skills-section-icons/programming-languages/javascript-svgrepo-com.svg";
import javaIcon from "../assets/skills-section-icons/programming-languages/java-svgrepo-com.svg";
import htmlIcon from "../assets/skills-section-icons/programming-languages/html-5-svgrepo-com.svg";
import cssIcon from "../assets/skills-section-icons/programming-languages/css3-svgrepo-com.svg";
import scssIcon from "../assets/skills-section-icons/programming-languages/scss2-svgrepo-com.svg";
import pythonIcon from "../assets/skills-section-icons/programming-languages/python-svgrepo-com.svg";


import bsIcon from "../assets/skills-section-icons/frameworks&libraries/CSS-frameworks/bootstrap-svgrepo-com.svg";
import reactIcon from "../assets/skills-section-icons/frameworks&libraries/react&react-ecosystem/react-javascript-js-framework-facebook-svgrepo-com.svg";
import reduxIcon from "../assets/skills-section-icons/frameworks&libraries/react&react-ecosystem/redux-svgrepo-com.svg";
import reactRouterIcon from "../assets/skills-section-icons/frameworks&libraries/react&react-ecosystem/react-router-svgrepo-com.svg";


import gitIcon from "../assets/skills-section-icons/tools&systems/git-svgrepo-com.svg";
import linuxIcon from "../assets/skills-section-icons/tools&systems/linux-svgrepo-com.svg";
import viteIcon from "../assets/skills-section-icons/tools&systems/vite-svgrepo-com.svg";

const SKILLS_OBJ_INFO = [
    {
        cardName: "Programming Languages",
        iconsList: [
            {
                name: "JavaScript",
                iconUrl: javascriptIcon,
            },
            {
                name: "Java",
                iconUrl: javaIcon,
            },
            {
                name: "HTML",
                iconUrl: htmlIcon,
            },
            {
                name: "CSS",
                iconUrl: cssIcon,
            },
            {
                name: "SCSS",
                iconUrl: scssIcon,
            },
            {
                name: "Python",
                iconUrl: pythonIcon,
            },
        ]
    },
    {
        cardName: "Frameworks & Libraries",
        iconsList: [
            {
                name: "Bootstrap",
                iconUrl: bsIcon,
            },
            {
                name: "React",
                iconUrl: reactIcon,
                ecosystemIcons: [
                    {
                        name: "React Redux",
                        iconUrl: reduxIcon,
                    },
                    {
                        name: "React Router",
                        iconUrl: reactRouterIcon
                    }
                ]
            }
        ]
    },
    {
        cardName: 'Tools & Systems',
        iconsList: [
            {
                name: "Git",
                iconUrl: gitIcon,
            },
            {
                name: "Linux",
                iconUrl: linuxIcon,
            },
            {
                name: "Vite",
                iconUrl: viteIcon,
            }
        ]
    }
]


export default SKILLS_OBJ_INFO;
