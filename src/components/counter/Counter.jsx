import "./Counter.css"
import Display from "./Display";
import Buttons from "./Buttons";
import {Component} from 'react';
import FormPass from "./FormPass";

class Counter extends Component {

    state = {
        number: this.props.inicialNumber || 0,
        pass: this.props.inicialPass || 5,
    };

    // Forma #1 para definir o this para a func de incremento
    constructor(props) {
        super(props);

        this.increment = this.increment.bind(this);
    }

    // Posso criar com uma função arrow
    increment = () => {
        this.setState({
            number: this.state.number + 1
        })
    }

    decrement = () => {
        this.setState({
            number: this.state.number - 1
        })
    }

    incrementWithPass = () => {
        this.setState({
            number: this.state.number + this.state.pass
        })
    }

    decrementWithPass = () => {
        this.setState({
            number: this.state.number - this.state.pass
        })
    }
    passIncrement = () => {
        this.setState({
            pass: this.state.pass + 5
        })
    }

    passDecrement = () => {
        this.setState({
            pass: this.state.pass - 5
        })
    }

    setPass = (event) => {
        this.setState({
            pass: +event.target.value
        })
    }

    // Também posso apenas fazer a arrow funtion com "evento" no onClick ={e => this.increment()}
    render() {
        return (
            <div className="Counter">
                <h2>Contador</h2>
                <Display number={this.state.number}/>
                <p>Valor inicial: {this.state.number}</p>
                <label htmlFor="passInput">
                    Defina o passo:
                    <input id="passInput" type="number" value={this.state.pass} onChange={this.setPass}/>
                </label>
                <p>Valor inicial do passe: {this.state.pass}</p>
                <Buttons incrementing={this.increment} decrementing={this.decrement}/>
                <FormPass incrementingWithPass={this.incrementWithPass} decrementingWithPass={this.decrementWithPass}
                          passing={this.state.pass}
                          passIncrementing={this.passIncrement}
                          passDecrementing={this.passDecrement}
                />
            </div>
        )
    }
}

export default Counter;