import React from "react";
import "./Footprint.css";

class Footprint extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      newItem: "",
      date: "",
      purchasePrice: "",
      sellingPrice: "",
      list: []
    };
  }

  updateInput(key, input) {
    this.setState({
      [key]: input
    });
  }

  addItem() {
    let newItem = {
      id: 1 + Math.random(),
      newItem: this.state.newItem,
      date: this.state.date,
      purchasePrice: this.state.purchasePrice,
      sellingPrice: this.state.sellingPrice
    };

    const list = [...this.state.list, newItem];

    // list.push(newItem);

    this.setState({
      list,
      newItem: "",
      date: "",
      purchasePrice: "",
      sellingPrice: ""
    });
  }

  deleteItem(id) {
    const list = [...this.state.list];

    const updatedList = list.filter(item => item.id !== id);

    this.setState({ list: updatedList });
  }

  render() {
    return (
      <main>
        <div className="polar-form">
          <h1>Footprint</h1>
          <label>
            name:
            <input
              type="text"
              placeholder="Item Name"
              value={this.state.newItem}
              onChange={e => this.updateInput("newItem", e.target.value)}
            />
          </label>
          <label>
            Date Purchased
            <input
              type="text"
              placeholder="Date Purchased"
              value={this.state.date}
              onChange={e => this.updateInput("date", e.target.value)}
            />
          </label>
          <label>
            Purchase Price
            <input
              type="text"
              placeholder="Purchase Price"
              value={this.state.purchasePrice}
              onChange={e => this.updateInput("purchasePrice", e.target.value)}
            />
          </label>
          <label>
            Selling Price
            <input
              type="text"
              placeholder="Selling Price"
              value={this.state.sellingPrice}
              onChange={e => this.updateInput("sellingPrice", e.target.value)}
            />
          </label>
          <button onClick={() => this.addItem()}>add</button>
        </div>
        <ul className="list-render">
          {this.state.list.map(item => (
            <li key={item.id}>
              <div className="master-items">
                <div className="list-items">
                  <p>Product Name</p>
                  {item.newItem}
                </div>
                <div className="list-items">
                  <p>Date Purchased</p>
                  {item.date}
                </div>
                <div className="list-items">
                  <p>Purchase Price</p>
                  {item.purchasePrice}
                </div>
                <div className="list-items">
                  <p>Selling Price</p>
                  {item.sellingPrice}
                </div>
                <button
                  className="delete-button"
                  onClick={() => this.deleteItem(item.id)}
                >
                  X
                </button>
              </div>
            </li>
          ))}
        </ul>
      </main>
    );
  }
}

export default Footprint;
