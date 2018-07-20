import React from 'react';
import { create } from '../api';
import { TodoForm } from '../components/TodoForm';

export class CreateTodo extends React.Component {
  state = {
    text: '',
    title: '',
  };

  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({
      ...this.state,
      [e.target.name]: e.target.value,
    });
  }

  handleSubmit(e) {
    create(this.state).then(res => {
      this.props.history.push('/');
    });
    e.preventDefault();
  }

  render() {
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
      </div>
    );
  }
}
