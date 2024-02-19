import { Container, Nav, Navbar } from 'react-bootstrap';
import MyLogo from './MyLogo';
import skillsIcon from '../assets/navigation-bar-icons/Light-Mode/skills-svgrepo-com.svg';
import projectsIcon from '../assets/navigation-bar-icons/Light-Mode/Projects-svgrepo-com.svg';
import contactIcon from '../assets/navigation-bar-icons/Light-Mode/contact-sending-mail-svgrepo-com.svg';
import resumeIcon from '../assets/navigation-bar-icons/Light-Mode/resume-svgrepo-com.svg';

export default function Header() {
	return (
		<Container className='border-bottom border-dark-subtle border-2' fluid>
			<Navbar expand='md'>
				<Navbar.Brand>
					<MyLogo />
				</Navbar.Brand>
				<Navbar.Toggle aria-controls='basic-navbar-nav' />
				<Navbar.Collapse id='basic-navbar-nav'>
					<Nav className='justify-content-evenly w-100'>
						<Nav.Link>
							<img className='me-2' src={skillsIcon} />
							Skills
						</Nav.Link>
						<Nav.Link>
							<img className='me-2' src={projectsIcon} />
							Projects
						</Nav.Link>
						<Nav.Link>
							<img className='me-2' src={contactIcon} />
							Contact
						</Nav.Link>
						<Nav.Link>
							<img className='me-2' src={resumeIcon} />
							Resume
						</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Navbar>
		</Container>
	);
}
