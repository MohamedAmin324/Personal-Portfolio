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
            lightMode: skillsIcon,
            darkMode: skillsIconDark,
        },
        id: uniqueId("section-"),
    },
    {
        name: "Projects",
        logosUrls: {
            lightMode: projectsIcon,
            darkMode: projectsIconDark,
        },
        id: uniqueId("section-"),
    },
    {
        name: "Contact",
        logosUrls: {
            lightMode: contactIcon,
            darkMode: contactIconDark,
        },
        id: uniqueId("section-"),
    },
    {
        name: "Resume",
        logosUrls: {
            lightMode: resumeIcon,
            darkMode: resumeIconDark,
        },
        id: uniqueId("section-"),
    },
    {
        name: "light mode",
        logosUrls: {
            lightMode: lightModeIcon,
            darkMode: darkModeIcon,
        },
        id: uniqueId("section-"),
    }
]
