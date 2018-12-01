import React, { Fragment } from 'react';


class Header extends React.Component{
	constructor(props){
		super(props)
	}

	render(){
		return(
			<header>
				<nav className="navbar navbar-default">
				  	<div className="container-fluid">
				    <div className="navbar-header">
							<strong>Sales Tax Problem #27</strong>
				    </div>

				  </div>
				</nav>
			</header>
			);
	}
}
export default Header;
