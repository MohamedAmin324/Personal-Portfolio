import { Button, Form } from 'react-bootstrap';
import HeroSectionTemplate from '../../components/HeroSectionTemplate';
import FormInput from './FormInput';

export default function ContactHero() {
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
					htmlFor='email-input'
					id='email-input'
					type='email'
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

				<Button type='submit' className='mx-auto d-block'>
					Send
				</Button>
			</Form>
		</HeroSectionTemplate>
	);
}
