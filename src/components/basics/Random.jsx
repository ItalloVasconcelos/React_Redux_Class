export default function Random() {
    const selectedMin = prompt("Coloque o valor mínimo:");
    const selectedMax = prompt("Coloque o valor máximo:");
    const randomNumber = parseInt(Math.random() * (selectedMax - selectedMin) + selectedMin);

    return (
        <>

            <h1>Seu número aleatório</h1>

            <p>
                <strong>Com um valor mínimo de: {selectedMin}</strong>
            </p>
            <p>
                <strong>e o valor máximo de: {selectedMax}.</strong>
            </p>
            <p>
                <strong>Seu número aleatório é: {randomNumber}!!</strong>
            </p>

        </>
    )
};