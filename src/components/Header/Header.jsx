import { Container, Nav, Navbar } from 'react-bootstrap';
import MyLogo from './MyLogo';
import { useContext, useEffect, useState } from 'react';
import { NAVIGATION_ITEMS_INFO } from '../../data/sections-data';
import { DarkModeTheme } from '../../context/dark-mode-theme-context';

export default function Header() {
	// used to conditionally render the w-100 bootstrap class and the styles of the navbar
	const [isSmallScreen, setIsSmallScreen] = useState(
		() => window.innerWidth < 768
	);

	useEffect(() => {
		window.onresize = () => setIsSmallScreen(() => window.innerWidth < 768);

		return () => (window.onresize = null);
	}, []);

	const [,updateDarkModeState] = useContext(DarkModeTheme);
	console.log(updateDarkModeState);

	return (
		<Container className='border-bottom border-dark-subtle border-2' fluid>
			<Navbar expand='md' className='position-relative'>
				<Navbar.Brand className={isSmallScreen ? 'w-100' : ''}>
					<MyLogo isSmallScreen={isSmallScreen} />
				</Navbar.Brand>
				<Navbar.Collapse
					id='navbar-nav'
					className={isSmallScreen ? 'custom-position position-absolute' : ''}
					data-bs-theme='dark'
				>
					<Nav className='justify-content-evenly w-100'>
						{NAVIGATION_ITEMS_INFO.map(({ name, logoUrl, id }) => (
							<Nav.Item key={id}>
								<Nav.Link>
									<img
										onClick={name === 'light mode' ? updateDarkModeState : undefined}
										className='me-2'
										src={logoUrl}
									/>
									{name !== 'light mode' ? name : null}
								</Nav.Link>
							</Nav.Item>
						))}
					</Nav>
				</Navbar.Collapse>
			</Navbar>
		</Container>
	);
}
