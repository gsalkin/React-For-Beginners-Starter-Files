import React from 'react';
import PropTypes from 'prop-types';

class EditFishForm extends React.Component {
	static propTypes = {
		fish: PropTypes.shape({
			image: PropTypes.string,
			name: PropTypes.string,
			price: PropTypes.number,
			status: PropTypes.string,
			desc: PropTypes.string
		}),
		updateFish: PropTypes.func,
		index: PropTypes.string
	};
	handleChange = e => {
		const updatedFish = {
			...this.props.fish,
			[e.currentTarget.name]: e.currentTarget.value
		};
		this.props.updateFish(this.props.index, updatedFish);
	};
	render() {
		const { name, price, status, image, desc } = this.props.fish;
		return (
			<div className="fish-edit">
				<input type="text" name="name" value={name} onChange={this.handleChange} />
				<input type="text" name="price" value={price} onChange={this.handleChange} />
				<select type="text" name="status" onChange={this.handleChange} value={status}>
					<option value="available">Fresh!</option>
					<option value="unavailable">Sold Out!</option>
				</select>
				<textarea name="desc" value={desc} onChange={this.handleChange}></textarea>
				<input type="text" name="image" src={image} onChange={this.handleChange} />
				<button onClick={() => this.props.deleteFish(this.props.index)}>Remove Fish</button>
			</div>
		);
	}
}

export default EditFishForm;
