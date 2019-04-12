import React, { Component } from "react";

import logo from "../../assets/logo.svg";

import { Container, SubmitButton } from "./styles";

import api from "../../services/api";

export default class Main extends Component {
  state = {
    newBox: ""
  };

  handleSubmit = async e => {
    e.preventDefault();
    const response = await api.post("/boxes", { title: this.state.newBox });
    this.props.history.push(`/box/${response.data._id}`);
  };

  handleInputChange = e => {
    this.setState({ newBox: e.target.value });
  };

  render() {
    return (
      <Container>
        <form onSubmit={this.handleSubmit} action="">
          <img src={logo} alt="" />
          <input onChange={this.handleInputChange} placeholder="Criar um box" />
          <SubmitButton color="#111" type="submit">
            Criar
          </SubmitButton>
        </form>
      </Container>
    );
  }
}
