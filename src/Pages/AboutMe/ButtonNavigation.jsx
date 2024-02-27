import { useContext } from 'react';
import { Stack } from 'react-bootstrap';
import { DarkModeTheme } from '../../context/dark-mode-theme-context';
import { Link } from 'react-router-dom';

export default function ButtonNavigation() {
	const [isDarkMode] = useContext(DarkModeTheme);
	return (
		<Stack direction='horizontal' className='justify-content-center' gap={4}>
			<Link
				className={`btn ${isDarkMode ? 'btn-dark' : 'btn-light'} custom-btn-border`}
				to='/Contact'
				role='button'
			>
				Contact Me
			</Link>
			<Link
				className={`btn ${isDarkMode ? 'btn-dark' : 'btn-light'} custom-btn-border`}
				to='/Projects'
				role='button'
			>
				See My Work
			</Link>
		</Stack>
	);
}
