import { useState } from "react"

function App() {
  const [color, setColor] = useState("#ffffff")
  return (
    <div className="w-full h-screen duration-200" style={{ backgroundColor: color }}>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-5 shadow-lg bg-slate-600 px-4 py-5 rounded-2xl">
          <button onClick={() => setColor("red")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg active:scale-110" style={{ backgroundColor: "red" }}>Red</button>
          <button onClick={() => setColor("green")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg active:scale-110" style={{ backgroundColor: "Green" }}>Green</button>
          <button onClick={() => setColor("blue")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg active:scale-110" style={{ backgroundColor: "Blue" }}>Blue</button>
          <button onClick={() => setColor("olive")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg active:scale-110" style={{ backgroundColor: "Olive" }}>Olive</button>
          <button onClick={() => setColor("gray")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg active:scale-110" style={{ backgroundColor: "Gray" }}>Gray</button>
          <button onClick={() => setColor("yellow")} className="outline-none px-4 py-1 rounded-full text-Black shadow-lg active:scale-110" style={{ backgroundColor: "Yellow" }}>Yellow</button>
          <button onClick={() => setColor("pink")} className="outline-none px-4 py-1 rounded-full text-Black shadow-lg active:scale-110" style={{ backgroundColor: "Pink" }}>Pink</button>
          <button onClick={() => setColor("purple")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg active:scale-110" style={{ backgroundColor: "Purple" }}>Purple</button>
          <button onClick={() => setColor("lavender")} className="outline-none px-4 py-1 rounded-full text-Black shadow-lg active:scale-110" style={{ backgroundColor: "Lavender" }}>Lavender</button>
          <button onClick={() => setColor("black")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg active:scale-110" style={{ backgroundColor: "Black" }}>Black</button>
          <button onClick={() => setColor("teal")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg active:scale-110" style={{ backgroundColor: "Teal" }}>Teal</button>
          <button onClick={() => setColor("brown")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg active:scale-110" style={{ backgroundColor: "Brown" }}>Brown</button>
        </div>
      </div>
    </div>
  )
}

export default App
