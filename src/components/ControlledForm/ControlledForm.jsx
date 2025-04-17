import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import classes from './ControlledForm.module.scss';
import { useState } from 'react';
import countryData from '../../data/country-data.json';
import { validateForm } from './validator';

const ControlledForm = ({ onFormSubmit }) => {
	const [date, setDate] = useState(new Date()); //for date picker library
	const [formData, setFormData] = useState({
		//state variables to track input values
		surname: '',
		firstname: '',
		title: '',
		ausstates: countryData.states[1].stateCode,
		address: '',
	});

	const [touched, setTouched] = useState({
		surname: false,
		firstname: false,
		title: false,
		address: false,
	});

	const { isValid, errors } = validateForm(formData);

	const handleSubmit = (e) => {
		e.preventDefault();
		onFormSubmit({ ...formData, date });
	};

	return (
		<div className={classes.container}>
			<h1>Driver's License Form</h1>

			<form onSubmit={handleSubmit} className={classes.form}>
				<div className={classes.field}>
					<label htmlFor='surnameInput'>Surname:</label>
					<input
						id='surnameInput'
						type='text'
						name='surname'
						value={formData.surname} //controlled input
						onBlur={() => setTouched({ ...touched, surname: true })}
						onChange={
							(
								e // this will update the state variable
							) => setFormData({ ...formData, surname: e.target.value }) //
						}
					/>

					{touched.surname && errors.surname && (
						<small className={classes.error_text}>{errors.surname}</small>
					)}
				</div>
				<div className={classes.field}>
					<label htmlFor='firstnameInput'>Firstname:</label>
					<input
						id='firstnameInput'
						type='text'
						name='firstname'
						value={formData.firstname}
						onBlur={() => setTouched({ ...touched, firstname: true })}
						onChange={(e) =>
							setFormData({ ...formData, firstname: e.target.value })
						}
					/>
					{touched.firstname && errors.firstname && (
						<small className={classes.error_text}>{errors.firstname}</small>
					)}
					{/* {formData.firstname !== '' && <p>Your name is {formData.firstname}.</p>} */}
				</div>
				<div className={classes.field}>
					<label htmlFor='titleInput'>Title:</label>
					<input
						id='titleInput'
						type='text'
						name='title'
						value={formData.title}
						onBlur={() => setTouched({ ...touched, title: true })}
						onChange={(e) =>
							setFormData({ ...formData, title: e.target.value })
						}
					/>
					{touched.title && errors.title && (
						<small className={classes.error_text}>{errors.title}</small>
					)}
				</div>
				<div className={classes.field}>
					<label htmlFor='date'>Date of Birth:</label>
					<DatePicker
						selected={date}
						onChange={(date) => setDate(date)}
						dateFormat='d/MM/yyyy'
						className={classes.react_datepicker}
					/>
				</div>
				<div className={classes.field}>
					<label htmlFor='stateInput'>State:</label>
					<select
						id='stateInput'
						name='ausstates'
						value={formData.ausstates}
						onChange={(e) =>
							setFormData({ ...formData, ausstates: e.target.value })
						}>
						{countryData.states.map((state) => (
							<option key={state.stateCode} value={state.stateCode}>
								{state.name}
							</option>
						))}
					</select>
				</div>
				<div className={classes.field}>
					<label htmlFor='addressInput'>Address:</label>
					<input
						id='addressInput'
						type='text'
						name='address'
						value={formData.address}
						onBlur={() => setTouched({ ...touched, address: true })}
						onChange={(e) =>
							setFormData({ ...formData, address: e.target.value })
						}
					/>
					{touched.address && errors.address && (
						<small className={classes.error_text}>{errors.address}</small>
					)}
				</div>
				<button disabled={!isValid} className={classes.button}>
					Register
				</button>
			</form>
		</div>
	);
};

export default ControlledForm;
