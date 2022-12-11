const root = ReactDOM.createRoot(document.getElementById("root"))

function App() {
    function GenNumbers() {
        const list = []
        for (let i = 0; i < 6; i++) {
            list.push(Math.round(Math.random()*60))
        }
        console.log(list)
    }

    return (
        <section id="content">
            <h1>Gerador números da Mega-Sena</h1>
            <div id="result"></div>
            <button onClick={() => GenNumbers()}>Generate</button>
        </section>
    )
}

/*

*/

root.render(<App/>)