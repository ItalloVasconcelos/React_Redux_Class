import {useState} from "react";
// eslint-disable-next-line import/no-anonymous-default-export
export default (props) => {


    function numbersNotContains(min, max, array) {
        const random = Math.floor(Math.random() * (max + 1 - min )) + min;
        return array.includes(random) ? numbersNotContains(min, max, array) : random;
    }


    function generateNumbers(qtd) {
        return Array(qtd)
            .fill(0)
            .reduce((nums) => {
                const newNumbers = numbersNotContains(1, 60, nums)
                console.log([...nums, newNumbers])
                return [...nums, newNumbers];
            }, [])
            .sort((n1, n2) => n1 - n2)
    }

    const [qtde, setQtde] = useState( props.qtde || 6)
    const incialNumber = Array(qtde).fill(0)
    const [numbers, setNumbers] = useState(incialNumber)
    return (
        <div>
            <h2>Gere uma surpresinha Megasena</h2>
            <div>
           <h3>{numbers.join(' ')}</h3>
                <div>
                    <label>Quantidade de números:</label>
                    <input type="number" value={qtde} min="6" max="15"
                    onChange={e => setQtde(+e.target.value)}
                    />
                </div>
                <button onClick={_ => setNumbers(generateNumbers(qtde))}>Gerar números</button>
            </div>
        </div>
    )
}