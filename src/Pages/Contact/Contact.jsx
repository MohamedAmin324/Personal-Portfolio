import { Button, Form } from 'react-bootstrap';
import HeroSectionTemplate from '../../components/HeroSectionTemplate';
import FormInput from './FormInput';
import { useContext } from 'react';
import { DarkModeTheme } from '../../context/dark-mode-theme-context';

export default function ContactHero() {
	const [isDarkMode] = useContext(DarkModeTheme);

	return (
		<HeroSectionTemplate mainTitle='Contact Me'>
			<Form className='contact-form'>
				<FormInput
					htmlFor='email-input'
					id='email-input'
					type='email'
					labelText='Email'
				/>

				<FormInput
					htmlFor='name-input'
					id='name-input'
					type='text'
					labelText='Full Name'
				/>

				<Form.Group className='mx-auto custom-width'>
					<Form.Label htmlFor='message-body' className='fs-5'>
						Message
					</Form.Label>
					<Form.Control
						id='message-body'
						as='textarea'
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
