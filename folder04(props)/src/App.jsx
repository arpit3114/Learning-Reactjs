import './App.css'
import Card from './components/Card.jsx'

function App() {

  let obj ={
    naam: "Raju",
    age:78
  }

  let arr = [1,2,3,4,5]

  return (
    <>
      <h1 className='bg-green-500 text-white'> Test</h1>
      {/* <Card username='Raghav' myobj = {obj} myarr = {arr}/> */}
      <Card username='Raghav' btnText ='Follow me'/>
      <Card username='Manoj' btnText ='Like'/>
    </>
  )
}

export default App
