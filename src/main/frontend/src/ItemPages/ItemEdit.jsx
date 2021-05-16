import { Component } from "react";
import { Button, Form } from "react-bootstrap";
import PageTemplate from "../fragments/PageTemplate";

export default class ItemEdit extends Component {
      
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        const emptyItem = { id: undefined, title: '', description: '' }; 
        this.state = {item: emptyItem, innerElement: this.generateHTML(emptyItem)};
        
    }
    async componentDidMount() {
        if (this.props.match.params.id !== 'new') {
            const item = await (await fetch(`/api/items/${this.props.match.params.id}`)).json();
            this.setState({ item: item, innerElement: this.generateHTML(item) });
        }
    }

    handleChange(event) {
        const name = event.target.name;
        const value = event.target.value;
        console.log(this)
        let item = { ...this.state.item };
        item[name] = value;
        this.setState({ innerElement: this.generateHTML(item), item });
    }
    async handleSubmit(event) {
        event.preventDefault();
        const item = this.state.item;
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
        this.props.history.push('/items');
    }
    generateHTML(item) {
        return <Form onSubmit={this.handleSubmit}>
            <Form.Group>
                <Form.Label>Title of ID {item.id}</Form.Label>
                <Form.Control name="title" onChange={this.handleChange} placeholder="Enter title" />
                <Form.Text >
                    {item.title}
                </Form.Text>
            </Form.Group>
            <Form.Group>
                <Form.Label>Description</Form.Label>
                <Form.Control name="description" onChange={this.handleChange} placeholder="Enter description" />
                <Form.Text>
                    {item.description}
                </Form.Text>
            </Form.Group>
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    }
    render() {
        return (
            <PageTemplate innerElement={this.state.innerElement} />
        );
    }
}