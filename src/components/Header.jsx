import { Container, Nav, Navbar } from 'react-bootstrap';
import MyLogo from './MyLogo';
import skillsIcon from '../assets/navigation-bar-icons/Light-Mode/skills-svgrepo-com.svg';
import projectsIcon from '../assets/navigation-bar-icons/Light-Mode/Projects-svgrepo-com.svg';
import contactIcon from '../assets/navigation-bar-icons/Light-Mode/contact-sending-mail-svgrepo-com.svg';
import resumeIcon from '../assets/navigation-bar-icons/Light-Mode/resume-svgrepo-com.svg';
import lightModeIcon from '../assets/navigation-bar-icons/Light-Mode/Light-mode-svgrepo-com.svg';
import { useEffect, useState } from 'react';

export default function Header() {
	// state used to conditionally render the w-100 bootstrap class
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
						<Nav.Item>
							<Nav.Link>
								<img className='me-2' src={skillsIcon} />
								Skills
							</Nav.Link>
						</Nav.Item>
						<Nav.Item>
							<Nav.Link>
								<img className='me-2' src={projectsIcon} />
								Projects
							</Nav.Link>
						</Nav.Item>
						<Nav.Item>
							<Nav.Link>
								<img className='me-2' src={contactIcon} />
								Contact
							</Nav.Link>
						</Nav.Item>
						<Nav.Item>
							<Nav.Link>
								<img className='me-2' src={resumeIcon} />
								Resume
							</Nav.Link>
						</Nav.Item>
						<Nav.Link>
							<img className='me-2' src={lightModeIcon} />
						</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Navbar>
		</Container>
	);
}
