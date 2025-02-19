import products from "../data/products";
import "./ProductsList.css"

export default props => {
const productsList = products.map(product => {
    return(

            <table key={product.id}>
               <tr>
                   <th>Identificação</th>
                   <th>Nome do Produto</th>
                   <th>Valor</th>
               </tr>
                <tr>
                    <td>{product.id}</td>
                    <td>{product.name}</td>
                    <td>R${product.price.toFixed(2).replace(".", ",")}</td>
                </tr>
            </table>

    )
});
    return (
        <div>
            { productsList }
        </div>

    )
}