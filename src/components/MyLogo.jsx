import { Navbar, Stack } from 'react-bootstrap';
import imgUrl from '../assets/navigation-bar-icons/Light-Mode/coding-svgrepo-com.svg';

// eslint-disable-next-line react/prop-types
export default function MyLogo({ isSmallScreen }) {
	return (
		<Stack
			direction='horizontal'
			className='justify-content-between justify-content-md-start'
		>
			<img src={imgUrl} />
			<div className={isSmallScreen ? 'ms-1' : 'ms-1 fw-bolder'}>Med Amine</div>
			<Navbar.Toggle aria-controls='navbar-nav' />
		</Stack>
	);
}
