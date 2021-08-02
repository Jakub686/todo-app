import React, {Component} from 'react'
import PropTypes from 'prop-types'
import'./Counter.css'

class Counter extends Component{
    constructor(){
        super();
        this.state = {
            counter: 0,
        }
        this.incmrenet = this.incmrenet.bind(this)
        this.decmrenet = this.decmrenet.bind(this)
        this.reset = this.reset.bind(this)
    }


    render() {
        return (
          <div className="Counter">
            <CounterButton by={1} incmrenetMethod={this.incmrenet} decmrenetMethod={this.decmrenet}/>
            <CounterButton by={5} incmrenetMethod={this.incmrenet} decmrenetMethod={this.decmrenet}/>
            <CounterButton by={10} incmrenetMethod={this.incmrenet} decmrenetMethod={this.decmrenet}/>
            <CounterButton by={25} incmrenetMethod={this.incmrenet} decmrenetMethod={this.decmrenet}/>
            <span className="count">{this.state.counter}</span>
            <div><button className="reset" onClick={this.reset}>Reset</button></div>
          </div>
        );
    }

    reset() {
        this.setState( {counter: 0}) 
    }

    incmrenet(by) {
        //console.log(`increment from parent - ${by}`)
        this.setState(
            (prevState) => {
             return {counter: prevState.counter + by}
            }
        ) 
    }

    decmrenet(by) {
        //console.log(`increment from parent - ${by}`)
        this.setState(
            (prevState) => {
             return {counter: prevState.counter - by}
            }
        ) 
    }
}

class CounterButton extends Component {

    constructor(){
        super();
        this.state = {
            counter: 0,
        }
        this.incmrenet = this.incmrenet.bind(this)
        this.decmrenet = this.decmrenet.bind(this)
    }



    render() {
        //const style = {fontSize: "50px", padding: "15px 30px"};
        return(
            <div className="counter">
            <button onClick={this.incmrenet} >+{this.props.by}</button>
            <button onClick={this.decmrenet} >-{this.props.by}</button>
            {/* <span className="count">{this.state.counter}</span> */}
            
            
            </div>
        )
    }
    incmrenet() {
        //console.log('incemetent');
        //this.state.counter++
        this.setState(
            (prevState) => {
            return {counter: this.state.counter + this.props.by}
            } 
        ) 
        this.props.incmrenetMethod(this.props.by)
    }

    decmrenet() {
        //console.log('incemetent');
        //this.state.counter++
        this.setState(
            (prevState) => {
            return {counter: this.state.counter - this.props.by}
            } 
        ) 
        this.props.decmrenetMethod(this.props.by)
    }
}

CounterButton.defaultProps = {
    by:1
}

CounterButton.propTypes = {
    by: PropTypes.number
}

export default Counter