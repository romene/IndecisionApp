const project = {
    title: 'Aprender React',
    subtitle: '1 mes para terminar curso, fazer planejamento',
    options: []
}

const onFormSubmit = (e) => {
    e.preventDefault()
    const option = e.target.elements.option.value
    if (option) {
        project.options.push(option)
        e.target.elements.option.value = ""
    }
    render()
}

const resetall = (e) => {
    e.preventDefault()
    project.options = []
    render()
}

const onMakeDecision = () => {
    const randomNum = Math.floor(Math.random() * project.options.length)
    const option = project.options[randomNum]
    alert(option)

}

const appRoot = document.getElementById('app')



const render = () => {
    const template = <div>
        <h1>{project.title} </h1>
        <p> {project.subtitle ? project.subtitle : undefined} </p>
        <p>
            {project.options.length > 0
                ? "Here are your options: "
                : "No options for you right now"}
        </p>
        <button disabled={project.options.length === 0} onClick={onMakeDecision}>What Should I do?</button>
        <ol>{
            project.options.map((option) => {
                return <li key={option}>{option}</li>
            })
        }
        </ol>
        <form onSubmit={onFormSubmit}>
            <input type="text" name="option" />
            <button>Add Option</button>
            <button onClick={resetall}>Reset</button>

        </form>
    </div>;
    ReactDOM.render(template, appRoot);

}
render()    