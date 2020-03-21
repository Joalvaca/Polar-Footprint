import React from "react";
import "./Footprint.css";
import PolarBlock from "../../images/polarblock.png";
import FootPrintApiService from "../../services/polarprint-api-service";
import FootprintForm from "../FootprintForm/FootprintForm";
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

  componentDidMount() {
    FootPrintApiService.getAllPrints()
      .then(data => {
        this.setState({ list: data });
      })
      .catch(err => console.error(err));
  }

  updateInput = (key, input) => {
    this.setState({
      [key]: input
    });
  };

  addItem = e => {
    e.preventDefault();

    let newItem = {
      product_name: this.state.product_name,
      date_purchased: this.state.date_purchased,
      purchase_price: this.state.purchase_price,
      date_sold: this.state.date_sold,
      sold_price: this.state.sold_price
    };

    FootPrintApiService.postPrints(newItem).then(data => {
      const list = [...this.state.list, data];
      console.log(data);
      this.setState({
        list,
        product_name: "",
        date_purchased: "",
        purchase_price: "",
        date_sold: "",
        sold_price: ""
      });
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

    FootPrintApiService.updatePrint(editedItem).then(data => console.log(data));

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

  setEditedItem = isEdited => {
    this.setState({
      product_name: "",
      date_purchased: "",
      date_sold: "",
      purchase_price: "",
      sold_price: "",
      editedItem: null
    });
  };

  render() {
    return (
      <main>
        <div className="polar-block-pic">
          <img className="polar-block" src={PolarBlock} alt="polarblock" />
        </div>
        {this.state.editedItem ? (
          <FootprintForm
            formSubmit={this.updateItem}
            updateInput={this.updateInput}
            setEditedItem={this.setEditedItem}
            type="Update"
            {...this.state}
          />
        ) : (
          <FootprintForm
            formSubmit={this.addItem}
            updateInput={this.updateInput}
            setEditedItem={this.setEditedItem}
            type="Add"
            {...this.state}
          />
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
                    <p>Date of Sale</p>

                    {item.date_sold}
                  </div>
                  <div className="list-items">
                    <p>Purchase Price</p>${item.purchase_price}
                  </div>
                  <div className="list-items">
                    <p>Selling Price</p>${item.sold_price}
                  </div>
                  <div className="delete-section">
                    <button
                      className="edit-button"
                      onClick={() => this.editItem(item.id)}
                    >
                      Edit
                    </button>
                    <button
                      className="delete-button"
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
