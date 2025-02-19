import React from "react";

import './App.css'

import First from "./components/basics/First";
import WithParameters from "./components/basics/WithParameters";
import Fragment from "./components/basics/Fragment";
import Random from "./components/basics/Random";
import RandomOfClass from "./components/basics/RandomOfClass";
import Family from "./components/basics/Family";
import Card from "./components/layout/Card";
import MemberFamily from "./components/basics/MemberFamily";
import StudentsList from "./components/loops/StudentsList";
import ProductsList from "./components/loops/ProductsList";
import EvenOrOdds from "./components/conditionals/EvenOrOdds";


export default function App() {
    return (
        <div className="App">
            <h1>Fundamentos do React</h1>
            <div className="Cards">
                <Card titulo="#01 - Primeiro componente" color="#090">
                    <First/>
                </Card>
                <Card titulo="#02 - Situação Aluno" color="#009" >
                    <WithParameters titulo="Situação do aluno" subtitulo="Pedro!" nota={9.2}/>
                </Card>
                <Card titulo="#03 - Fragmento" color="#FA6900">
                    <Fragment/>
                </Card>
                <Card titulo="#04 - Random feito por mim" color="#E94C6F">
                    <Random/>
                </Card>
                <Card titulo="#04.1 - Desafio Aleatório" color="#588C73">
                    <RandomOfClass min={1} max={60}/>
                </Card>
                <Card titulo="#05 - Componente filho" color="#888C73">
                    <Family lastName="Chico">
                        <MemberFamily name="Kiko" />
                        <MemberFamily name="Juca" />
                        <MemberFamily name="Tamarino" />
                    </Family>
                </Card>
                <Card titulo="#06 - Loops - Lista de alunos" color="#3939ac">
                    <StudentsList>

                    </StudentsList>
                </Card>
                <Card titulo="#07 - Loops - Lista de produtos - Exercicio" color="#990000">
                    <ProductsList/>
                </Card>
                <Card titulo="#08 - Par ou impar" color="#e6e600">
                    <EvenOrOdds />
                </Card>
            </div>
        </div>
    );
};