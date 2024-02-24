import { useState } from 'react';
import AboutMe from './Pages/AboutMe/main';
import { DarkModeTheme } from './context/dark-mode-theme-context';

export default function App() {
	const [isDarkMode, setIsDarkMode] = useState(true);
	function updateDarkModeState() {
		setIsDarkMode((prev) => !prev);
	}
	return (
		<DarkModeTheme.Provider value={[isDarkMode, updateDarkModeState]}>
			<AboutMe />
		</DarkModeTheme.Provider>
	);
}
