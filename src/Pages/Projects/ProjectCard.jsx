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
				<Card.Text>
					{description}
				</Card.Text>
				<p>built with:</p>
				<div className='d-flex mb-3' style={{ gap: '1.25rem' }}>
					{techStack.map((item, index) => (
						<span
							className={`border border-1 p-1 rounded border-${
								isDarkMode ? 'light' : 'dark'
							}`}
							key={index}
						>
							{item}
						</span>
					))}
				</div>
				<a href={livePreview} target='_blank' className='btn btn-primary me-3'>
					Live Preview
				</a>
				<a href={sourceCode} target='_blank' className='btn btn-primary'>
					Source Code
				</a>
			</Card.Body>
		</Card>
	);
}
