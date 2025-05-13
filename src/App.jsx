import './App.css'
import Card from './components/Card'

function App(){
  return (
    <div className='box'>
       <h1>Products</h1>
       <div className='ota'>
       <Card bg="#CBCBCB" btn="#A5A5A5"></Card>
       <Card bg="#5CA7FF" btn="#FFC700"></Card>
       <Card bg="#D083FF" btn="#00FFB2"></Card>
       <Card bg="#CBCBCB" btn="#A5A5A5"></Card>
       <Card bg="#5CA7FF" btn="#FFC700"></Card>
       <Card bg="#D083FF" btn="#00FFB2"></Card>
  
     
       </div>
    </div>
  )
}

export default App
