import { Button, Nav } from 'react-bootstrap';
import { NAVIGATION_ITEMS_INFO } from '../../data/navigation_items_info';
import { DarkModeTheme } from '../../context/dark-mode-theme-context';
import { useContext } from 'react';
import { Link } from 'react-router-dom';


export default function NavigationBar({ isSmallScreen }) {
	const [isDarkMode, updateDarkModeState] = useContext(DarkModeTheme);

	return (
		<Nav className='justify-content-evenly w-100 position-relative'>
			{NAVIGATION_ITEMS_INFO.map(
				({ name, logosUrls: { lightModeUrl, darkModeUrl }, id, pathName }) => (
					<Nav.Item key={id}>
						{name !== 'light mode' ? (
							/*
							Since wrapping an a element inside another will throw error, I changed the HTML element rendered by Nav.Link
							The entire reason why I wrapping the router link inside a bootstrap link is to be able to toggle te navbar off when the user clicks on a nav link
							 */
							<Nav.Link as='div' bsPrefix='unstyled-link-wrapper' eventKey={id}>
								<Link
									to={pathName}
									className={`nav-link ${name !== 'Skills' ? 'd-flex' : ''} ${
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
							</Nav.Link>
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
