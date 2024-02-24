import { Nav } from 'react-bootstrap';
import { NAVIGATION_ITEMS_INFO } from '../../data/sections-data';
import { DarkModeTheme } from '../../context/dark-mode-theme-context';
import { useContext } from 'react';

// eslint-disable-next-line react/prop-types
export default function NavigationBar({ isSmallScreen }) {
	const [isDarkMode, updateDarkModeState] = useContext(DarkModeTheme);
	return (
		<Nav className='justify-content-evenly w-100 position-relative'>
			{NAVIGATION_ITEMS_INFO.map(
				({ name, logosUrls: { lightModeUrl, darkModeUrl }, id }) => (
					<Nav.Item key={id}>
						<Nav.Link className={isSmallScreen ? 'custom-link-padding' : ''}>
							<img
								onClick={
									name === 'light mode' ? updateDarkModeState : undefined
								}
								className='me-2'
								src={isDarkMode ? darkModeUrl : lightModeUrl}
							/>
							{name !== 'light mode' ? name : null}
						</Nav.Link>
					</Nav.Item>
				)
			)}
		</Nav>
	);
}
