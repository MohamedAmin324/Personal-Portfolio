import { createBrowserRouter } from 'react-router-dom';
import AboutMe from './Pages/AboutMe/AboutMe';
import Skills from './Pages/Skills/Skills';
import Projects from './Pages/Projects/Projects';
import Contact from './Pages/Contact/Contact';
import Resume from './Pages/Resume/Resume';

const router = createBrowserRouter([
	{
		path: '/',
		element: <AboutMe />,
	},
	{
		path: '/Skills',
		element: <Skills />,
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
]);

export default router;
