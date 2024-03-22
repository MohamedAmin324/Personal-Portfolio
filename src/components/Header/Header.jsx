import { Container, Navbar } from 'react-bootstrap';
import MyLogo from './MyLogo';
import { useContext, useEffect, useState } from 'react';
import { DarkModeTheme } from '../../context/dark-mode-theme-context';
import NavigationBar from './NavigationBar';

export default function Header() {
	const [isDarkMode] = useContext(DarkModeTheme);
	const [isExpanded, setIsExpanded] = useState(false);

	const updateExpandedState = () => setIsExpanded((prev) => !prev);

	useEffect(() => {
		// prevent scrolling behavior when the navbar is expanded
		const bodyElement = document.body;
		isExpanded
			? (bodyElement.style.overflow = 'hidden')
			: (bodyElement.style.overflow = 'scroll');

	}, [isExpanded]);

	return (
		<Container
			className={`border-bottom z-3 border-dark-subtle border-2 position-sticky top-0 bg-${
				isDarkMode ? 'dark' : 'light'
			}`}
			fluid
		>
			<Container style={isDarkMode ? {} : { backgroundColor: 'white' }}>
				<Navbar
					expand='md'
					className='position-relative pb-0'
					collapseOnSelect
					onToggle={(expanded) => setIsExpanded(expanded)}
				>
					<Navbar.Brand>
						<MyLogo
							isExpanded={isExpanded}
							updateExpandedState={updateExpandedState}
						/>
					</Navbar.Brand>
					<Navbar.Collapse
						id='navbar-nav'
						data-bs-theme={isDarkMode && 'dark'}
						style={{
							backgroundColor: isDarkMode ? 'var(--bs-body-bg)' : 'white',
						}}
					>

						{/* I had to add a div element rendered conditionally on small screen because I wanted the navigation bar to cover the whole page when it reveals itself but implementing directly on that element made the default fade in/out animation provided by bootstrap a bit clunky & lagging because setting the height to 100vh explicitly conflicted with a style attribute that also sets the height at the same time  */}

						<div
							className='content-mask top-0 start-0 position-absolute'
							style={{
								backgroundColor: isDarkMode ? 'var(--bs-body-bg)' : 'white',
							}}
						></div>
						<NavigationBar />
					</Navbar.Collapse>
				</Navbar>
			</Container>
		</Container>
	);
}
