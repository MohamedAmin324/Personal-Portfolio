import { Container } from 'react-bootstrap';


export default function HeroSectionTemplate({ mainTitle, children }) {
	return (
		<Container className='custom-margin-top' fluid='sm'>
			<h1 className='text-center custom-header fw-bolder'>{mainTitle}</h1>
			{children}
		</Container>
	);
}
