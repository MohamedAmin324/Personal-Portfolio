import { useEffect, useState } from 'react';
import AboutMe from './Pages/AboutMe/main';
import { DarkModeTheme } from './context/dark-mode-theme-context';

export default function App() {
	const [isDarkMode, setIsDarkMode] = useState(true);

	useEffect(() => {
		/*
		the data attribute data-bs-theme provided by Bootstrap does not work properly unless I add it to html or body element, & since these are outside of React reach (as far as I know), I had to implement the dynamic change in this way.
		 */
		const bodyElement = document.body;
		bodyElement.dataset.bsTheme = isDarkMode ? 'dark' : 'light';
	}, [isDarkMode]);

	function updateDarkModeState() {
		setIsDarkMode((prev) => !prev);
	}

	return (
		<DarkModeTheme.Provider value={[isDarkMode, updateDarkModeState]}>
			<AboutMe />
		</DarkModeTheme.Provider>
	);
}
