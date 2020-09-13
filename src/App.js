import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  
  const products = [
    {name: 'Photoshop', price: '$90.99'}, 
    {name:'Illustrator', price:'$54,76'}, 
    {name:'InDesign', price:'$54,76'}
  ]

  const friends = [
    {name: 'Topu', age:"16"},
    {name: 'Tusher', age:'17'},
    {name: "Rafiq", age: 'Sagor'}
  ]
  
  return (
    <div className="App">
      <Counter></Counter>
      <Users></Users>
      <div>
        {friends.map(singleFriend => <Friends friend={singleFriend}></Friends>)}
      </div>
      <ul>
        {products.map(product => <Product product={product}></Product>)}
      </ul>
    </div>
  );
}

function Friends(props){
  const friendStyle={
    border: '1px solid grey',
    borderRadius: '5px',
    backgroundColor: 'yellow',
    height: '200px',
    width: '200px',
    float: 'left',
    margin: '20px'
  }
  const {name, age} = props.friend;
  return (
    <div style={friendStyle}>
      <h3>{name}</h3>
      <h1>{age}</h1>
      <button>Buy now</button>
    </div>
  )
}


function Product(props){
  const productStyle={
    border: '1px solid grey',
    borderRadius: '5px',
    backgroundColor: 'lightgray',
    height: '200px',
    width: '200px',
    float: 'left',
    margin: '20px'
  }
  const {name, price} = props.product;
  return (
    <div style={productStyle}>
      <h3>{name}</h3>
      <h1>{price}</h1>
      <button>Buy now</button>
    </div>
  )
}

function Users (){
  const [users, setUsers] = useState([])
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUsers(data))
  }, [])
  
  return(
    <div>
      <h3>Dynamic Users: {users.length}</h3>
      {console.log(users)}
      <ul>
        {
          users.map(user => <li>{user.email}</li>)
        }
      </ul>
    </div>
  )
}

function Counter(){
  const [count, setCount] = useState(0);
  const handleIncrease = () => {
    const incerase = count + 1;
    setCount(incerase)
  }
  const handleDecrease = () => {
    const decrease = count-1;
    setCount(decrease)
  }
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={handleIncrease}>Increase</button>
      <button onClick={handleDecrease}>Decrease</button>
    </div>
  )
}

export default App;
