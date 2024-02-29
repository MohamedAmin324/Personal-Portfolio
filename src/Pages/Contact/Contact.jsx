import { Button, Form } from 'react-bootstrap';
import HeroSectionTemplate from '../../components/HeroSectionTemplate';

export default function ContactHero() {

	
	return (
		<HeroSectionTemplate mainTitle='Contact Me'>
			<Form className='contact-form'>
				<Form.Group className='mx-auto custom-width'>
					<Form.Label htmlFor='email-input' className='fs-5'>
						Email
					</Form.Label>
					<Form.Control id='email-input' type='email' className='' />
				</Form.Group>

				<Form.Group className='mx-auto custom-width'>
					<Form.Label htmlFor='name-input' className='fs-5'>
						Full Name
					</Form.Label>
					<Form.Control id='name-input' type='text' />
				</Form.Group>

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
