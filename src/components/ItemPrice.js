import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { ListGroupItem } from 'reactstrap';
import TextInput from './Generics/TextInput';
import SelectInput from './Generics/SelectInput';
import CheckInput from './Generics/CheckInput';



class ItemPrice extends React.Component{

    constructor(props){
      super(props)
    }
    render(){
      const { item } = this.props
  		return(
          <ListGroupItem>
            <div className="row">
              <div className="col-md-4">Item Name</div>
              <div className="col-md-3">{item.itemName}</div>
            </div>
            <div className="row">
              <div className="col-md-4">Item Price</div>
              <div className="col-md-3">{item.price.toFixed(2)}</div>
            </div>
            <div className="row">
              <div className="col-md-4">Sales Tax</div>
              <div className="col-md-3">{item.salesTax.toFixed(2)}</div>
            </div>
            <div className="row">
              <div className="col-md-4  ">Import Duty</div>
              <div className="col-md-3">{item.importDuty.toFixed(2)}</div>
            </div>
            <hr/  >
            <div className="row">
              <div className="col-md-4"><strong>Total</strong></div>
              <div className="col-md-3"><strong>{(+item.totalPrice).toFixed(2)}</strong></div>
            </div>
          </ListGroupItem>
  			);
	}
}
export default ItemPrice;
