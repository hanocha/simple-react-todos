import axios from 'axios';
import * as React from 'react';
import { EditTodoPage } from '../EditTodoPage';

export class EditTodo extends React.Component<any, any, any> {
  public state = {
    text: '',
    title: '',
  };

  public constructor(props: any) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  public componentDidMount() {
    console.log(this.props);
    axios
      .get(`/todos/${this.props.match.params.id}`, {
        baseURL: 'https://virtserver.swaggerhub.com/kielze/TODO-API/1.0.0',
        headers: {
          Accept: 'application/json',
        },
      })
      .then(res => {
        console.log(res);
        this.setState({
          text: res.data.text,
          title: res.data.title,
        });
      });
  }

  public handleChange(e: any) {
    this.setState({
      ...this.state,
      [e.target.name]: e.target.value,
    });
  }

  public handleSubmit(e: any) {
    console.log(this.state);
    console.log(this.props);
    axios
      .put(`/todos/${this.props.match.params.id}`, this.state, {
        baseURL: 'https://virtserver.swaggerhub.com/kielze/TODO-API/1.0.0',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      })
      .then(res => {
        console.log(res);
        this.props.history.push('/');
      });
    e.preventDefault();
  }

  public render() {
    return (
      <EditTodoPage
        values={this.state}
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
      />
    );
  }
}
