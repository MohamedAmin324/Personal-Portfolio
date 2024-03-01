import { Button, Form } from 'react-bootstrap';
import HeroSectionTemplate from '../../components/HeroSectionTemplate';
import emailjs from '@emailjs/browser';
import FormInput from './FormInput';
import { useContext, useEffect, useRef } from 'react';
import { DarkModeTheme } from '../../context/dark-mode-theme-context';

export default function ContactHero() {
	const [isDarkMode] = useContext(DarkModeTheme);
	const contactForm = useRef(null);

	useEffect(() => {
		window.onload = () => {
			emailjs.init({
				publicKey: 'b3JKOQxCz9TP9J-sj',
			});
		};
		return () => {
			window.onload = null;
		};
	}, []);

	function handleSubmit(eventObj) {
		eventObj.preventDefault();

		emailjs
			.sendForm('service_ohvs2p7', 'template_pu7andg', contactForm.current)
			.then(() => console.log('SUCCESS'))
			.catch((err) => console.log(err));
	}

	return (
		<HeroSectionTemplate mainTitle='Contact Me'>
			<Form ref={contactForm} className='contact-form' onSubmit={handleSubmit}>
				<FormInput
					htmlFor='name-input'
					id='name-input'
					name='from_name'
					type='text'
					labelText='Full Name'
				/>

				<FormInput
					htmlFor='email-input'
					id='email-input'
					name='user_email'
					type='email'
					labelText='Email'
				/>

				<Form.Group className='mx-auto custom-width'>
					<Form.Label htmlFor='message-body' className='fs-5'>
						Message
					</Form.Label>
					<Form.Control
						id='message-body'
						as='textarea'
						name='message'
						className='p-3'
						style={{ height: '150px' }}
					/>
				</Form.Group>

				<Button
					type='submit'
					variant={isDarkMode ? 'outline-light' : 'outline-dark'}
					className='mx-auto d-block btn-lg'
					style={{ width: '20%' }}
				>
					Send
				</Button>
			</Form>
		</HeroSectionTemplate>
	);
}
