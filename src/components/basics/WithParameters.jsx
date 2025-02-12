export default function WithParameters(props) {
    const status = props.nota >= 7 ? "Aprovado" : "Recuperação";
    return (
        <div>
            <h2>{props.titulo}</h2>
            <h3> Aluno: {props.subtitulo}</h3>
            <p>{props.nota} e sua situação é: {status}</p>
        </div>
    )
}