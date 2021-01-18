import React from 'react';
import PropTypes from 'prop-types';
import { formatPrice } from '../helpers';

class Fish extends React.Component {
	static propTypes = {
		data: PropTypes.shape({
			image: PropTypes.string,
			name: PropTypes.string,
			price: PropTypes.number,
			status: PropTypes.string,
			desc: PropTypes.string
		}),
		addToOrder: PropTypes.func,
		index: PropTypes.string
	};
	render() {
		const {
			data: { image, name, price, status, desc },
			addToOrder,
			index
		} = this.props;
		const isAvailable = status === 'available';
		return (
			<li className="menu-fish">
				<img src={image} alt={name} />
				<h3 className="fish-name">
					{name}
					<span className="price">{formatPrice(price)}</span>
				</h3>
				<p>{desc}</p>
				<button disabled={!isAvailable} onClick={() => addToOrder(index)}>
					{isAvailable ? 'Add to Order' : 'Sold Out!'}
				</button>
			</li>
		);
	}
}

export default Fish;
