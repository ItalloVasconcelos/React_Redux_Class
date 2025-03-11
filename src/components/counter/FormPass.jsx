// eslint-disable-next-line import/no-anonymous-default-export
export default (props) => {
    return (
        <div>
            <button onClick={props.incrementingWithPass}> + {props.passing}  n</button>
            <button onClick={props.decrementingWithPass}> - {props.passing} n</button>
            <button onClick={props.passIncrementing}>+ 5 p</button>
            <button onClick={props.passDecrementing}>- 5 p</button>
        </div>
    )
}