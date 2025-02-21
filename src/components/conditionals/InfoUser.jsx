import If from './If'

// eslint-disable-next-line import/no-anonymous-default-export
export default props => {
    const user = props.user || {}
    return (
        <div>
            <If test={user && user.name}>
                Seja bem vindo <strong>{user.name}</strong> !
            </If>
            <If test={!user || !user.name}>
                Seja bem vindo <strong>Unknow</strong> !
            </If>
        </div>
    );
}