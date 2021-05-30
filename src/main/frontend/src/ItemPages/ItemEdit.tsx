import { FormEvent, useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import PageTemplate from "../fragments/PageTemplate";
import { useHistory, useParams } from "react-router-dom";
import {ApiPath} from "../App";
import {Item} from "../ObjectTypes";

interface RouteParams {
    id: string
}
const ItemEditComponent = () => {
    const params = useParams<RouteParams>();
    const [item, setItem] = useState<Item>();
    const history = useHistory();
    async function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
            await fetch(`${ApiPath}items${item?.id ? '/' + item.id : ''}`, {
            method: item?.id ? 'PUT' : 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(item),
        });
        history.push('/items');
    }
    useEffect(() => {
        async function getServerItem() {
            const responseFromServer = await fetch(`${ApiPath}items/${params.id}`);
            if (responseFromServer.ok) {
                const itemFromServer = await responseFromServer.json() as Item;
                setItem(itemFromServer)
            }
        }
        if (params.id && params.id !== 'new') {
            getServerItem();
        }
        else if (params.id) {
            setItem({ id: undefined, title: '', description: '' } as Item)
        }

    }, [params.id]);

    return item ? <Form onSubmit={handleSubmit}>
        <Form.Group>
            <Form.Label>Title of ID {item.id}</Form.Label>
            <Form.Control name="title" value={item.title} onChange={(event) => {
                setItem({ ...item, title: event.currentTarget.value })
            }}
                placeholder="Enter title" />
        </Form.Group>
        <Form.Group>
            <Form.Label>Description</Form.Label>
            <Form.Control name="description" value={item.description} onChange={(event) => {
                setItem({ ...item, description: event.currentTarget.value })
            }}
                placeholder="Enter description" />
        </Form.Group>
        <Button variant="primary" type="submit">
            Submit
        </Button>
    </Form> : <></>
}
const ItemEdit = () => {
  return <PageTemplate innerElement={<ItemEditComponent/>} />
}

export default ItemEdit;
