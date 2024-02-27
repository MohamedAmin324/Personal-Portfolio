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
								className={isSmallScreen ? 'custom-link-padding' : ''}
							>
								<img
									onClick={
										name === 'light mode' ? updateDarkModeState : undefined
									}
									className='me-2'
									src={isDarkMode ? darkModeUrl : lightModeUrl}
								/>
								{name !== 'light mode' ? name : null}
							</Link>
						) : (
							<Button>
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
