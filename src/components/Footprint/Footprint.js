import React from "react";

class Footprint extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productName: "",
      productPrice: "",
      productSold: "",
      List: []
    };

    this.handleChange = this.handleChange.bind(this);
    this.addItem = this.addItem.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  }

  addItem(event) {
    alert("submit");
    event.preventDefault();
  }

  render() {
    return (
      <main>
        <h1>Footprint</h1>
        <form>
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
          <button>add</button>
        </form>
      </main>
    );
  }
}

export default Footprint;
