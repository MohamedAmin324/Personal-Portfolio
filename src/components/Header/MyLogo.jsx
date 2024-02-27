import { Navbar, Stack } from 'react-bootstrap';
import imgUrl from '../../assets/navigation-bar-icons/Light-Mode/coding-svgrepo-com.svg';
import imgDarkUrl from '../../assets/navigation-bar-icons/Dark-Mode/coding-svgrepo-com.svg';
import { useContext, useState } from 'react';
import { DarkModeTheme } from '../../context/dark-mode-theme-context';
import { Link } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
export default function MyLogo({ isSmallScreen }) {
	const [isDarkMode] = useContext(DarkModeTheme);
	const [isClicked, setIsClicked] = useState(false);
	return (
		<Stack
			direction='horizontal'
			className='justify-content-between justify-content-md-start'
		>
			<Link to='/'>
				<img src={isDarkMode ? imgDarkUrl : imgUrl} />
				{isSmallScreen ? null : (
					<div className={isSmallScreen ? 'ms-1' : 'ms-1 fw-bolder'}>
						Med Amine
					</div>
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
					onClick={() => setIsClicked(!isClicked)}
				>
					<input
						type='checkbox'
						checked={isClicked}
						onChange={() => setIsClicked(!isClicked)}
						className={`customized-checkbox ${isClicked ? 'test' : ''}`}
					/>
				</Navbar.Toggle>
			) : null}
		</Stack>
	);
}
