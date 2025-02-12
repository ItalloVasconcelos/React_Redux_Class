export default props => {
    const {min, max} = props
    const random = parseInt(Math.random() * (max - min) + min);
    return (
        <>
            <h2>Valor Aleatório - Feito na Aula</h2>
            <p>
                <strong>Valor mínimo: {min}</strong>
            </p>
            <p>
                <strong>Valor máximo: {max}</strong>
            </p>
            <p>
                <strong>Valor aleatório: {random}</strong>
            </p>

        </>
    )
}