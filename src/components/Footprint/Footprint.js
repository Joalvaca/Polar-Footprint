import React from "react";
import "./Footprint.css";
import PolarBlock from "./polarblock.png";
import config from "../../config";
import FootPrintApiService from "../../services/polarprint-api-service";

class Footprint extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      product_name: "",
      date_purchased: "",
      purchase_price: "",
      sold_price: "",
      date_sold: "",
      list: [],
      editedItem: null
    };
  }

  // componentDidMount() {
  //   fetch(`${config.API_ENDPOINT}/footprints`)
  //     .then(response => response.json())
  //     .then(prints => {
  //       console.log(prints);
  //       this.setState({ list: prints });
  //     });
  // }

  componentDidMount() {
    FootPrintApiService.getAllPrints()
      .then(data => {
        this.setState({ list: data });
        console.log(data);
      })
      .catch(err => console.error(err));

    // FootPrintApiService.getPrint().then(data => {
    //   this.setState({ list: data });
    //   console.log(data);
    // });
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
      date_sold: this.state.date_sold,
      sold_price: this.state.sold_price
    };
    // Send a Post request to the backend/db

    FootPrintApiService.postPrints(newItem).then(data => console.log(data));
    // db should repond with a success response.
    const list = [...this.state.list, newItem];

    this.setState({
      list,
      product_name: "",
      date_purchased: "",
      purchase_price: "",
      date_sold: "",
      sold_price: ""
    });
  };

  deleteItem(id) {
    const list = [...this.state.list];

    FootPrintApiService.deletePrint(id).then(res => console.log(res));

    const updatedList = list.filter(item => item.id !== id);

    this.setState({ list: updatedList });
  }

  editItem = id => {
    let editedItem = this.state.list.find(item => item.id === id);
    let {
      product_name,
      date_purchased,
      date_sold,
      purchase_price,
      sold_price
    } = editedItem;
    this.setState({
      editedItem,
      product_name,
      date_purchased,
      date_sold,
      purchase_price,
      sold_price
    });
  };

  updateItem = e => {
    e.preventDefault();
    const id = this.state.editedItem.id;

    let editedItem = {
      id: this.state.editedItem.id,
      product_name: this.state.product_name,
      date_purchased: this.state.date_purchased,
      date_sold: this.state.date_sold,
      purchase_price: this.state.purchase_price,
      sold_price: this.state.sold_price
    };

    FootPrintApiService.updatePrint(editedItem);

    const list = this.state.list.map(item =>
      item.id === id ? editedItem : item
    );

    this.setState({
      list,
      product_name: "",
      date_purchased: "",
      date_sold: "",
      purchase_price: "",
      sold_price: "",
      editedItem: null
    });
  };

  renderEditForm() {
    return (
      <div className="polar-form">
        <form onSubmit={this.updateItem}>
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
              type="text"
              placeholder="Date Purchased (mm/dd/yyyy)"
              value={this.state.date_purchased}
              onChange={e => this.updateInput("date_purchased", e.target.value)}
            />
          </label>
          <label className="label-print">
            Date Sold:
            <input
              className="print-box"
              required
              type="text"
              placeholder="Date Sold (mm/dd/yyyy)"
              value={this.state.date_sold}
              onChange={e => this.updateInput("date_sold", e.target.value)}
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
              onChange={e => this.updateInput("purchase_price", e.target.value)}
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
              Update
            </button>
            <button
              className="button"
              type="button"
              onClick={() => this.setState({ editedItem: null })}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    );
  }

  render() {
    return (
      <main>
        <div className="polar-block-pic">
          <img className="polar-block" src={PolarBlock} alt="polarblock" />
        </div>
        {this.state.editedItem ? (
          this.renderEditForm()
        ) : (
          <div className="polar-form">
            <form onSubmit={this.addItem}>
              <label className="label-print">
                Product Name:
                <input
                  className="print-box"
                  required
                  type="text"
                  placeholder="Item Name"
                  value={this.state.product_name}
                  onChange={e =>
                    this.updateInput("product_name", e.target.value)
                  }
                />
              </label>
              <label className="label-print">
                Date Purchased:
                <input
                  className="print-box"
                  required
                  type="text"
                  placeholder="Date Purchased (mm/dd/yyyy)"
                  value={this.state.date_purchased}
                  onChange={e =>
                    this.updateInput("date_purchased", e.target.value)
                  }
                />
              </label>
              <label className="label-print">
                Date Sold:
                <input
                  className="print-box"
                  required
                  type="text"
                  placeholder="Date Sold (mm/dd/yyyy)"
                  value={this.state.date_sold}
                  onChange={e => this.updateInput("date_sold", e.target.value)}
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
        )}

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
                    <p>Date Sold</p>

                    {item.date_sold}
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
                      onClick={() => this.editItem(item.id)}
                    >
                      Edit
                    </button>
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
