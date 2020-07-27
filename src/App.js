import React, { Component } from 'react'
import Card from "./components/Card"
import "./App.css"
import AddCard from "./components/AddCard"
export class App extends Component {
 
  state={
    items:[],
    tot_ex:parseInt(0,10),
    tot_in:parseInt(0,10)
  }
  //additem comes from AddCard.js on submition of a specific card with id
  addCard=(additem)=>{
    additem.id=Math.random();
    let items=[...this.state.items,additem] 
    this.state.tot_in+=parseInt(additem.price_in,10);
    this.state.tot_ex+=parseInt(additem.price_ex,10);
    this.setState({
        items:items,
        tot_ex:this.state.tot_ex,
        tot_in:this.state.tot_in
    })
}
  render() {
    return (
      <div className="todo-app container">
        
        <h1 className="center black-text">Expense Tracker</h1>
        <h5 style={{color:"red"}}>Total Expenses={this.state.tot_ex}</h5>
        <br/>
        <h5 style={{color:"green"}}>Total Savings={this.state.tot_in} </h5>
        <br/>
        <h5 style={{color:"black"}}>In total={this.state.tot_in-this.state.tot_ex}</h5>
        <AddCard addCard={this.addCard}/>
        <Card items={this.state.items}/>
        
      </div>
    )
  }
}

export default App
