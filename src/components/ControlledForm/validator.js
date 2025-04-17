export const validateForm = (formData) => {
	const errors = {};
	let isValid = true;

	if (!formData.surname.trim()) {
		errors.surname = 'surname cannot be empty';
		isValid = false;
	}

	if (!formData.firstname.trim()) {
		errors.firstname = 'firstname is required';
		isValid = false;
	}

	if (!formData.title.trim()) {
		errors.title = 'Title is required';
		isValid = false;
	}

	if (!formData.address.trim()) {
		errors.address = 'address is required';
		isValid = false;
	}

	return { isValid, errors };
};
