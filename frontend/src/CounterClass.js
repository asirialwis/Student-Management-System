import React from 'react';
class CounterClass extends React.Component{
    constructor(){
        super();
        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);
        this.state = {
            count :0
        }
        
    }

    increment(){
        this.setState({
            count : this.state.count + 1
        })
    
    }
    decrement(){

        if(this.state.count <= 0){
            alert("count cannot be less than 0")
            return
        }

        this.setState({
            count : this.state.count - 1
        })
    
    }

    render(){
        return(
            <div>
                <h1>Counter :{this.state.count}</h1>
                <button onClick={this.increment}>Increment</button>
                <button onClick={this.decrement}>Decrement</button>
            </div>
        )
    }

}
export default CounterClass;