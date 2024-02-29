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
import reactQueryIcon from "../assets/skills-section-icons/frameworks&libraries/react&react-ecosystem/react-query-svgrepo-com.svg";


import gitIcon from "../assets/skills-section-icons/tools&systems/git-svgrepo-com.svg";
import linuxIcon from "../assets/skills-section-icons/tools&systems/linux-svgrepo-com.svg";
import viteIcon from "../assets/skills-section-icons/tools&systems/vite-svgrepo-com.svg";

import { uniqueId } from "lodash";

const SKILLS_OBJ_INFO = [
    {
        cardTitle: "Programming Languages",
        cardId: uniqueId("card-"),
        iconsList: [
            {
                name: "JavaScript",
                iconUrl: javascriptIcon,
                itemId: uniqueId("language-"),
            },
            {
                name: "Java",
                iconUrl: javaIcon,
                itemId: uniqueId("language-"),
            },
            {
                name: "HTML",
                iconUrl: htmlIcon,
                itemId: uniqueId("language-"),
            },
            {
                name: "CSS",
                iconUrl: cssIcon,
                itemId: uniqueId("language-"),
            },
            {
                name: "SCSS",
                iconUrl: scssIcon,
                itemId: uniqueId("language-"),
            },
            {
                name: "Python",
                iconUrl: pythonIcon,
                itemId: uniqueId("language-"),
            },
        ]
    },
    {
        cardTitle: "Frameworks & Libraries",
        cardId: uniqueId("card-"),
        iconsList: [
            {
                name: "Bootstrap",
                iconUrl: bsIcon,
                itemId: uniqueId("framework-"),
            },
            {
                name: "React",
                iconUrl: reactIcon,
                itemId: uniqueId("framework-"),
                ecosystemIcons: [
                    {
                        name: "React Redux",
                        iconUrl: reduxIcon,
                        itemId: uniqueId("ecosystem-"),
                    },
                    {
                        name: "React Router",
                        iconUrl: reactRouterIcon,
                        itemId: uniqueId("ecosystem-"),
                    },
                    {
                        name: "React Query",
                        iconUrl: reactQueryIcon,
                        itemId: uniqueId("ecosystem-"),
                    }
                ]
            }
        ]
    },
    {
        cardTitle: 'Tools & Systems',
        cardId: uniqueId("card-"),
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
