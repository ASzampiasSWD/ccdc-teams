import React, { Component } from 'react';

class CollegeTable extends Component{
    render(){
        return(
			<div>
		    <h2>{this.props.state} Teams</h2>
			<table className="table table-dark">
			  <thead>
				<tr>
				  <th scope="col">College/University</th>
				  <th scope="col">Type</th>
				  <th scope="col">Website</th>
				</tr>
			  </thead>
			  <tbody>
				<tr>
				  <td>Baldwin Wallace University</td>
				  <td></td>
				  <td></td>
				</tr>
				<tr>
				  <td>Cedarville University</td>
				  <td></td>
				  <td></td>
				</tr>
				<tr>
				  <td>Cuyahoga Community College</td>
				  <td>Tryout</td>
				  <td><a target="_blank" href="https://www.tricblueteam.com">tricblueteam.com</a></td>
				</tr>
				<tr>
				  <td>Lakeland Community College</td>
				  <td>First Come First Serve</td>
				  <td></td>
				</tr>
				<tr>
				  <td>Lorain County Community College </td>
				  <td>First Come First Serve</td>
				  <td></td>
				</tr>
			  </tbody>
			</table></div>)
    }
} 

export default CollegeTable