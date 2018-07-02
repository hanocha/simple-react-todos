import * as React from 'react';

export class CreateTodoPage extends React.Component<any, any, any> {
  public state = {}

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
    console.log(this.state);
    e.preventDefault();
  }

  public render() {
    return (
      <div>
        <h1>Create todo</h1>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>title:</label>
            <input type="text" name="title" onChange={this.handleChange} />
          </div>
          <div>
            <label>text:</label>
            <input type="text" name="text" onChange={this.handleChange} />
          </div>
          <div>
            <input type="submit" value="create" />
          </div>
        </form>
      </div>
    );
  }
};
