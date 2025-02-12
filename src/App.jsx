import React from "react";

import First from "./components/basics/First";
import WithParameters from "./components/basics/WithParameters";
import Fragment from "./components/basics/Fragment";
import Random from "./components/basics/Random";
import RandomOfClass from "./components/basics/RandomOfClass";

export default function App() {
    return (
        <div id="app">
            <h1>Fundamentos do React</h1>
            <Fragment/>
            <WithParameters titulo="Situação do aluno" subtitulo="Pedro!" nota={9.2}/>
            <First/>

            <Random/>

            <RandomOfClass min={1} max={60} />
        </div>)
}