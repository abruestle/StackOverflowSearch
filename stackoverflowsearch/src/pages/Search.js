import React, { Component } from "react";
import API from "../utils/API";
import Container from "../components/Container";
import SearchForm from "../components/SearchForm";
import SearchResults from "../components/SearchResults";
import Alert from "../components/Alert";

class Search extends Component {
  state = {
    search: "",
    results: [],
    error: ""
  };

  componentDidMount() {
  }

  handleInputChange = event => {
    this.setState({ search: event.target.value });
  };

  handleFormSubmit = event => {
    event.preventDefault();

    API.getQuestions(this.state.search)
      .then(res => {
        console.log(JSON.stringify(res.data.items, null, 2));
        if (res.data.status === "error") {
          throw new Error(res.data.items);
        }
        this.setState({ results: res.data.items, error: "" });
      })
      .catch(err => this.setState({ error: err.message }));
  };
  render() {
    return (
      <Container style={{ minHeight: "80%" }}>
        <h1 className="text-center">Search for a question!</h1>
        <Alert
          type="danger"
          style={{ opacity: this.state.error ? 1 : 0, marginBottom: 10 }}
        >
          {this.state.error}
        </Alert>
        <SearchForm
          handleFormSubmit={this.handleFormSubmit}
          handleInputChange={this.handleInputChange}
          searchterms={this.state.searchterms}
        />
        <SearchResults results={this.state.results} />
      </Container>
    );
  }
}

export default Search;
