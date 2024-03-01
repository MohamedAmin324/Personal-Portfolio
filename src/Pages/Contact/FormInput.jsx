import { Form } from 'react-bootstrap';

export default function FormInput(props) {
	const { htmlFor, type, id, labelText, name, isRequired } = props;
	return (
		<Form.Group className='mx-auto custom-width'>
			<Form.Label htmlFor={htmlFor} className='fs-5'>
				{labelText}{' '}
				<span style={isRequired ? { color: 'red' } : { fontWeight: 'lighter' }}>
					{isRequired ? '*' : '(optional)'}
				</span>
			</Form.Label>
			<Form.Control id={id} type={type} name={name} required={isRequired} />
		</Form.Group>
	);
}
