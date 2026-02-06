import Ch from "./chai"

function App() {
  // this is how you use variable in jsx
  const name = "Naman";
  return (
    <>
    {/* this is known as evaluated expression  */}
    <h1>Hello there {name}</h1>
    <Ch/>
    <h3>How u doing</h3>
    </>
  )
}

export default App
 