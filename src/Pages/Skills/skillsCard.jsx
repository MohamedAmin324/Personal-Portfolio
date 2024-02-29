import { Stack } from 'react-bootstrap';

export default function SkillsCard({ cardTitle, iconsList, cardId }) {
	return (
		<div className='border border-4  p-3 rounded-3 h-100'>
			<h3 className='mb-4'>{cardTitle}</h3>
			<Stack gap={4} key={cardId}>
				{iconsList.map(({ name, iconUrl, itemId }) => (
					<div key={itemId} className='d-flex'>
						<img src={iconUrl} className='svg-size me-3' />
						<span>{name}</span>
					</div>
				))}
			</Stack>
		</div>
	);
}
