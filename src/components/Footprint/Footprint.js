import React from "react";
import "./Footprint.css";
import PolarBlock from "./polarblock.png";

class Footprint extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      product_name: "",
      date_purchased: "",
      purchase_price: "",
      sold_price: "",
      list: []
    };
  }

  componentDidMount() {
    fetch(`{config.API_ENDPOINT}/footprints`)
      .then(response => response.json())
      .then(prints => {
        console.log(prints);
        this.setState({ list: prints });
      });
  }

  updateInput(key, input) {
    this.setState({
      [key]: input
    });
  }

  addItem = e => {
    e.preventDefault();

    let newItem = {
      product_name: this.state.product_name,
      date_purchased: this.state.date_purchased,
      purchase_price: this.state.purchase_price,
      sold_price: this.state.sold_price
    };

    const list = [...this.state.list, newItem];

    this.setState({
      list,
      product_name: "",
      date_purchased: "",
      purchase_price: "",
      sold_price: ""
    });
  };

  deleteItem(id) {
    const list = [...this.state.list];

    const updatedList = list.filter(item => item.id !== id);

    this.setState({ list: updatedList });
  }

  render() {
    return (
      <main>
        <div className="polar-block-pic">
          <img className="polar-block" src={PolarBlock} alt="polarblock" />
        </div>
        <div className="polar-form">
          <form onSubmit={this.addItem}>
            <label className="label-print">
              Name:
              <input
                className="print-box"
                required
                type="text"
                placeholder="Item Name"
                value={this.state.product_name}
                onChange={e => this.updateInput("product_name", e.target.value)}
              />
            </label>
            <label className="label-print">
              Date Purchased:
              <input
                className="print-box"
                required
                type="date"
                placeholder="Date Purchased"
                value={this.state.date_purchased}
                onChange={e =>
                  this.updateInput("date_purchased", e.target.value)
                }
              />
            </label>
            <label className="label-print">
              Purchase Price:
              <input
                className="print-box"
                required
                type="number"
                placeholder="Purchase Price"
                value={this.state.purchase_price}
                onChange={e =>
                  this.updateInput("purchase_price", e.target.value)
                }
              />
            </label>
            <label className="label-print">
              Selling Price:
              <input
                className="print-box"
                required
                type="number"
                placeholder="Sold Price"
                value={this.state.sold_price}
                onChange={e => this.updateInput("sold_price", e.target.value)}
              />
            </label>
            <div className="polar-add">
              <button className="button" type="submit">
                add
              </button>
            </div>
          </form>
        </div>
        <ul className="list-render">
          {this.state.list.map(item => (
            <li key={item.id}>
              <div className="master-list">
                <div className="master-items">
                  <div className="list-items">
                    <p>Product Name</p>

                    {item.product_name}
                  </div>
                  <div className="list-items">
                    <p>Date Purchased</p>

                    {item.date_purchased}
                  </div>
                  <div className="list-items">
                    <p>Purchase Price</p>${item.purchase_price}
                  </div>
                  <div className="list-items">
                    <p>Selling Price</p>${item.sold_price}
                  </div>
                  <div className="delete-button">
                    <button
                      className="button"
                      onClick={() => this.deleteItem(item.id)}
                    >
                      X
                    </button>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </main>
    );
  }
}

export default Footprint;
