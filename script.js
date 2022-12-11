const root = ReactDOM.createRoot(document.getElementById("root"))

function App() {
    const [listNumbers, setListNumbers] = React.useState("Clique em gerar")
    function GenNumbers() {
        const list = []
        for (let i = 0; i < 6; i++) {
            list.push(Math.round(Math.random()*60))
        }
        setListNumbers(list.join(" "))
    }

    return (
        <section id="content">
            <h1>Gerador de números da Mega-Sena</h1>
            <div id="result">
                <span id="generated_numbers">{listNumbers}</span>
            </div>
            <button id="generate" onClick={() => GenNumbers()}>Sortar números</button>
        </section>
    )
}

root.render(<App/>)