import { useContext } from 'react';
import { Card, Carousel } from 'react-bootstrap';
import { DarkModeTheme } from '../../context/dark-mode-theme-context';

export default function ProjectCard({
	projectTitle,
	projectScreenShots,
	description,
	techStack,
	livePreview,
	sourceCode,
}) {
	const [isDarkMode] = useContext(DarkModeTheme);

	return (
		<Card className='custom-width mt-4'>
			<Card.Img variant='top' as={Carousel}>
				{projectScreenShots.map((imgUrl, index) => (
					<Carousel.Item key={index}>
						<img className='w-100' src={imgUrl} />
					</Carousel.Item>
				))}
			</Card.Img>
			<Card.Body>
				<Card.Title>{projectTitle}</Card.Title>
				<Card.Text>{description}</Card.Text>
				<p>built with:</p>
				<div className='d-flex mb-3 flex-wrap' style={{ gap: '1.25rem' }}>
					{techStack.map((item, index) => (
						<span
							className={`border border-1 py-1 px-3 bg-success rounded border-${
								isDarkMode ? 'light' : 'dark'
							}`}
							key={index}
						>
							{item}
						</span>
					))}
				</div>
				<a
					href={livePreview}
					target='_blank'
					className={`btn me-3 btn-${
						isDarkMode ? 'outline-light' : 'outline-dark'
					}`}
				>
					Live Preview
				</a>
				<a
					href={sourceCode}
					target='_blank'
					className={`icon-link icon-link-hover btn me-3 btn-${
						isDarkMode ? 'outline-light' : 'outline-dark'
					}`}
				>
					Source Code
				</a>
			</Card.Body>
		</Card>
	);
}
