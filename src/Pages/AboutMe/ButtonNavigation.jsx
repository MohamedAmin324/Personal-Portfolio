import { Stack } from 'react-bootstrap';

export default function ButtonNavigation() {
	return (
		<Stack direction='horizontal' className='justify-content-center' gap={4}>
			<a className='btn btn-light custom-btn-border' href='#' role='button'>
				Contact Me
			</a>
			<a className='btn btn-light custom-btn-border' href='#' role='button'>
				See My Work
			</a>
		</Stack>
	);
}