import { Stack } from 'react-bootstrap';
import imgUrl from '../assets/navigation-bar-icons/Light-Mode/coding-svgrepo-com.svg';

export default function MyLogo() {
	return (
		<Stack direction='horizontal'>
			<img src={imgUrl} />
			<div className='my-name ms-1 fw-bolder'>Med Amine</div>
		</Stack>
	);
}
