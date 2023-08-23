import React from "react";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      item: "",
    };
  }
  handleChange = (event) => {
    this.setState({
      item: event.target.value,
    });
    console.log(this.state.item);
  };

  handleAddItem = () => {
    let inputValue = document.getElementById("input").value;
    console.log(inputValue);
    if (!this.state.list.includes(inputValue)) {
      this.setState({
        item: "",
        list: [...this.state.list, inputValue],
      });
      console.log(this.state.list);
    }
  };
  render() {
    console.log(this.state);
    return (
      <div>
        <h1>Todo List</h1>
        <input
          id="input"
          type="text"
          onChange={this.handleChange.bind(this)}
          name="item"
        />
        <button onClick={this.handleAddItem.bind(this)}>Add</button>
        <ul>
          {this.state.list.map((data, key) => (
            <li key={key}>{data}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
