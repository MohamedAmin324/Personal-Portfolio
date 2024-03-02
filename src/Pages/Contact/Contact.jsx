import { Button, Form } from 'react-bootstrap';
import HeroSectionTemplate from '../../components/HeroSectionTemplate';
import emailjs from '@emailjs/browser';
import FormInput from './FormInput';
import { useContext, useEffect, useRef, useState } from 'react';
import { DarkModeTheme } from '../../context/dark-mode-theme-context';
import NotificationModal from './NotificationModal';

export default function ContactHero() {
	const [isDarkMode] = useContext(DarkModeTheme);

	const [processInfo, setProcessInfo] = useState({
		showModal: false,
		message: '',
	});

	const [validate, setValidate] = useState(false);
	const contactForm = useRef(null);

	const updateModalState = (toggleModal, messageText) =>
		setProcessInfo({
			showModal: toggleModal,
			message: messageText,
		});

	useEffect(() => {
		if (processInfo.showModal === false) {
			contactForm.current.reset();
			setValidate(false);
		}
	}, [processInfo]);

	function handleSubmit(eventObj) {
		const form = eventObj.target;
		eventObj.preventDefault();
		if (!form.checkValidity()) {
			setValidate(true);
			return;
		}

		emailjs.init({ publicKey: 'b3JKOQxCz9TP9J-sj' });

		emailjs
			.sendForm('service_ohvs2p7', 'template_pu7andg', contactForm.current)
			.then(() => updateModalState(true, 'Email Sent Successfully!!!'))
			.catch((err) => updateModalState(true, err.message));
	}

	return (
		<HeroSectionTemplate mainTitle='Contact Me'>
			<Form
				noValidate
				validated={validate}
				ref={contactForm}
				className='contact-form'
				onSubmit={handleSubmit}
			>
				<FormInput
					htmlFor='name-input'
					id='name-input'
					name='from_name'
					type='text'
					labelText='Full Name'
					isRequired={true}
					validationErrorMsg='Please Provide a Name'
				/>

				<FormInput
					htmlFor='email-input'
					id='email-input'
					name='user_email'
					type='email'
					labelText='Email'
					isRequired={true}
					validationErrorMsg='Please Provide a valid Email'
				/>

				<FormInput
					htmlFor='phone-input'
					id='phone-input'
					name='user_phone'
					type='tel'
					labelText='Phone'
					isRequired={false}
				/>

				<Form.Group className='mx-auto custom-width'>
					<Form.Label htmlFor='message-body' className='fs-5'>
						Message <span style={{ color: 'red' }}>*</span>
					</Form.Label>
					<Form.Control
						id='message-body'
						as='textarea'
						name='message'
						className='p-3'
						style={{ height: '150px' }}
						required
					/>
					<Form.Control.Feedback type='invalid'>
						Provide an Email Body
					</Form.Control.Feedback>
				</Form.Group>

				<Button
					type='submit'
					variant={isDarkMode ? 'outline-light' : 'outline-dark'}
					className='mx-auto d-block btn-lg mb-5'
					style={{ width: '20%' }}
				>
					Send
				</Button>

				<NotificationModal
					{...processInfo}
					updateModalState={updateModalState}
				/>
			</Form>
		</HeroSectionTemplate>
	);
}
