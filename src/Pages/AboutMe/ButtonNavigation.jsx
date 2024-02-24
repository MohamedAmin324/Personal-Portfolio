import { useContext } from 'react';
import { Stack } from 'react-bootstrap';
import { DarkModeTheme } from '../../context/dark-mode-theme-context';

export default function ButtonNavigation() {
	const [isDarkMode] = useContext(DarkModeTheme);
	return (
		<Stack direction='horizontal' className='justify-content-center' gap={4}>
			<a
				className={`btn ${isDarkMode ? 'btn-dark' : 'btn-light'} custom-btn-border`}
				href='#'
				role='button'
			>
				Contact Me
			</a>
			<a
				className={`btn ${isDarkMode ? 'btn-dark' : 'btn-light'} custom-btn-border`}
				href='#'
				role='button'
			>
				See My Work
			</a>
		</Stack>
	);
}
