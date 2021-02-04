import Header from './Header'
import { useState, useEffect } from 'react'
import { Container, Col, Row } from 'react-bootstrap'

import numberList from "./numbers";
import ItemList from "./ItemList";
import AddNumber from "./AddNumber"

function App() {

  const [numbers, setNumbers] = useState([])

  useEffect( ()=> {
    if(localStorage.getItem("phoneNumber") == null){
      localStorage.setItem('phoneNumber', JSON.stringify(numberList))
      setNumbers(JSON.parse(localStorage.getItem("phoneNumber")))
    } else {
      setNumbers(JSON.parse(localStorage.getItem("phoneNumber")))
    }
    // setNumbers(numberList)
  }, [setNumbers])

  const deleteNumber = (id) => {
    let newState = [...numbers].filter( number => number.id !== id)
    localStorage.setItem('phoneNumber', JSON.stringify(newState))
    setNumbers(JSON.parse(localStorage.getItem("phoneNumber")))
    // setNumbers(newState)
  }

  const addNumber = (newNumber) => {
    const id = numbers[numbers.length-1].id+1
    const number = {...newNumber, id}
    const state = [...numbers, number];
    localStorage.setItem('phoneNumber', JSON.stringify(state))
    setNumbers(JSON.parse(localStorage.getItem("phoneNumber")))
    // setNumbers(state)
  }

  const editButton = (editNumber, index) => {
    const newState = [...numbers.slice(0, index), editNumber, ...numbers.slice(index+1)]
    localStorage.setItem('phoneNumber', JSON.stringify(newState))
    setNumbers(JSON.parse(localStorage.getItem("phoneNumber")))
    // setNumbers(newState)
  }

  return (
    <Container>
      <div>
        <Row>
          <Col>
            <Header/>
          </Col>
        </Row>
        <Row>
          <Col>
            <ItemList 
            numbers={numbers} 
            deleteNumber={(id)=>deleteNumber(id)}
            editButton={(editNumber, index)=>editButton(editNumber, index)}
            />
          </Col>
        </Row>
      </div>
      <Row>
          <Col>
            <AddNumber addNumber={(newNumber)=>addNumber(newNumber)}/>
          </Col>
      </Row>  
    </Container>
  );
}

export default App;
