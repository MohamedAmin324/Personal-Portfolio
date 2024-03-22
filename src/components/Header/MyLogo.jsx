import { Navbar, Stack } from 'react-bootstrap';
import imgUrl from '../../assets/navigation-bar-icons/Light-Mode/coding-svgrepo-com.svg';
import imgDarkUrl from '../../assets/navigation-bar-icons/Dark-Mode/coding-svgrepo-com.svg';
import { useContext } from 'react';
import { DarkModeTheme } from '../../context/dark-mode-theme-context';
import { Link } from 'react-router-dom';

export default function MyLogo({
	isExpanded,
	updateExpandedState,
}) {
	const [isDarkMode] = useContext(DarkModeTheme);

	return (
		<Stack
			direction='horizontal'
			className='justify-content-between justify-content-md-start'
		>
			<Link to='/' className='nav-link d-flex'>
				<img src={isDarkMode ? imgDarkUrl : imgUrl} />
				<span className='my-name d-none d-md-block'>Med Amine</span>
			</Link>

			<div className='my-name d-block d-md-none'>Med Amine</div>

			<Navbar.Toggle
				bsPrefix='hamburger-menu'
				aria-controls='navbar-nav'
				as='div'
				onClick={() => updateExpandedState(!isExpanded)}
				className='d-md-none'
			>
				<input
					type='checkbox'
					checked={isExpanded}
					onChange={() => updateExpandedState(!isExpanded)}
					className={`customized-checkbox ${isExpanded ? 'w-0' : ''}`}
				/>
			</Navbar.Toggle>
		</Stack>
	);
}
