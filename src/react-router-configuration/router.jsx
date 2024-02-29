import { createBrowserRouter } from 'react-router-dom';
import Projects from '../Pages/Projects/Projects';
import Resume from '../Pages/Resume/Resume';
import NavLayout from './NavLayout';
import SkillsHero from '../Pages/Skills/SkillsHero';
import AboutMeHero from '../Pages/AboutMe/AboutMeHero';
import ContactHero from '../Pages/Contact/Contact';

const router = createBrowserRouter([
	{
		element: <NavLayout />,
		children: [
			{
				path: '/',
				element: <AboutMeHero />,
			},
			{
				path: '/Skills',
				element: <SkillsHero/>,
			},
			{
				path: '/Projects',
				element: <Projects />,
			},
			{
				path: '/Contact',
				element: <ContactHero />,
			},
			{
				path: '/Resume',
				element: <Resume />,
			},
		],
	},
]);

export default router;
