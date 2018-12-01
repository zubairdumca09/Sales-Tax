import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { saveItem } from '../../actions/action'
import Form from '../Form'
import Cart from '../Cart'

class Main extends React.Component{
	constructor(props){
		super(props)
    this.state = {
      items: this.props.items,
      message: ""
    }
    this._saveItem = this._saveItem.bind(this);
	}
  componentWillReceiveProps(nextProps){
    console.log(nextProps);
    this.setState({
      items: nextProps.items
    })
  }
  _saveItem(obj){
    this.props.dispatch(saveItem(obj))
  }
	render(){
    console.log("items",this.state.items);
		return(
			<div className="row main container-fluid">
        <div className="col-md-6" >
          <Form
            selectOptions={this.selectOptions}
            saveItem={this._saveItem}
          />
        </div>
        <div className="col-md-6" style={{borderLeft:'1px solid #D6D6D6',overflow:'auto'}}>
          <Cart
            itemDetails={this.state.items}

          />
        </div>
      </div>
			);
	}
}
const mapStateToProps = (state) => {
  console.log("state",state)
  return {
    items: state.items
  }
}
export default connect(mapStateToProps)(Main);
