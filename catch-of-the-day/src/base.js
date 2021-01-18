import Rebase from 're-base';
import firebase from 'firebase';

const firebaseapp = firebase.initializeApp({
	apiKey: 'AIzaSyCQjyLdRDT-UrUoVSCn4BKSrDube3-r2aU',
	authDomain: 'catch-of-the-day-gsalkin.firebaseapp.com',
	databaseURL: 'https://catch-of-the-day-gsalkin.firebaseio.com',
	projectId: 'catch-of-the-day-gsalkin',
	storageBucket: 'catch-of-the-day-gsalkin.appspot.com',
	messagingSenderId: '582953828969',
	appId: '1:582953828969:web:a3f16cc49593229e5a98f8'

});

const base = Rebase.createClass(firebaseapp.database());

export { firebaseapp }; // Named export

export default base; // Default export
