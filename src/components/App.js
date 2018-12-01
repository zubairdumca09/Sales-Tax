import React, { Fragment } from 'react';
import { connect } from 'react-redux'
import Header from './Layout/Header';
import Main from './Layout/Main';
import Footer from './Layout/Footer';
import { Row, Col } from 'reactstrap'

class App extends React.Component{
	render(){
		return(
			<Fragment>
				<Header/>
				<Main/>
				<Footer/>
			</Fragment>
		);
	}
}

export default App;
