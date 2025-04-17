import classes from './License.module.scss';

const License = ({ formData, date }) => {
	return (
		<div className={classes.container}>
			<div className={classes.license_card}>
				<h2>Driver's Licence</h2>
				<p>
					<strong>Title: </strong>
					{formData.title}
				</p>
				<p>
					<strong>Name: </strong>
					{formData.firstname} {formData.surname}
				</p>

				<p>
					<strong>Date of Birth: </strong>
					{new Date(date).toLocaleDateString('en-GB')}
				</p>
			</div>
		</div>
	);
};

export default License;
