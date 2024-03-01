import { Form } from 'react-bootstrap';

export default function FormInput(props) {
	const { htmlFor, type, id, labelText, name } = props;
	return (
		<Form.Group className='mx-auto custom-width'>
			<Form.Label htmlFor={htmlFor} className='fs-5'>
				{labelText}
			</Form.Label>
			<Form.Control id={id} type={type} name={name} />
		</Form.Group>
	);
}
