export default props => {
    const randomAge = () => Math.floor(Math.random() * 100);
    return (
        <div>
            <div>
                Filho
            </div>
            <button onClick={
                function(event) {
                    props.whenClick("João", randomAge(), true);
                }
            }>Fornecer informações</button>
        </div>
    );
}