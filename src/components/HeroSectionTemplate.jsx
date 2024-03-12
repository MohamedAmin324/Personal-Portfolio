import { useEffect } from 'react';
import { Container } from 'react-bootstrap';
import { NAVIGATION_ITEMS_INFO } from '../data/navigation_items_info';

export default function HeroSectionTemplate({ mainTitle, children }) {
	useEffect(() => {
		document.title = mainTitle;

		const link = document.querySelector("link[rel = 'shortcut icon']");
		const pageInfoObj = NAVIGATION_ITEMS_INFO.find(
			({ name }) => name === mainTitle
		);
		link.href =
			pageInfoObj?.logosUrls.darkModeUrl ??
			// the Home page icon must be set individually because it is not in the NAVIGATION_ITEMS_INFO list
			'src/assets/navigation-bar-icons/Dark-Mode/coding-svgrepo-com.svg';
	}, []);
	
	return (
		<Container className='custom-margin-top' fluid='sm'>
			<h1 className='text-center custom-header fw-bolder'>{mainTitle}</h1>
			{children}
		</Container>
	);
}
