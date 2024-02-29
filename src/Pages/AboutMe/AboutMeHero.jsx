import ButtonNavigation from './ButtonNavigation.jsx';
import SocialMediaBar from '../../components/SocialMediaBar.jsx';
import HeroSectionTemplate from '../../components/HeroSectionTemplate.jsx';

export default function AboutMeHero() {
	return (
		<HeroSectionTemplate mainTitle='Mohamed Amine Basdouri'>
			<p className='lead fw-normal custom-margin-bottom text-center'>
				I am a frontend web developer from Tunisia with a passion for
				technology, AI and cybersecurity. I specialize in creating user-friendly
				interfaces and seamless experiences with a ken interest in emerging
				technologies. I bring a fresh perspective to every project. Let us
				collaborate and bring your digital a vision to Life.
			</p>
			<ButtonNavigation />
			<SocialMediaBar />
		</HeroSectionTemplate>
	);
}
