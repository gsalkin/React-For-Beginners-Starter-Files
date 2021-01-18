import React from 'react';
import { getFunName } from '../helpers';

class StorePicker extends React.Component {
	myInput = React.createRef();

	goToStore = e => {
		/* If you want to access "this" you need to use ` => ` or it will not bind*/
		e.preventDefault();
		const storeName = this.myInput.current.value;
		this.props.history.push(`/store/${storeName}`);
	};

	render() {
		return (
			<form action="" className="store-selector" onSubmit={this.goToStore}>
				<h2>Please Enter a Store</h2>
				<input type="text" placeholder="Store Name" required defaultValue={getFunName()} ref={this.myInput} />
				<button type="submit">Visit Store →</button>
			</form>
		);
	}
}

export default StorePicker;
