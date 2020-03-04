import React from "react";

export default class FootprintForm extends React.Component {
  render() {
    return (
      <div>
        <form className="polar-form" onSubmit={this.props.formSubmit}>
          <div>
            <label className="label-print">
              Name:
              <input
                className="print-box"
                required
                type="text"
                placeholder="Item Name"
                value={this.props.product_name}
                onChange={e =>
                  this.props.updateInput("product_name", e.target.value)
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
                value={this.props.date_purchased}
                onChange={e =>
                  this.props.updateInput("date_purchased", e.target.value)
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
                value={this.props.date_sold}
                onChange={e =>
                  this.props.updateInput("date_sold", e.target.value)
                }
              />
            </label>
          </div>
          <div className="purchase-section">
            <label className="label-print">
              Purchase Price:
              <input
                className="print-box"
                required
                type="number"
                placeholder="Purchase Price"
                value={this.props.purchase_price}
                onChange={e =>
                  this.props.updateInput("purchase_price", e.target.value)
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
                value={this.props.sold_price}
                onChange={e =>
                  this.props.updateInput("sold_price", e.target.value)
                }
              />
            </label>
          </div>
          <div className="polar-add">
            <button className="add-button" type="submit">
              {this.props.type}
            </button>
            {this.props.type === "Update" ? (
              <button
                className="add-button"
                type="button"
                onClick={() => this.props.setEditedItem(null)}
              >
                Cancel
              </button>
            ) : (
              ""
            )}
          </div>
        </form>
      </div>
    );
  }
}
