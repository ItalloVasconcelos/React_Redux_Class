// eslint-disable-next-line import/no-anonymous-default-export
import {useState} from "react";
import "./Input.css"

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
    const [inputValue, setInputValue] = useState('Inicial');

    function whenChange(event) {
        event.preventDefault()
        setInputValue(event.target.value);
    }

    return (
        <div className="Input">
            <h2>{inputValue}</h2>
            <div style={{
                display: "flex",
                flexDirection: "column",
            }}>
                Componente controlado
                <input value={inputValue} onChange={whenChange}/>
                Componente somente leitura
                <input value={inputValue} readOnly />
                Componente não controlado
                <input value={undefined}/>
            </div>
        </div>
    )
};