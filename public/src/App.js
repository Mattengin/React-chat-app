
import React from 'react';
import ChatApp from './component/ChatApp';




class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { username: '' };

    // Bind 'this' to event handlers. React ES6 does not do this by default
    this.usernameChangeHandler = this.usernameChangeHandler.bind(this);
    this.usernameSubmitHandler = this.usernameSubmitHandler.bind(this);
  }

  usernameChangeHandler(event) {
    this.setState({ username: event.target.value + ' :' });
  }

  usernameSubmitHandler(event) {
    event.preventDefault();
    this.setState({ submitted: true, username: this.state.username });
  }

  render() {
    if (this.state.submitted) {
      // Form was submitted, now show the main App
      return (
        <ChatApp username={this.state.username} />
      );
    }

    // login form
    return (
      <form onSubmit={this.usernameSubmitHandler} className="username-container container">
        <h1>Who Art Thou?</h1>
        <div>
          <input
           class="form-control"
            type="text"
            onChange={this.usernameChangeHandler}
            placeholder="Enter a username..."
            required />
        </div>
        <input class="btn btn-outline-dark" type="submit" value="Submit" />
      </form>
    );
  }

}
App.defaultProps = {
};

export default App;