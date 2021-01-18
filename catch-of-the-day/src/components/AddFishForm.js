import React from 'react';
import PropTypes from 'prop-types';

class AddFishForm extends React.Component {
	static propTypes = {
		addFish: PropTypes.func
	};
	nameRef = React.createRef();
	priceRef = React.createRef();
	statusRef = React.createRef();
	descRef = React.createRef();
	textRef = React.createRef();

	createFish = e => {
		e.preventDefault();
		const fish = {
			name: this.nameRef.current.value,
			price: parseFloat(this.priceRef.current.value),
			status: this.statusRef.current.value,
			desc: this.descRef.current.value,
			text: this.textRef.current.value
		};
		this.props.addFish(fish);
		e.currentTarget.reset();
	};

	render() {
		return (
			<form action="" className="fish-edit" onSubmit={this.createFish}>
				<input ref={this.nameRef} type="text" name="name" id="" placeholder="name" />
				<input ref={this.priceRef} type="text" name="price" id="" placeholder="price" />
				<select ref={this.statusRef} name="status">
					<option value="available" className="value">
						Fresh!
					</option>
					<option value="unavailable" className="value">
						Sold Out!
					</option>
				</select>
				<textarea ref={this.descRef} name="desc" id="" placeholder="desc" />
				<input ref={this.textRef} type="text" name="image" id="" placeholder="image" />
				<button type="submit">+ Add Fish</button>
			</form>
		);
	}
}

export default AddFishForm;
