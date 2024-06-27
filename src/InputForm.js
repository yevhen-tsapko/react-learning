import { Component } from "react";
const INITIAL_STATE = {
  login: "",
  password: "",
  email: "",
  agreed: false,
  gender: null,
  age: "",
};
const Gender = {
  MALE: "male",
  FEMALE: "female",
};
class SignUpForm extends Component {
  state = { ...INITIAL_STATE };
  handleChange = (evt) => {
    evt.preventDefault();
    console.log("evt.target:", evt.target);
    const { name, value, type, checked } = evt.target;
    this.setState({
      [name]: type === "checkbox" ? checked : value,
    });
    console.log("name, checked", name, checked, value);
  };
  handleSubmit = (evt) => {
    evt.preventDefault();
    this.props.onSubmit({ ...this.state });
    this.reset();
  };

  reset = () => {
    this.setState({ ...INITIAL_STATE });
  };
  render() {
    const { login, password, email, agreed, gender, age } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <section>
          <h2>Choose your gender</h2>
          <label>
            Male
            <input
              type="radio"
              checked={gender === Gender.MALE}
              name="gender"
              value={Gender.MALE}
              onChange={this.handleChange}
            />
          </label>
          <label>
            Female
            <input
              type="radio"
              checked={gender === Gender.FEMALE}
              name="gender"
              value={Gender.FEMALE}
              onChange={this.handleChange}
            />
          </label>
        </section>
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

        <label>
          Choose your age
          <select name="age" value={age} onChange={this.handleChange}>
            <option value="" disabled>
              ...
            </option>
            <option value="18-25">18-25</option>
            <option value="26-35">26-35</option>
            <option value="36+">36+</option>
          </select>
        </label>
        <label>
          agree to terms
          <input
            type="checkbox"
            name="agreed"
            checked={agreed}
            onChange={this.handleChange}
          ></input>
        </label>
        <button type="submit" disabled={!agreed}>
          Sign up as {login}
        </button>
      </form>
    );
  }
}

export default SignUpForm;
