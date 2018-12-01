import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import TextInput from './Generics/TextInput';
import SelectInput from './Generics/SelectInput';
import CheckInput from './Generics/CheckInput';


class Form extends React.Component{

    constructor(props){
      super(props)
      this.state = {
        itemName: '',
        imported: false,
        price: 0,
        category: 1,
        salesTax: 0,
        importDuty: 0,
        totalPrice: 0
      }
      this._onChange = this._onChange.bind(this);
      this._saveItem = this._saveItem.bind(this);
      this.selectOptions = [{value:1,title:"Food"},{value:2,title:"Medical"},
                            {value:3,title:"Books"},{value:4,title:"Furniture"},
                            {value:5,title:"Fabric"},{value:6,title:"Electronics"},
                            {value:7,title:"Jwellery"},{value:8,title:"Beddings"},
                            {value:9,title:"Others"}
                          ]
    }

    _onChange(e){
      console.log(e.target)
      let name = e.target.name;
      let value = e.target.value;
      if(name === 'imported'){
        value = e.target.checked
      }
      if((name === 'price')){
        value = parseFloat(value);
      }
      this.setState({[name]:value})
    }
    _getSalesTax(){
      let item = this.state;
      if((item.category == 1) || (item.category == 2) || (item.category == 3))
        return 0;
      return parseFloat((+item.price) * 10/100).toFixed(2)
    }
    _getImportDuty(){
      let item = this.state;
      if(item.imported)
        return parseFloat(item.price * 5/100).toFixed(2);
      return 0
    }
    _saveItem(e){
      if(this.state.itemName.trim() === ""){
        alert("Item Name cam not be empty.")
        return;
      }
      if(this.state.price <= 0){
        alert("Price should be greater than 0.")
        return;
      }
      let salesTax = this._getSalesTax();
      let importDuty = this._getImportDuty();
      let totalPrice = parseFloat((+this.state.price) + (+salesTax) + (+importDuty)).toFixed(2);
      this.setState({salesTax:parseFloat(salesTax),importDuty:parseFloat(importDuty),totalPrice:parseFloat(totalPrice)},()=>{
        this.props.saveItem(this.state);
        console.log("this.state",this.state)
      })
    }
    render(){
  		return(
          <section className="form-box">
            <article>
                <TextInput
                  label="Item:"
                  type='text'
                  name='itemName'
                  placeholder="Item"
                  parentClass="row"
                  labelClass="col-md-4"
                  valueClass="col-md-8"
                  value={this.state.itemName}
                  onChange={this._onChange}
                />
                <TextInput
                  label="Price:"
                  type='number'
                  name='price'
                  placeholder="Price"
                  parentClass="row"
                  labelClass="col-md-4"
                  valueClass="col-md-8"
                  value={this.state.price}
                  onChange={this._onChange}
                />
                <SelectInput
                  label="Category:"
                  name="category"
                  parentClass="row"
                  labelClass="col-md-4"
                  selectClass="col-md-8"
                  options={this.selectOptions}
                  value={this.state.category}
                  onChange={this._onChange}
                />
                <CheckInput
                  label="Imported:"
                  name="imported"
                  parentClass="row"
                  labelClass="col-md-4"
                  valueClass="col-md-8"
                  value={this.state.imported}
                  onChange={this._onChange}
                />
                <div className="row">
                  <div className="col-md-4">

                  </div>
                  <div className="col-md-8">
                    <button className="btn btn-primary" onClick={this._saveItem}>Save</button>
                  </div>
                </div>


            </article>
          </section>
  			);
	}
}
export default Form;
