import skillsIcon from '../assets/navigation-bar-icons/Light-Mode/skills-svgrepo-com.svg';
import skillsIconDark from "../assets/navigation-bar-icons/Dark-Mode/skills-svgrepo-com.svg";

import projectsIcon from '../assets/navigation-bar-icons/Light-Mode/Projects-svgrepo-com.svg';
import projectsIconDark from "../assets/navigation-bar-icons/Dark-Mode/Projects-svgrepo-com.svg";

import contactIcon from '../assets/navigation-bar-icons/Light-Mode/contact-sending-mail-svgrepo-com.svg';
import contactIconDark from "../assets/navigation-bar-icons/Dark-Mode/contact-sending-mail-svgrepo-com.svg";

import resumeIcon from '../assets/navigation-bar-icons/Light-Mode/resume-svgrepo-com.svg';
import resumeIconDark from "../assets/navigation-bar-icons/Dark-Mode/resume-svgrepo-com.svg";

import lightModeIcon from '../assets/navigation-bar-icons/Light-Mode/Light-mode-svgrepo-com.svg';
import darkModeIcon from "../assets/navigation-bar-icons/Dark-Mode/Dark-mode-svgrepo-com.svg"

import { uniqueId } from 'lodash';

export const NAVIGATION_ITEMS_INFO = [
    {
        name: "Skills",
        logosUrls: {
            lightModeUrl: skillsIcon,
            darkModeUrl: skillsIconDark,
        },
        id: uniqueId("section-"),
        pathName: '/Skills',
    },
    {
        name: "Projects",
        logosUrls: {
            lightModeUrl: projectsIcon,
            darkModeUrl: projectsIconDark,
        },
        id: uniqueId("section-"),
        pathName: '/Projects',
    },
    {
        name: "Contact",
        logosUrls: {
            lightModeUrl: contactIcon,
            darkModeUrl: contactIconDark,
        },
        id: uniqueId("section-"),
        pathName: '/Contact',
    },
    {
        name: "Resume",
        logosUrls: {
            lightModeUrl: resumeIcon,
            darkModeUrl: resumeIconDark,
        },
        id: uniqueId("section-"),
        pathName: '/Resume',
    },
    {
        name: "light mode",
        logosUrls: {
            lightModeUrl: lightModeIcon,
            darkModeUrl: darkModeIcon,
        },
        id: uniqueId("section-"),
    }
]
