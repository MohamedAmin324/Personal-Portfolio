import { useContext } from 'react';
import { Dropdown, Stack } from 'react-bootstrap';
import { DarkModeTheme } from '../../context/dark-mode-theme-context';
import { isUndefined } from 'lodash';

export default function SkillsCard({ cardTitle, iconsList, cardId }) {
	const [isDarkMode] = useContext(DarkModeTheme);
	return (
		<div
			className={`border border-4 border-${
				isDarkMode ? 'light' : 'dark'
			}  p-3 rounded-3 h-100`}
		>
			<h3 className='mb-5'>{cardTitle}</h3>
			<Stack gap={4} key={cardId}>
				{iconsList.map(({ name, iconUrl, itemId, ecoSystemIcons }) => (
					<div key={itemId} className='d-flex'>
						<img src={iconUrl} className='svg-size me-3' />
						{isUndefined(ecoSystemIcons) ? (
							<span className='fs-5 align-self-center'>{name}</span>
						) : (
							<Dropdown className='fs-5 align-self-center'>
								<Dropdown.Toggle
									as='span'
									id='dropdown-basic'
									className='position-relative'
								>
									{name}
								</Dropdown.Toggle>

								<Dropdown.Menu>
									{ecoSystemIcons.map(({ name, iconUrl, itemId }) => (
										<Dropdown.Item key={itemId}>
											<img className='svg-size me-3' src={iconUrl} />
											<span>{name}</span>
										</Dropdown.Item>
									))}
								</Dropdown.Menu>
							</Dropdown>
						)}
					</div>
				))}
			</Stack>
		</div>
	);
}
