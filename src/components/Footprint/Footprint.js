import React from "react";

class Footprint extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      newItem: "",
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
      value: this.state.newItem.slice()
    };

    const list = [...this.state.list];

    list.push(newItem);

    this.setState({
      list,
      newItem: ""
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
        <h1>Footprint</h1>
        <label>
          name:
          <input
            type="text"
            placeholder="yeezy"
            value={this.state.newItem}
            onChange={e => this.updateInput("newItem", e.target.value)}
          />
        </label>
        <button onClick={() => this.addItem(this.state.newItem)}>add</button>
        <ul>
          {this.state.list.map(item => (
            <li key={item.id}>
              {item.value}
              <button onClick={() => this.deleteItem(item.id)}>X</button>
            </li>
          ))}
        </ul>
      </main>
    );
  }
}

export default Footprint;
