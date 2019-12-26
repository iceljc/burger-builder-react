import React, { Component } from 'react';
import {Route} from 'react-router-dom';
import { connect } from 'react-redux';

import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';
import ContactData from './ContactData/ContactData';


class Checkout extends Component {

	state = {
		ingredients: null,
        totalPrice: 0
	};

	//// no longer needed because of redux
	// componentWillMount() {
	// 	const query = new URLSearchParams(this.props.location.search); // read params from url
	// 	// console.log(query);
	// 	const ingredients = {};
	// 	let price = 0;
	// 	for (let params of query.entries()) {
	// 		if (params[0] === 'price') {
	// 			price = Number(params[1]);
	// 		} else {
	// 			ingredients[params[0]] = Number(params[1]);
	// 		}
	// 	}
	// 	this.setState({ingredients: ingredients, totalPrice: price});
		
	// }

	checkoutCancelledHandler = () => {
		this.props.history.goBack();
	}

	checkoutContinuedHandler = () => {
		this.props.history.replace('/checkout/contact-data');
	}



	render() {
		return (
			<div>
				<CheckoutSummary 
					ingredients={this.props.ings} 
					checkoutCancelled={this.checkoutCancelledHandler}
					checkoutContinued={this.checkoutContinuedHandler}/>
				<Route 
					path={this.props.match.path + '/contact-data'} 
					component={ContactData} />
			</div>
		);
	}
}
//
const mapStateToProps = (state) => {
    return {
        ings: state.ingredients
    }
};


export default connect(mapStateToProps)(Checkout);

// pass all props to <ContactData {...pros}> and let it get the path info
// the other way is to use withRoute in the ContactData.js























