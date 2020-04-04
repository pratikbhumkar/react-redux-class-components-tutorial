import React from "react";
import "./App.css";

class App extends React.Component {
  state = {
    age: 21,
  };

  render() {
    const ageUp=()=>{
      this.setState({
        age:this.state.age+1
      })
    }
    const ageDown=()=>{
      this.setState({
        age:this.state.age-1
      })
    }
    return (
      <div className="App">
        <header className="App-header">
          <h2>Learning React-Redux class component way.</h2>
          <h4>Age: {this.state.age}</h4>
          <div>
            <button onClick={ageUp}>Increase Age</button>
            <button onClick={ageDown}>Decrease Age</button>
          </div>
        </header>
      </div>
    );
  }
}

export default App;
