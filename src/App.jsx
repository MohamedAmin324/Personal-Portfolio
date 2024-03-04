import { useEffect, useState } from 'react';
import { DarkModeTheme } from './context/dark-mode-theme-context';
import { RouterProvider } from 'react-router-dom';
import router from './react-router-configuration/router';
/*
Unless you have the easter-eggs-configuration folder in the src, keep the useSecretModalConfiguration custom hook & secretModal component commented out to ensure normal functionality in the development build
 */
// import useSecretModalConfiguration from './easter-eggs-configuration/useSecretModalConfiguration';
// import SecretModal from './easter-eggs-configuration/SecretModal';

export default function App() {
	const [isDarkMode, setIsDarkMode] = useState(true);

	// const { modalState, handleModalClose } = useSecretModalConfiguration();

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
			<RouterProvider router={router} />
			{/* <SecretModal show={modalState} handleModalClose={handleModalClose} /> */}
		</DarkModeTheme.Provider>
	);
}
