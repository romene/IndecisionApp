import React from 'react'
import ReactDOM from 'react-dom'
import AddOption from "./components/AddOption.js";


class IndecisionApp extends React.Component {
  constructor(props) {
    super(props);
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    this.handlePick = this.handlePick.bind(this);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.handleDeleteOption = this.handleDeleteOption.bind(this);
    this.state = {
      options: []
    };
  }

  componentDidMount() {
    try {
      const json = localStorage.getItem("options");
      const options = JSON.parse(json);

      if (options) {
        this.setState(() => ({ options }));
      }
    } catch (e) {
      // Do nothing at all
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.options.length !== this.state.options.length) {
      const json = JSON.stringify(this.state.options);
      localStorage.setItem("options", json);
    }
  }

  componentWillInmount() {
    console.log("componentWillInmount");
  }

  // mehtod to delete array OPTIONS by setting up a new state
  handleDeleteOptions() {
    this.setState(() => ({ options: [] }));
  }

  handleDeleteOption(optionToRemove) {
    this.setState(prevState => ({
      options: prevState.options.filter(option => optionToRemove !== option)
    }));
  }

  //method to pick a item from array OPTIONS

  handlePick() {
    const randomNum = Math.floor(Math.random() * this.state.options.length);
    const option = this.state.options[randomNum];
    alert(option);
  }

  //method to insert a new item into array Options

  handleAddOption(option) {
    if (!option) {
      return "Enter valid value to add item";
    } else if (this.state.options.indexOf(option) > -1) {
      return " This option already exists";
    }

    this.setState(prevState => ({
      options: prevState.options.concat(option)
    }));
  }

  render() {
    const subtitle = "Put your life in the hands of a computer";
    return (
      <div>
        <Header />
        <Action
          hasOptions={this.state.options.length > 0}
          handlePick={this.handlePick}
        />
        <Options
          options={this.state.options} //
          handleDeleteOptions={this.handleDeleteOptions} // set up handleDeleteOptions para chamar o method handleDeleteOptions
          handleDeleteOption={this.handleDeleteOption}
        />
        <AddOption handleAddOption={this.handleAddOption} />
      </div>
    );
  }
}




const Header = (props) => {
  return <div>
      <h1>{props.title}</h1>
      {props.subtitle && <h2>{props.subtitle}</h2>}
    </div>; 
}

Header.defaultProps =  {
  title: 'Indecision App!'
}

const Action = (props) => {
    return (
      <div>
        <button onClick={props.handlePick} 
        disabled={!props.hasOptions}>
          What Should I do?
          </button>
      </div>
    )
}

const Options = (props) => {
  return (
    <div>
      <button onClick={props.handleDeleteOptions}>Remove All</button>
      {
        props.options.map((option) => (
          <Option
           key={option} 
           optionText={option}
           handleDeleteOption={props.handleDeleteOption}
            />
            )
          )}
    </div>
  )
}

const Option = (props) => {
  return (
    <div>
      {props.optionText}
      <button 
        onClick={(e) => { 
          props.handleDeleteOption(props.optionText)
           }}
      >
      Remove</button>
    </div>
  )
}





ReactDOM.render(<IndecisionApp />, document.getElementById('app'))

