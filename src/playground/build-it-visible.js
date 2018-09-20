let Visibility = false //crie uma varia boolean para determinar disabeled

let toggleVisibility = () => {
    Visibility = !Visibility // Pegue o valor de visibilit = troque para o inverso = Visibility = !Visibility
    render() //render it
}

const render = () => {
    
    const jsx = (
        <div>
            <h1>Visibility Toggle</h1>
            <button onClick={toggleVisibility}> {/* chame a funcao para trocar o disable de true para false no click */} 
                {Visibility ? 'Hide Details' : 'Show Details'} {/* Se a visibity estiver true escreva uma coisa / false outra coisa*/} 
            </button>
            {Visibility && (
                <div>
                    <p>Estou fazendo um teste de toggle</p>
                </div>
            ) }
        </div>
    )
    ReactDOM.render(jsx, document.getElementById("app"));
}


render()