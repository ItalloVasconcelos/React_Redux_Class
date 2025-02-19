import numbers from "../data/numbers";

export default props => {

    const numbersList = numbers.map(number => {
        const isEven = number.number % 2 === 0;
        return (
            <div key={number.id}>
                <table>
                    <thead>
                    <tr>
                        <th>Número</th>
                        <th>Par ou ímpar</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>{number.number}</td>
                        <td>{isEven ? <span>Par</span> : <span>Ímpar</span>}</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        );
    })

    return (
        <>
            {numbersList }

        </>
    );
};