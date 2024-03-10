import { Button, Form } from 'react-bootstrap';
import HeroSectionTemplate from '../../components/HeroSectionTemplate';
import emailjs from '@emailjs/browser';
import FormInput from './FormInput';
import { useContext, useEffect, useRef, useState } from 'react';
import { DarkModeTheme } from '../../context/dark-mode-theme-context';
import NotificationModal from './NotificationModal';
import INPUT_DATA_OBJ from '../../data/form-input-data';

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
				{INPUT_DATA_OBJ.map(({ key, ...inputData }) => (
					<FormInput key={key} {...inputData} validateState={validate} />
				))}

				<Button
					type='submit'
					variant={isDarkMode ? 'outline-light' : 'outline-dark'}
					className='mx-auto d-block btn-lg mb-5 custom-btn-width'
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
