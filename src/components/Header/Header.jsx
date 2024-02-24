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
					style={{
						backgroundColor: isDarkMode ? 'var(--bs-body-bg)' : 'white',
					}}
				>
					{/* I had to add a div element rendered conditionally on small screen because I wanted the navigation bar to cover the whole page when it reveals itself but implementing directly on that element mad the default fade in/out animation provided by bootstrap a bit clunky & lagging because setting the height to 100vh explicitly conflicted with a style attribute that also sets the height at the same time  */}
					{isSmallScreen ? (
						<div
							className='blocker top-0 start-0 position-absolute'
							style={{
								backgroundColor: isDarkMode ? 'var(--bs-body-bg)' : 'white',
							}}
						></div>
					) : null}
					<NavigationBar isSmallScreen={isSmallScreen} />
				</Navbar.Collapse>
			</Navbar>
		</Container>
	);
}
