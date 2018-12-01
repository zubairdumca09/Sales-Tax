import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { ListGroup } from 'reactstrap';
import TextInput from './Generics/TextInput';
import SelectInput from './Generics/SelectInput';
import CheckInput from './Generics/CheckInput';
import ItemPrice from './ItemPrice';


class Cart extends React.Component{

    constructor(props){
      super(props)

    }
    _getTotalPrice(){
      let total = 0;
      this.props.itemDetails.forEach((item)=>{
        console.log(item)
        total = total + item.totalPrice;
      })
      return total;
    }
    render(){
      const { itemDetails } = this.props
      let totalPrice = this._getTotalPrice();
      console.log(typeof totalPrice)
      console.log("itemDetails",itemDetails)
  		return(
        <ListGroup>
          <h4>Item Price Details</h4>
          {(itemDetails.length !== 0) &&
            <div><strong>Total Price: </strong><strong>{(+totalPrice).toFixed(2)}</strong></div>
          }
          {(itemDetails.length === 0) &&
            <div>Cart is Empty</div>
          }
          {
            itemDetails.map((item,index) => {
              return <ItemPrice key={index} item={item}/>
            })
          }
        </ListGroup>
  		);
	}
}
export default Cart;
