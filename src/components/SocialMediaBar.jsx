import { Stack } from 'react-bootstrap';
import { ICONS_DATA } from '../data/icons-data';
import { useContext } from 'react';
import { DarkModeTheme } from '../context/dark-mode-theme-context';

export default function SocialMediaBar() {
	const [isDarkMode] = useContext(DarkModeTheme);
	return (
		<Stack
			direction='horizontal'
			className='justify-content-center icons-bar-margin'
			gap={2}
		>
			{ICONS_DATA.map(
				({ id, iconsUrls: { lightModeUrl, darkModeUrl }, accountUrl }) => (
					<a key={id} href={accountUrl} target='_blank'>
						<img src={isDarkMode ? darkModeUrl : lightModeUrl} />
					</a>
				)
			)}
		</Stack>
	);
}
