import { Navbar, Stack } from 'react-bootstrap';
import imgUrl from '../../assets/navigation-bar-icons/Light-Mode/coding-svgrepo-com.svg';
import imgDarkUrl from '../../assets/navigation-bar-icons/Dark-Mode/coding-svgrepo-com.svg';
import { useContext } from 'react';
import { DarkModeTheme } from '../../context/dark-mode-theme-context';

// eslint-disable-next-line react/prop-types
export default function MyLogo({ isSmallScreen }) {
	const [isDarkMode] = useContext(DarkModeTheme);
	return (
		<Stack
			direction='horizontal'
			className='justify-content-between justify-content-md-start'
		>
			<img src={isDarkMode ? imgDarkUrl : imgUrl} />
			<div className={isSmallScreen ? 'ms-1' : 'ms-1 fw-bolder'}>Med Amine</div>
			<Navbar.Toggle aria-controls='navbar-nav' />
		</Stack>
	);
}
