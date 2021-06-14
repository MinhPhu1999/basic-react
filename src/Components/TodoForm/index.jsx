import React, {useState} from 'react';
import PropTypes from 'prop-types';

TodoForm.propTypes = {
	onSubmit: PropTypes.func,
};

TodoForm.defaultProps = {
	onSubmit: null,
}

function TodoForm(props) {
	const {onSubmit} = props;
	const [value, setvalue] = useState('')

	function handleValueChange(e) {
		setvalue(e.target.value);
	}

	function handleSubmit(e) {
		//ngan chan su kien mac dinh reload trang
		e.preventDefault();
		if(!onSubmit) return;

		const formValue = {
			title: value,
		};
		onSubmit(formValue);

		//submit xong thi reset lai form
		setvalue('');
	}

	return (
		<form onSubmit={handleSubmit}>
			<input 
			type='text' value={value}
			onChange={handleValueChange} />
		</form>
	);
}

export default TodoForm;