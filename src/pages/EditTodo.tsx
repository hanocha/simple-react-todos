import * as React from 'react';
import { Link } from 'react-router-dom';
import { get, put } from '../api';
import { TodoForm } from '../components/TodoForm';

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
    get().then(res => {
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
    const todoId = this.props.match.params.id;
    const requestBody = this.state;
    put(todoId, requestBody).then(res => {
      this.props.history.push('/');
    });
    e.preventDefault();
  }

  public render() {
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
        <Link to="/">Back to top</Link>
      </div>
    );
  }
}
