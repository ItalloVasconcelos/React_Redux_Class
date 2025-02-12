import "./Card.css";

export default props => {
    return (
        <div className="Card">
            <div className="Title">
                <h1>{props.titulo}</h1>
            </div>
            <div className="Content">
                { props.children }
            </div>
        </div>
    )
}