import './App.scss';
import ControlledForm from './components/ControlledForm/ControlledForm';
import { useState } from 'react';
import License from './components/license/License';

function App() {
	const [submittedData, setSubmittedData] = useState(null);

	const handleFormSubmit = (data) => {
		console.log('data coming from app.jsx ', data);
		setSubmittedData(data);
	};

	return (
		<div>
			{submittedData ? (
				<License formData={submittedData} date={submittedData.date} />
			) : (
				<ControlledForm onFormSubmit={handleFormSubmit} />
			)}
		</div>
	);
}

export default App;
