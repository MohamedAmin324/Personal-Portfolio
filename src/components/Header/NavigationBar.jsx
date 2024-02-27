import { Button, Nav } from 'react-bootstrap';
import { NAVIGATION_ITEMS_INFO } from '../../data/navigation_items_info';
import { DarkModeTheme } from '../../context/dark-mode-theme-context';
import { useContext } from 'react';
import { Link } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
export default function NavigationBar({ isSmallScreen }) {
	const [isDarkMode, updateDarkModeState] = useContext(DarkModeTheme);

	return (
		<Nav className='justify-content-evenly w-100 position-relative'>
			{NAVIGATION_ITEMS_INFO.map(
				({ name, logosUrls: { lightModeUrl, darkModeUrl }, id, pathName }) => (
					<Nav.Item key={id}>
						{name !== 'light mode' ? (
							<Link
								to={pathName}
								className={`nav-link d-flex ${
									isSmallScreen ? 'custom-link-padding' : ''
								}`}
							>
								<img
									onClick={
										name === 'light mode' ? updateDarkModeState : undefined
									}
									className='me-'
									src={isDarkMode ? darkModeUrl : lightModeUrl}
								/>
								<span
									className={name === 'Skills' ? 'ms-1' : ''}
									style={{ alignSelf: 'center' }}
								>
									{name !== 'light mode' ? name : null}
								</span>
							</Link>
						) : (
							<Button
								className={`nav-link ${
									isSmallScreen ? 'custom-link-padding' : ''
								}`}
								style={{ backgroundColor: 'inherit', border: 'none' }}
							>
								<img
									onClick={updateDarkModeState}
									className='me-2'
									src={isDarkMode ? darkModeUrl : lightModeUrl}
								/>
							</Button>
						)}
					</Nav.Item>
				)
			)}
		</Nav>
	);
}
