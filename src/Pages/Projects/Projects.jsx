import HeroSectionTemplate from '../../components/HeroSectionTemplate';
import PROJECTS_DATA from '../../data/projects-data';
import ProjectCard from './ProjectCard';

export default function Projects() {
	return (
		<HeroSectionTemplate mainTitle='Projects'>
			{PROJECTS_DATA.map((projectInstance) => (
				<ProjectCard key={projectInstance.projectId} {...projectInstance} />
			))}
		</HeroSectionTemplate>
	);
}
