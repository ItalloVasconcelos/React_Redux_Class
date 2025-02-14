import "./Card.css";

// eslint-disable-next-line import/no-anonymous-default-export
export default props => {
    // const styleColor = {
    //     backgroundColor: props.color || "#c6c6c6",
    //     borderColor: props.color || "#c6c6c6",
    // }
    return (
        <div className="Card">
             {/*O style pode ser usado da forma que está ou style={styleColor}*/}
            <div className="Title" style={{
                borderColor: props.color || "#c6c6c6",
                backgroundColor: props.color || "#c6c6c6",
            }}>
                <h1>{props.titulo}</h1>
            </div>
            <div className="Content">
                {props.children}
            </div>
        </div>
    )
}