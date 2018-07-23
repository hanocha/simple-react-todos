import React from 'react';
import { create } from '../api';

class TodoForm extends React.Component {
  state = {
    text: '',
    title: '',
  };

  handleChange = e => {
    this.setState({
      ...this.state,
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = () => {
    create(this.state).then(res => {
      window.history.go();
    });
  };

  render() {
    return (
      <div>
        <h3>Todo Form</h3>
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

export default TodoForm;
