export default props => {
    return (
        <div>
            <span> Nome: <strong>{props.name}, </strong> </span>
            <span>Idade: <strong>{props.age}, </strong> </span>
            <span> É gamer? <strong>{props.gammer ? "Sim" : "Não"}</strong></span>
        </div>
    );
}