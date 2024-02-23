import { Container, Nav, Navbar } from 'react-bootstrap';
import MyLogo from './MyLogo';
import { useEffect, useState } from 'react';
import { navigationItemsInfo } from './data';

export default function Header() {
	// used to conditionally render the w-100 bootstrap class
	const [isSmallScreen, setIsSmallScreen] = useState(
		() => window.innerWidth < 768
	);

	useEffect(() => {
		window.onresize = () => setIsSmallScreen(() => window.innerWidth < 768);

		return () => (window.onresize = null);
	}, []);

	return (
		<Container className='border-bottom border-dark-subtle border-2' fluid>
			<Navbar expand='md'>
				<Navbar.Brand className={isSmallScreen ? 'w-100' : ''}>
					<MyLogo isSmallScreen={isSmallScreen} />
				</Navbar.Brand>
				<Navbar.Collapse id='basic-navbar-nav'>
					<Nav className='justify-content-evenly w-100'>
						{navigationItemsInfo.map(({ name, logoUrl, id }) => (
							<Nav.Item key={id}>
								<img className='me-2' src={logoUrl} />
								{name !== 'light mode' ? name : null}
							</Nav.Item>
						))}
					</Nav>
				</Navbar.Collapse>
			</Navbar>
		</Container>
	);
}
