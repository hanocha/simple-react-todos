import React from 'react';
import { show, update } from '../api';
import { TodoForm } from '../components/TodoForm';

export class EditTodo extends React.Component {
  state = {
    text: '',
    title: '',
  };

  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    show().then(res => {
      this.setState({
        text: res.data.text,
        title: res.data.title,
      });
    });
  }

  handleChange(e) {
    this.setState({
      ...this.state,
      [e.target.name]: e.target.value,
    });
  }

  handleSubmit(e) {
    const todoId = this.props.match.params.id;
    const requestBody = this.state;
    update(todoId, requestBody).then(res => {
      this.props.history.push('/');
    });
    e.preventDefault();
  }

  render() {
    return (
      <div>
        <h1>Edit todo</h1>
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
