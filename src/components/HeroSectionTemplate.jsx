import { Container } from 'react-bootstrap';


export default function HeroSectionTemplate({ mainTitle, children }) {
	return (
		<Container className='text-center custom-margin-top' fluid='md'>
			<h1 className='custom-header fw-bolder'>{mainTitle}</h1>
			{children}
		</Container>
	);
}
