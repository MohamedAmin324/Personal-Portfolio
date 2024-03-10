import { Form } from 'react-bootstrap';
import { DarkModeTheme } from '../../context/dark-mode-theme-context';
import { useContext } from 'react';

export default function FormInput(props) {
	const [isDarkMode] = useContext(DarkModeTheme);

	const {
		htmlFor,
		type,
		id,
		labelText,
		name,
		isRequired,
		validationErrorMsg,
		as,
		styleAttribute,
		className,
		validateState,
	} = props;

	return (
		<Form.Group className='mx-auto custom-width'>
			<Form.Label htmlFor={htmlFor} className='fs-5'>
				{labelText}
				<span style={isRequired ? { color: 'red' } : { fontWeight: 'lighter' }}>
					{isRequired ? '*' : '(optional)'}
				</span>
			</Form.Label>
			<Form.Control
				as={as}
				style={styleAttribute}
				className={`${
					isDarkMode ? '' : validateState ? '' : 'border border-dark'
				} ${name === 'message' ? className : ''}`}
				id={id}
				type={type}
				name={name}
				required={isRequired}
			/>
			<Form.Control.Feedback type='invalid'>
				{validationErrorMsg}
			</Form.Control.Feedback>
		</Form.Group>
	);
}
