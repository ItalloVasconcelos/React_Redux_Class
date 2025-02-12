export default function Random() {
    const selectedMin = prompt("Coloque o valor mínimo:");
    const selectedMax = prompt("Coloque o valor máximo:");
    const minCeiled = Math.ceil(parseInt(selectedMin));
    const maxFloored = Math.floor(parseInt(selectedMax));
    const randomNumber = Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled);

    return (
        <>

            <h1>Seu número aleatório</h1>

            <p>Com um valor mínimo de: {selectedMin} e o valor máximo
                de: {selectedMax}. Seu número aleatório é: {randomNumber}!!</p>

        </>
    )
};