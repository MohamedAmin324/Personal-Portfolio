import { Stack } from 'react-bootstrap';
import { ICONS_DATA } from '../data/icons-data';

export default function SocialMediaBar() {
	return (
		<Stack direction='horizontal' className='justify-content-center icons-bar-margin' gap={2}>
			{ICONS_DATA.map(({ id, iconUrl,accountUrl }) => (
				<a key={id} href={accountUrl} target='_blank'>
					<img src={iconUrl} />
				</a>
			))}
		</Stack>
	);
}
