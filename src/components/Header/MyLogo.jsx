import { Navbar, Stack } from 'react-bootstrap';
import imgUrl from '../../assets/navigation-bar-icons/Light-Mode/coding-svgrepo-com.svg';
import imgDarkUrl from '../../assets/navigation-bar-icons/Dark-Mode/coding-svgrepo-com.svg';
import { useContext } from 'react';
import { DarkModeTheme } from '../../context/dark-mode-theme-context';
import { Link } from 'react-router-dom';


export default function MyLogo({ isSmallScreen, isExpanded, updateExpandedState }) {
	const [isDarkMode] = useContext(DarkModeTheme);

	return (
		<Stack
			direction='horizontal'
			className='justify-content-between justify-content-md-start'
		>
			<Link to='/' className='nav-link d-flex'>
				<img src={isDarkMode ? imgDarkUrl : imgUrl} />
				{isSmallScreen ? null : (
					<span className={isSmallScreen ? 'ms-1' : 'ms-1 fw-bolder'}>
						Med Amine
					</span>
				)}
			</Link>
			{isSmallScreen ? (
				<div className={isSmallScreen ? 'ms-1' : 'ms-1 fw-bolder'}>
					Med Amine
				</div>
			) : null}
			{isSmallScreen ? (
				<Navbar.Toggle
					bsPrefix='hamburger-menu'
					aria-controls='navbar-nav'
					as='div'
					onClick={() => updateExpandedState(!isExpanded)}
				>
					<input
						type='checkbox'
						checked={isExpanded}
						onChange={() => updateExpandedState(!isExpanded)}
						className={`customized-checkbox ${isExpanded ? 'w-0' : ''}`}
					/>
				</Navbar.Toggle>
			) : null}
		</Stack>
	);
}
