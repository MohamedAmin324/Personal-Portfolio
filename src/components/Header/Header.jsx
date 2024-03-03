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
	const [isExpanded, setIsExpanded] = useState(false);

	const updateExpandedState = () => setIsExpanded((prev) => !prev);

	useEffect(() => {
		// prevent scrolling behavior when the navbar is expanded
		const bodyElement = document.body;
		isExpanded
			? (bodyElement.style.overflow = 'hidden')
			: (bodyElement.style.overflow = 'scroll');

		// hide the dropdown toggle when the navbar is expanded because it keeps showing up on top of the .blocker element set on the navbar
		const dropDownToggle = document.querySelector('.dropdown-toggle');
		// keep that little question mark there (the optional chaining operator) or else the UI will entirely break when the user visit another page, the dropDownToggle will no longer be available
		dropDownToggle?.classList.toggle('dropdown-toggle-custom', isExpanded);
	}, [isExpanded]);

	return (
		<Container
			className={`border-bottom z-3 border-dark-subtle border-2 position-sticky top-0 bg-${
				isDarkMode ? 'dark' : 'light'
			}`}
			fluid
		>
			<Container fluid='lg'>
				<Navbar
					expand='md'
					className='position-relative pb-0'
					collapseOnSelect
					onToggle={(expanded) => setIsExpanded(expanded)}
				>
					<Navbar.Brand className={isSmallScreen ? 'pt-0 w-100' : 'pt-0'}>
						<MyLogo
							isSmallScreen={isSmallScreen}
							isExpanded={isExpanded}
							updateExpandedState={updateExpandedState}
						/>
					</Navbar.Brand>
					<Navbar.Collapse
						id='navbar-nav'
						className={isSmallScreen ? 'custom-position position-absolute' : ''}
						data-bs-theme={isDarkMode && 'dark'}
						style={{
							backgroundColor: isDarkMode ? 'var(--bs-body-bg)' : 'white',
						}}
					>
						{/* I had to add a div element rendered conditionally on small screen because I wanted the navigation bar to cover the whole page when it reveals itself but implementing directly on that element made the default fade in/out animation provided by bootstrap a bit clunky & lagging because setting the height to 100vh explicitly conflicted with a style attribute that also sets the height at the same time  */}
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
		</Container>
	);
}
