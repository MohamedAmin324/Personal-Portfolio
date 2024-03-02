import { Button } from 'react-bootstrap';
import HeroSectionTemplate from '../../components/HeroSectionTemplate';

export default function Resume() {
	return (
		<HeroSectionTemplate mainTitle='Resume'>
			<Button className='mx-auto d-block'>Download my CV</Button>
		</HeroSectionTemplate>
	);
}
