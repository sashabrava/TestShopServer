import { FormEvent, useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import PageTemplate from "../fragments/PageTemplate";
import { Redirect, RouteProps } from "react-router-dom";

type Item = {
    id: number | undefined,
    title: string,
    description: string
}
export default function ItemEdit({ match }: any) {
    const [item, setItem] = useState<Item>();
    const [redirectURL, setRedirectURL] = useState<string>();
    function generateHTML(item: Item | undefined) {
        return item ? <Form onSubmit={handleSubmit}>
            <Form.Group>
                <Form.Label>Title of ID {item.id}</Form.Label>
                <Form.Control name="title" onChange={(event) => {
                    setItem({ ...item, title: event.currentTarget.value })
                }}
                    placeholder="Enter title" />
                <Form.Text >
                    {item.title}
                </Form.Text>
            </Form.Group>
            <Form.Group>
                <Form.Label>Description</Form.Label>
                <Form.Control name="description" onChange={(event) => {
                    setItem({ ...item, description: event.currentTarget.value })
                }}
                    placeholder="Enter description" />
                <Form.Text>
                    {item.description}
                </Form.Text>
            </Form.Group>
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form> : <></>
    }
    async function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        await fetch('/api/items', {
            //await fetch('/api/items' + (item.id ? '/' + item.id : ''), {
            //method: (item.id) ? 'PUT' : 'POST',
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(item),
        });
        setRedirectURL('/items');
    }
    useEffect(() => {
        async function getServerItem() {
            const responseFromServer = await fetch(`/api/items/${match.params.id}`);
            if (responseFromServer.ok) {
                const itemFromServer = await responseFromServer.json() as Item;
                setItem(itemFromServer)
            }
        }
        if (match.params?.id && match.params.id !== 'new') {
            getServerItem();
        }
        else if (match.params?.id) {
            setItem({ id: undefined, title: '', description: '' } as Item)
        }

    }, []);
    return redirectURL ? <Redirect to={redirectURL} /> :
        <PageTemplate innerElement={generateHTML(item)} />
}