import React, { Component } from 'react';
import PageTemplate from '../fragments/PageTemplate';
import { Table,Button } from 'react-bootstrap';
//import {useHustory} from 'react-router-dom';

class ItemList extends Component {
	state = {
		items: [],
		innerElement: <></>
};
constructor(props) {
	super(props);
	this.handleClick = this.handleClick.bind(this);
}
handleClick(url){
	this.props.history.push(url);
}
generateInnerHTML(items){
	return <>
	<Button color="success"  onClick={() => this.handleClick("/items/new")}>New Item</Button>
	<Table striped bordered hover>
		<thead>
			<tr>
				<th>#</th>
				<th>Title</th>
				<th>Description</th>
			</tr>
		</thead>
		<tbody>
			{items.map(item => <tr key={item.id}>
				<td>{item.id}</td>
				<td>{item.title}</td>
				<td>{item.description}</td>
				<td>
					<Button onClick={() => {this.props.history.push(`/items/${item.id}`)}}>Edit</Button>
				</td>
			</tr>
		)}
	</tbody>
</Table>
</>

}
async componentDidMount() {
	const response = await fetch('/api/items');
	const body = await response.json();
	this.setState({items: body, innerElement: this.generateInnerHTML(body)});
}
render() {
	return (
		<PageTemplate innerElement={this.state.innerElement}/>
	);
}
}
export default ItemList;
