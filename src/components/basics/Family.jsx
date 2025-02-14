import {Children, cloneElement} from "react";

// eslint-disable-next-line import/no-anonymous-default-export
export default props => {
    return (
        <>
            {/*/!*Como pegar os elementos do pai*!/*/}
            {/*/!*Maneira 1: Colocando o spread (Pega todas as props definidas na chamada do componente)*!/*/}
            {/*<MemberFamily  {...props} />*/}

            {/*/!*Maneira 2: Setando na chamada do componente e adicionando o props.lastName*!/*/}
            {/*<MemberFamily name="Kiabutso" lastName={props.lastName}/>*/}

            {/*/!*Maneira 3: Definindo tudo "manualmente" de forma mais direta*!/*/}
            {/*<MemberFamily name="Kiko" lastName="Mamatudo"/>*/}

            {/*Chamando o elemento children do React*/}
            {/*Desta maneira, so funciona se tiver apenas um componente filho, se tiver mais de 1 da o seguinte erro: Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) but got: undefined. You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.*/}
            {/*{cloneElement(props.children, {...props})}*/}

            {/*Desta maneira é preciso fazer um children.map e definir o mapeamento das propriedades filho.*/}
            {
                Children.map(props.children, (child, i)=> {
                    return cloneElement(child, {...props, key:i})
                })
            }
        </>
    )
};