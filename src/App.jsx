import React from "react";

import First from "./components/basics/First";
import WithParameters from "./components/basics/WithParameters";
import Fragment from "./components/basics/Fragment";
import Random from "./components/basics/Random";

export default function App() {
    return (
        <div id="app">
            <h1>Fundamentos do React</h1>
            <Fragment/>
            <WithParameters titulo="Situação do aluno" subtitulo="Pedro!" nota={9.2}/>
            <First/>

            <Random/>
        </div>)
}