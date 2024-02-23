import { Container } from 'react-bootstrap';
import ButtonNavigation from './ButtonNavigation.jsx';

export default function Hero() {
	return (
		<Container className='mt-6 text-center custom-margin-top' fluid='md'>
			<h1 className='custom-header fw-bolder'>Mohamed Amine Basdouri</h1>
			<p className='lead fw-normal custom-margin-bottom'>
				I am a frontend web developer from Tunisia with a passion for
				technology, AI and cybersecurity. I specialize in creating user-friendly
				interfaces and seamless experiences with a ken interest in emerging
				technologies. I bring a fresh perspective to every project. Let us
				collaborate and bring your digital a vision to Life.
			</p>
			<ButtonNavigation />
		</Container>
	);
}
