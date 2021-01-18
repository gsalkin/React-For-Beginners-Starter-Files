import React from 'react';
import Header from './Header';
import Inventory from './Inventory';
import Order from './Order';
import Fish from './Fish';
import sampleFishes from '../sample-fishes';
import base from '../base';

class App extends React.Component {
	state = {
		fishes: {},
		order: {}
	};

	componentDidMount() {
		const { params } = this.props.match;
		//Reinstate localStorage
		const localStorageRef = localStorage.getItem(params.storeId);
		if (localStorageRef) {
			this.setState({
				order: JSON.parse(localStorageRef)
			});
		}
		// Firebase Ref, not React ref
		this.ref = base.syncState(`${params.storeId}/fishes`, {
			context: this,
			state: 'fishes'
		});
	}

	// Prevent memory leak by stopping changes when component unmounts
	componentWillUnmount() {
		base.removeBinding(this.ref);
	}

	componentDidUpdate() {
		const { params } = this.props.match;
		localStorage.setItem(params.storeId, JSON.stringify(this.state.order));
	}

	addFish = fish => {
		const fishes = { ...this.state.fishes }; // copy existing state using spread operator
		fishes[`fish${Date.now()}`] = fish; // add our new data to the copied state (tagged template)
		this.setState({ fishes }); // set state to copied state
	};

	updateFish = (key, updatedFish) => {
		const fishes = { ...this.state.fishes }; // copy existing state
		fishes[key] = updatedFish; // Update state
		this.setState({ fishes: fishes }); // set state
	};

	deleteFish = key => {
		const fishes = { ...this.state.fishes };
		fishes[key] = null;
		this.setState({ fishes });
	};

	loadSampleFishes = () => {
		this.setState({
			fishes: sampleFishes
		});
	};

	addToOrder = key => {
		const order = { ...this.state.order };
		order[key] = order[key] + 1 || 1;
		this.setState({
			order: order
		});
	};

	removeFromOrder = key => {
		const order = { ...this.state.order };
		delete order[key];
		this.setState({
			order: order
		});
	};

	render() {
		return (
			<div className="catch-of-the-day">
				<div className="menu">
					<Header tagline="Fresh Seafood, To Your Door" />
					<ul className="fishes">
						{Object.keys(this.state.fishes).map(key => (
							<Fish
								key={key}
								index={key}
								data={this.state.fishes[key]}
								addToOrder={this.addToOrder}
							/>
						))}
					</ul>
				</div>
				<Order
					{...this.state}
					removeFromOrder={this.removeFromOrder}
					//Spread operator moves everything down, use wisely */
				/>
				<Inventory
					addFish={this.addFish}
					updateFish={this.updateFish}
					deleteFish={this.deleteFish}
					loadSampleFishes={this.loadSampleFishes}
					fishes={this.state.fishes}
				/>
			</div>
		);
	}
}

export default App;
