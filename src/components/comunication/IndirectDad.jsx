import {useState} from "react";
import IndirectSon from "./IndirectSon";

export default props => {
    const [name, setName] = useState("?");
    const [age, setAge] = useState(0);
    const [gammer, setGammer] = useState(false);


    function infos(nameParam, ageParam, gammerParam) {
        setName(nameParam);
        setAge(ageParam);
        setGammer(gammerParam);
    }

    return (
        <div>
            <div>
                <div>
                    <span>{name}, </span>
                    <span>{age}, </span>
                    <span>{gammer ? "Sim" : "Não"}</span>
                </div>
                <IndirectSon whenClick={infos}/>
            </div>
        </div>
    );
}