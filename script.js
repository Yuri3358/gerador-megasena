const root = ReactDOM.createRoot(document.getElementById("root"))

function App() {
    const [listNumbers, setListNumbers] = React.useState()
    const [listColor, setListColor] = React.useState()
    function GenNumbers() {
        const list = []
        for (let i = 0; i < 6; i++) {
            list.push(Math.round(Math.random()*60))
        }
        setListNumbers(list.join(" "))
        setListColor({color: "yellow"})
    }

    return (
        <section id="content">
            <h1>Gerador de números da Mega-Sena</h1>
            <div id="result">
                <span style={listColor}>{listNumbers}</span>
            </div>
            <button id="generate" onClick={() => GenNumbers()}>Sortar números</button>
        </section>
    )
}

root.render(<App/>)