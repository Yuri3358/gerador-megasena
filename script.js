const root = ReactDOM.createRoot(document.getElementById("root"))

function App() {
    return (
        <section id="content">
            <h1>Gerador números da Mega-Sena</h1>
            <div id="result"></div>
            <button>Generate</button>
        </section>
    )
}

/*
const list = []
for (let i = 0; i < 6; i++) {
    list.push(Math.round(Math.random()*60))
}
*/

root.render(<App/>)