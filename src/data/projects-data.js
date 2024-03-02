// Easy Bank Landing Page Screenshots
import firstScreenShootUrl from "../assets/projects-images/Easy-Bank-Landing-Page/first-screenshot.png";
import secondScreenShotUrl from "../assets/projects-images/Easy-Bank-Landing-Page/second-screenshot.png";
import thirdScreenShotUrl from "../assets/projects-images/Easy-Bank-Landing-Page/third-screenshot.png";
import fourthScreenShot from "../assets/projects-images/Easy-Bank-Landing-Page/fourth-screenshot.png";

import { uniqueId } from "lodash";


const PROJECTS_DATA = [
    {
        projectTitle: "Easy Bank Landing Page",
        projectId: uniqueId("project-"),
        projectScreenShots: [firstScreenShootUrl, secondScreenShotUrl, thirdScreenShotUrl, fourthScreenShot],
        description: "This is a project I built as a challenge in the Frontend Mentor Website",
        techStack: ["HTML", "CSS/ SCSS", "JavaScript",],
        livePreview: "https://mohamedamin324.github.io/Easybank-landing-page/",
        sourceCode: "https://github.com/MohamedAmin324/Easybank-landing-page",
    }
]

export default PROJECTS_DATA;
