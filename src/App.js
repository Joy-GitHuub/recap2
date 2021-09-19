import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  return (
    <div className='App'>
      <ExternalUsers></ExternalUsers>
    </div>
  )
};

function ExternalUsers() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users`)
      .then(res => res.json())
      .then(data => setUsers(data))
  }, [])

  return (
    <div>
      <h3>External Users</h3>
      {
        users.map(user => <User name={user.name} email={user.email}> </User>)
      }

    </div>
  )
};

function User(props) {
  return (
    <div className="product">
      <h2>Name: {props.name}</h2>
      <p>Email: {props.email}</p>
    </div>
  )
}




function AddNumbers() {
  /*   const [sum, setNewNum] = useState(0);
    const newNumber = sum + 1;
    setNewNum(newNumber); */
  /*   const [sum, setNewNumber] = useState(10);
    const increaseNumbers = () => {
      const increase = sum + 10;
      setNewNumber(increase)
    }
  
    const decreaseNumbers = () => {
      const decreaseNum = sum - 10;
      setNewNumber(decreaseNum)
    } */

  const [count, setCount] = useState(10);
  const increaseNumbers = () => setCount(count + 1);
  const decreaseNumbers = () => setCount(count - 1);
  return (
    <div>
      <h1>Count: {count}</h1>
      <button style={{ marginRight: '10px', backgroundColor: 'green', padding: '10px 20px', borderRadius: '10px' }} onClick={increaseNumbers}>Increase</button>

      <button style={{ marginRight: '10px', backgroundColor: 'red', padding: '10px 20px', borderRadius: '10px' }} onClick={decreaseNumbers}>Decrease</button>
    </div>

  )
}




function Product(props) {
  const productStyle = {
    border: '2px solid black',
    borderRadius: '10px'
  }
  return (
    <div className='product' style={productStyle}>
      <h2 style={{ color: 'blue' }}>Name: {props.name}</h2>
      <h4>Name: <span style={{ color: 'white' }}> {props.price}</span> </h4>
    </ div>
  )
}

export default App;



/*
  const products = [
    { name: 'Mobile', price: 22000 },
    { name: 'Camara', price: 15000 },
    { name: 'Tv', price: 25000 },
    { name: 'Computer', price: 45000 },
    { name: 'Laptop', price: 70000 },
    { name: 'Watch', price: 1200 },
    { name: 'Key-Board', price: 550 },
  ]

*/

/*

 products.map(product => <Product name={product.name} price={product.price}></Product>)
          }
          <Product name="mobile" price="15000"></Product>
          <Product name="laptop" price="150000"></Product>
          <Product name="camera" price="55000"></Product>
          <Product name="mobile" price="15000"></Product>
          <Product name="mobile" price="15000"></Product>

*/



/*
function Counter() {
  const [count, setCount] = useState(0)
  const handleIncrease = () => {

    const newCount = count + 1;
    setCount(newCount)
  }
  return (
    <div className="">
      <h1>Count:{count}</h1>
      <button onClick={handleIncrease}>Increase</button>
    </div>
  )
}
 */