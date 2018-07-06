import * as React from 'react';
import { Link } from 'react-router-dom';
import { post } from '../api';
import { TodoForm } from '../components/TodoForm';

export class CreateTodo extends React.Component<any, any, any> {
  public state = {
    text: '',
    title: '',
  };

  public constructor(props: any) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  public handleChange(e: any) {
    this.setState({
      ...this.state,
      [e.target.name]: e.target.value,
    });
  }

  public handleSubmit(e: any) {
    post(this.state).then(res => {
      this.props.history.push('/');
    });
    e.preventDefault();
  }

  public render() {
    return (
      <div>
        <h1>Create todo</h1>
        <TodoForm
          {...{
            handleChange: this.handleChange,
            handleSubmit: this.handleSubmit,
            values: {
              text: this.state.text,
              title: this.state.title,
            },
          }}
        />
        <Link to="/">Back to top</Link>
      </div>
    );
  }
}
