import { createBrowserRouter } from 'react-router-dom';
import Projects from '../Pages/Projects/Projects';
import Contact from '../Pages/Contact/Contact';
import Resume from '../Pages/Resume/Resume';
import NavLayout from './NavLayout';
import SkillsHero from '../Pages/Skills/SkillsHero';
import AboutMeHero from '../Pages/AboutMe/AboutMeHero';

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
				element: <Contact />,
			},
			{
				path: '/Resume',
				element: <Resume />,
			},
		],
	},
]);

export default router;
