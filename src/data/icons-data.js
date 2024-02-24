import githubIconUrl from "../assets/social-media-icons/Light-Mode/github-142-svgrepo-com.svg";
import githubIconDarkUrl from "../assets/social-media-icons/Dark-Mode/github-142-svgrepo-com.svg";

import linkedinIconUrl from "../assets/social-media-icons/Light-Mode/linkedin-svgrepo-com.svg";
import linkedinIconDarkUrl from "../assets/social-media-icons/Dark-Mode/linkedin-svgrepo-com.svg";

import { uniqueId } from "lodash";

export const ICONS_DATA = [
    {
        name: "Github",
        iconsUrls: {
            lightModeUrl: githubIconUrl,
            darkModeUrl: githubIconDarkUrl,
        },
        accountUrl: "https://github.com/MohamedAmin324",
        id: uniqueId("icon-"),
    },
    {
        name: "Linkedin",
        iconsUrls: {
            lightModeUrl: linkedinIconUrl,
            darkModeUrl: linkedinIconDarkUrl,
        },
        accountUrl: "https://www.linkedin.com/in/mohamed-amine-a49713242/",
        id: uniqueId("icon-"),
    }
]
