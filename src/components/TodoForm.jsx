import React from 'react';
import { create } from '../api';
import { TodoForm } from '../components/TodoForm';

class TodoList extends React.Component {
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
        <form onSubmit={e => this.handleSubmit(e)}>
          <div>
            <label>title:</label>
            <input
              type="text"
              name="title"
              onChange={e => this.handleChange(e)}
              value={this.state.title}
            />
          </div>
          <div>
            <label>text:</label>
            <input
              type="text"
              name="text"
              onChange={e => this.handleChange(e)}
              value={this.state.text}
            />
          </div>
          <div>
            <input type="submit" value="submit" />
          </div>
        </form>
      </div>
    );
  }
}

export default TodoList;
