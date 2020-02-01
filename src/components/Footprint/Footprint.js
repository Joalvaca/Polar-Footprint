import React from "react";

class Footprint extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      newItem: "",
      list: []
    };
  }

  updateInput(input) {
    this.setState({
      newItem: input
    });
  }

  addItem(input) {
    let listArray = this.state.list;

    listArray.push(input);

    this.setState({
      list: listArray,
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
              onChange={e => this.updateInput(e.target.value)}
            />
          </label>
          <button onClick={() => this.addItem(this.state.newItem)}>add</button>
        </form>
        <br />
        <br />
        <ul>
          {this.state.list.map(item => (
            <li>{item}</li>
          ))}
        </ul>
      </main>
    );
  }
}

export default Footprint;
