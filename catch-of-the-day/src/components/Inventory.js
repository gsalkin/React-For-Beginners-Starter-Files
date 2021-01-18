import React from 'react';
import PropTypes from 'prop-types';
import { firebase } from 'firebase';
import { firebaseApp } from '../base';
import AddFishForm from './AddFishForm';
import EditFishForm from './EditFishForm';
//import Login from './Login';

class Inventory extends React.Component {
	static propTypes = {
		fishes: PropTypes.object,
		updateFish: PropTypes.func,
		addFish: PropTypes.func,
		deleteFish: PropTypes.func,
		loadSampleFishes: PropTypes.func
	};
	// authHandler = async authData => {};
	// authenticate = provider => {
	// 	const authProvider = new firebase.auth[`${provider}AuthProvider`]();
	// 	firebaseApp
	// 		.auth()
	// 		.signInWithPopup(authProvider)
	// 		.then(this.authHandler);
	// };

	render() {
		// return <Login authenticate={this.authenticate} />;
		const { fishes, updateFish, addFish, deleteFish, loadSampleFishes } = this.props;
		return (
			<div className="inventory">
				<h2>Inventory</h2>
				{Object.keys(fishes).map(key => (
					<EditFishForm
						key={key}
						index={key} // `Key` is protected keywork not accessible in props
						fish={fishes[key]}
						updateFish={updateFish}
						deleteFish={deleteFish}
					/>
				))}
				<AddFishForm addFish={addFish} />
				<button onClick={loadSampleFishes}>Load Sample Fishes</button>
			</div>
		);
	}
}

export default Inventory;
