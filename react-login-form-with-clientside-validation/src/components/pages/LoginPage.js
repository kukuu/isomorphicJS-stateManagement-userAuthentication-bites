import React from "react";

import LoginForm from "../forms/LoginForm";


class LoginPage extends React.Component {
  submit = data => {
    console.log(data);
    //Will dispatch thunk action
    //Make asynchronous request
    //get data back
    //update reducers in REDUX store
    //then re-direct i.e dashboard. see below
    //will need to setup a nodejs application on the backend
    //will be FUN :)

    // this.props.login(data).then(() => this.props.history.push("/dashboard"));
  }

  render() {
    return (
      <div>
        <h1>Login page</h1>

        <LoginForm submit={this.submit} />

      </div>
    );
  }
}


export default LoginPage;
