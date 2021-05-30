import React, { useEffect, useState, useContext } from 'react';
import { useHistory } from "react-router-dom"
import PageTemplate from '../fragments/PageTemplate';
import { Table,Button } from 'react-bootstrap';
import {ApiPath} from "../App";
import {Item} from "../ObjectTypes";
import {ThemeContext} from "../fragments/ThemeProvider";

const  ItemListComponent = () => {
	const [items, setItems] = useState<Item[]>([]);
	const history = useHistory();
	const {currentTheme} = useContext(ThemeContext);

useEffect(() => {
  async function getServerItem() {
    const response = await fetch(`${ApiPath}items`);
    const body = await response.json();
    setItems(body._embedded.items as Item[]);
  }
  getServerItem()
}, [])
	return <>
		<Button color="success"  onClick={() => history.push("/items/new")}>New Item</Button>
		<Table striped bordered hover variant={currentTheme.tableVariant}>
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
						<Button onClick={() => {history.push(`/items/${item.id}`)}}>Edit</Button>
					</td>
				</tr>
			)}
		</tbody>
	</Table>
	</>
}
const ItemList = () => {
  return <PageTemplate innerElement={<ItemListComponent/>} />
}

export default ItemList;
