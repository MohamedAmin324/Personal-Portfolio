import skillsIcon from '../assets/navigation-bar-icons/Light-Mode/skills-svgrepo-com.svg';
import projectsIcon from '../assets/navigation-bar-icons/Light-Mode/Projects-svgrepo-com.svg';
import contactIcon from '../assets/navigation-bar-icons/Light-Mode/contact-sending-mail-svgrepo-com.svg';
import resumeIcon from '../assets/navigation-bar-icons/Light-Mode/resume-svgrepo-com.svg';
import lightModeIcon from '../assets/navigation-bar-icons/Light-Mode/Light-mode-svgrepo-com.svg';
import { uniqueId } from 'lodash';

export const navigationItemsInfo = [
    {
        name: "Skills",
        logoUrl: skillsIcon,
        id: uniqueId("section-"),
    },
    {
        name: "Projects",
        logoUrl: projectsIcon,
        id: uniqueId("section-"),
    },
    {
        name: "Contact",
        logoUrl: contactIcon,
        id: uniqueId("section-"),
    },
    {
        name: "Resume",
        logoUrl: resumeIcon,
        id: uniqueId("section-"),
    },
    {
        name: "light mode",
        logoUrl: lightModeIcon,
        id: uniqueId("section-"),
    }
]
