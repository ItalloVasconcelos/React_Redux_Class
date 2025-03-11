// eslint-disable-next-line import/no-anonymous-default-export
export default (props) => {
    return (
        <div>
            <button onClick={props.incrementing}>+ 1</button>
            <button onClick={props.decrementing}>- 1</button>
        </div>
    )
}