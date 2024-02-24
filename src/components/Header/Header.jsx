import { Container, Navbar } from 'react-bootstrap';
import MyLogo from './MyLogo';
import { useContext, useEffect, useState } from 'react';
import { DarkModeTheme } from '../../context/dark-mode-theme-context';
import NavigationBar from './NavigationBar';

export default function Header() {
	// used to conditionally render the w-100 bootstrap class and the styles of the navbar
	const [isSmallScreen, setIsSmallScreen] = useState(
		() => window.innerWidth < 768
	);

	useEffect(() => {
		window.onresize = () => setIsSmallScreen(() => window.innerWidth < 768);

		return () => (window.onresize = null);
	}, []);

	const [isDarkMode] = useContext(DarkModeTheme);

	return (
		<Container className='border-bottom border-dark-subtle border-2' fluid>
			<Navbar expand='md' className='position-relative'>
				<Navbar.Brand className={isSmallScreen ? 'w-100' : ''}>
					<MyLogo isSmallScreen={isSmallScreen} />
				</Navbar.Brand>
				<Navbar.Collapse
					id='navbar-nav'
					className={isSmallScreen ? 'custom-position position-absolute' : ''}
					data-bs-theme={isDarkMode && 'dark'}
					style={isDarkMode ? { backgroundColor: 'var(--bs-body-bg)' } : {}}
				>
					<NavigationBar isSmallScreen={isSmallScreen} />
				</Navbar.Collapse>
			</Navbar>
		</Container>
	);
}
