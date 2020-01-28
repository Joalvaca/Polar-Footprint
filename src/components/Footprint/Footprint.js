import React from "react";

class Footprint extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      productName: "",
      productPrice: "",
      productSold: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    alert("submit");
    event.preventDefault();
  }

  render() {
    return (
      <main>
        <h1>Footprint</h1>
        <form onSubmit={this.handleSubmit}>
          <label>
            name:
            <input
              type="text"
              name="productName"
              placeholder="yeezy"
              value={this.state.productName}
              onChange={this.handleChange}
            />
          </label>
          <label>
            price:
            <input
              type="text"
              name="productPrice"
              placeholder="yeezy"
              value={this.state.productPrice}
              onChange={this.handleChange}
            />
          </label>
          <label>
            Pricesold:
            <input
              type="text"
              name="productSold"
              placeholder="yeezy"
              value={this.state.productSold}
              onChange={this.handleChange}
            />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </main>
    );
  }
}

export default Footprint;
