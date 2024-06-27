import { Component } from "react";
const INITIAL_STATE = {
  login: "",
  password: "",
  email: "",
};
class SignUpForm extends Component {
  state = { ...INITIAL_STATE };
  handleChange = (evt) => {
    evt.preventDefault();
    const { name, value } = evt.target;
    this.setState({ [name]: value });
  };
  handleSubmit = (evt) => {
    evt.preventDefault();
    const { login, email, password } = this.state;
    console.log(`Login: ${login}, Email: ${email}, Password: ${password}`);
    this.props.onSubmit({ ...this.state });
    this.reset();
  };

  reset = () => {
    this.setState({ ...INITIAL_STATE });
  };
  render() {
    const { login, password, email } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          name
          <input
            type="text"
            name="login"
            placeholder="enter login"
            value={login}
            onChange={this.handleChange}
          ></input>
        </label>
        <label>
          password
          <input
            type="password"
            name="password"
            placeholder="enter password"
            value={password}
            onChange={this.handleChange}
          ></input>
        </label>

        <label>
          email
          <input
            type="email"
            name="email"
            placeholder="enter email"
            value={email}
            onChange={this.handleChange}
          ></input>
        </label>
        <button type="submit">Sign up as {login}</button>
      </form>
    );
  }
}

export default SignUpForm;
