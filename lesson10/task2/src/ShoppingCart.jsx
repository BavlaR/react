import React, { Component } from 'react';
import ProductsList from './ProductsList';
import CartTitle from './CartTitle';

class ShoppingCart extends Component {
   state = {
      cartItems: [
         {
            id: 1,
            name: 'iPhone 11',
            price: 999,
         },
         {
            id: 2,
            name: 'iPad Pro',
            price: 799,
         },
         {
            id: 3,
            name: 'iPad Pro',
            price: 799,
         },
         {
            id: 4,
            name: 'iPad Pro',
            price: 799,
         },
         {
            id: 5,
            name: 'iPad Pro',
            price: 799,
         },
         {
            id: 6,
            name: 'iPad Pro',
            price: 799,
         },
         {
            id: 7,
            name: 'iPad Pro',
            price: 799,
         },
      ],
   };

   render() {
      const { cartItems } = this.state;

      return (
         <div className="column">
            <CartTitle userName={this.props.userName} count={cartItems.length} />
            <ProductsList cartItems={cartItems} />
         </div>
      );
   }
}

export default ShoppingCart;
