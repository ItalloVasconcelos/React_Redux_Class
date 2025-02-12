import React from "react";

import First from "./components/basics/First";
import WithParameters from "./components/basics/WithParameters";
import Fragment from "./components/basics/Fragment";
import Random from "./components/basics/Random";
import RandomOfClass from "./components/basics/RandomOfClass";
import Card from "./components/layout/Card";

export default function App() {
    return (
        <div id="app">
            <h1>Fundamentos do React</h1>
            <Card titulo="#04.1 - Desafio Aleatório">
                <RandomOfClass min={1} max={60}/>
            </Card>
            <Card titulo="#04 - Random feito por mim">
                <Random/>
            </Card>
            <Card titulo="#03 - Fragmento">
                <Fragment/>
            </Card>
            <Card titulo="#02 - Situação Aluno">
                <WithParameters titulo="Situação do aluno" subtitulo="Pedro!" nota={9.2}/>
            </Card>
            <Card titulo="#01 - Primeiro componente">
                <First/>
            </Card>


        </div>
    );
};