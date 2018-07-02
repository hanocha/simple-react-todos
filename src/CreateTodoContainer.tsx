import axios from 'axios';
import * as React from 'react';
import { CreateTodoPage } from './CreateTodoPage';

export class CreateTodoContainer extends React.Component<any, any, any> {
  public state = {
    text: '',
    title: '',
  };

  public constructor(props: any) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  };

  public handleChange(e: any) {
    this.setState({
      ...this.state,
      [e.target.name]: e.target.value,
    });
  };

  public handleSubmit(e: any) {
    console.log(this.state);
    axios.post(
      "/todos",
      this.state,
      {
        baseURL: "https://virtserver.swaggerhub.com/kielze/TODO-API/1.0.0",
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
      },
    ).then(res => {
      console.log(res);
      this.props.history.push('/');
    });
    e.preventDefault();
  };

  public render() {
    return (
      <CreateTodoPage
        values={this.state}
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
      />
    );
  };
};
