import { Col, Container, Row } from 'react-bootstrap';
import HeroSectionTemplate from '../../components/HeroSectionTemplate';

import SkillsCard from "./SkillsCard";
import SKILLS_OBJ_INFO from '../../data/skills-section-data';

export default function SkillsHero() {
	return (
		<HeroSectionTemplate mainTitle='Skills'>
			<Container className='my-5'>
				<Row className='g-4'>
					{SKILLS_OBJ_INFO.map(({ cardTitle, cardId, iconsList }) => (
						<Col md={4} key={cardId}>
							<SkillsCard
								cardTitle={cardTitle}
								iconsList={iconsList}
								cardId={cardId}
							/>
						</Col>
					))}
				</Row>
			</Container>
		</HeroSectionTemplate>
	);
}
