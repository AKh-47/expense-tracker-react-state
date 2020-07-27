import React, { Component } from 'react'

export class AddCard extends Component {
    state={
        content_ex:'',
        price_ex:0,
        content_in:'',
        price_in:0
    }
    handleContent=(e)=>{
        this.setState({
            content_ex:e.target.value
        })
    }
    handlePrice=(e)=>{
        this.setState({
            price_ex:e.target.value
        })
    }
    handleIContent=(e)=>{
        this.setState({
            content_in:e.target.value
        })
    }
    handleIPrice=(e)=>{
        this.setState({
            price_in:e.target.value
        })
    }
    handleSubmit=(e)=>{
        e.preventDefault();
        this.props.addCard(this.state);
        this.setState({
            content_ex:"",
            price_ex:0,
            content_in:"",
            price_in:0
        })
    }

 
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>Add new expenditure</label>
                    <input type="text" onChange={this.handleContent} value={this.state.content_ex} ></input>
                    <label>Enter amount</label>
                    <input type="text" onChange={this.handlePrice} value={this.state.price_ex}></input>
                    <label>Add new earning</label>
                    <input type="text" onChange={this.handleIContent} value={this.state.content_in} ></input>
                    <label>Enter amount</label>
                    <input type="text" onChange={this.handleIPrice} value={this.state.price_in}></input>
                    <button><h6>Submit</h6></button>
                </form>
            </div>
        )
    }
}

export default AddCard
