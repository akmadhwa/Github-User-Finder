import React from "react";
import Input from "../Components/Input";
import Submit from "../Components/Submit";

class Form extends React.Component {
  render() {
    return (
      <form onSubmit={this.props.getUser}>
        <Input />
        <Submit />
      </form>
    );
  }
}

export default Form;
