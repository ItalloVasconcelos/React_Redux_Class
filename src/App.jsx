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
import InfoUser from "./components/conditionals/InfoUser";
import DirectDad from "./components/comunication/DirectDad";
import IndirectDad from "./components/comunication/IndirectDad";
import Input from "./components/form/Input";


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
                    <InfoUser user={{name: "Fernando"}}></InfoUser>
                    <InfoUser user={{email: "fer@nando.com"}}></InfoUser>
                </Card>
                <Card titulo="#09 - Comunicação Direta" color="#990000">
                    <DirectDad/>
                </Card>
                <Card titulo="#10 - Comunicação Indireta" color="#8bad39">
                    <IndirectDad/>
                </Card>
                <Card titulo="#11 - Componente controlado (Input)" color="#E45F56">
                    <Input />
                </Card>
            </div>
        </div>
    );
};