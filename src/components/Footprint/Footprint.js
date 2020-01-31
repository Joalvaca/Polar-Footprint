import React from "react";

class Footprint extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newItem: "",
      list: []
    };
  }

  updateInput(key, value) {
    this.setState({
      [key]: value
    });
  }

  deleteItem(id) {
    const list = [...this.state.list];

    const updatedList = list.filter(item => item.id !== id);

    this.setState({ list: updatedList });
  }

  addItem() {
    const newItem = {
      id: 2 + Math.random(),
      value: this.state.newItem.slice()
    };

    const list = [...this.state.list];

    list.push(newItem);

    this.setState({
      list,
      newItem: ""
    });
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
              placeholder="yeezy"
              value={this.state.newItem}
              onChange={e => this.updateInput("newItem", e.target.value)}
            />
          </label>
          <button onClick={() => this.addItem()}>add</button>
        </form>
        <br />
        <br />
        <ul>
          {this.state.list.map(item => {
            return (
              <li key={item.id}>
                {item.value}
                <button onClick={() => this.deleteItem(item.id)}>x</button>
              </li>
            );
          })}
        </ul>
      </main>
    );
  }
}

export default Footprint;
