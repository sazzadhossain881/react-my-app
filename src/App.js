import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const friendsInformation=[
    {name:'Mahbub Alam',job:'Software Engeineer'},
    {name:'Jahid Hasan',job:'Web Developer'},
    {name:'Habib Rahman',job:'Graphics Designer'},
    {name:'Jihad Hasan',job:'Architecture'},
    {name:'Rakib Hasan', job:'Marketing Manager'}
  ];
  const products=[
    {name:'Photoshop',price:'$100'},
    {name:'Illustator',price:'$50'},
    {name:'Adobe Reader',price:'$30'}
  ];

  const productsInformation=[
    {name:'Napa',price:'$1'},
    {name:'Ace',price:'$1.50'},
    {name:'Exor',price:'$5'}
  ];
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit done <code>src/App.js</code> and save to reload.
        </p>
        <MovieCounter></MovieCounter>
        <Counter></Counter>
        <Users></Users>
        <Todo></Todo>
        <ul>
          {
            friendsInformation.map(friend => <li>{friend.name}</li>)
          }
          {
            products.map(product => <li>{product.name}</li>)
          }
        </ul>
        {
          products.map(product => <Product product={product}></Product>)
        }
        {
          friendsInformation.map(friends => <Person friend={friends}></Person>)
        }

        {
          productsInformation.map(products => <Delivery product={products}></Delivery>)
        }
        <User></User>
        
      </header>
    </div>
  );
}



function Product(props){
  const productStyle={
    width:"300px",
    height:"300px",
    margin:"10px",
    borderRadius:"5px",
    backgroundColor:"lightGray"

    
  }
  const btnStyle={
    width:"100px",
    height:"50px",
    border:"none",
    fontSize:"15px",
    backgroundColor:"lightBlue",
    color:"white",
    borderRadius:"5px",
    padding:"15px"
  }
  const {name,price}=props.product;
  return(
    <div style={productStyle}>
      <h3>Name:{name}</h3>
      <h2>Price:{price}</h2>
      <button style={btnStyle}>Buy Now</button>
    </div>
  )
}



function Person(props){
  const personStyle={
    width:"600px",
    backgroundColor:"green",
    border:"1px solid red",
    margin:"10px"
  }
  const {name,job}=props.friend;
  return (
    <div style={personStyle}>
      <h1>Name:{name}</h1>
      <h2>Job:{job}</h2>
    </div>
  )
}

function Counter(){
  const [count,setCount]=useState(0);
  return(
    <div>
      <h1>Count:{count}</h1>
      <button onClick={() => setCount(count+1)}>Increase</button>
      <button onClick={() => setCount(count-1)}>Decrease</button>
    </div>
  )
}

function Users(){
  const [users,setUsers]=useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(Response => Response.json())
    .then(data =>  setUsers(data));
  },[])
  return(
    <div>
     <ul>
     {
        users.map(user => <li>{user.name}</li>)
      }
     </ul>
    </div>
  )
}

function Todo (){
  const [users,setUsers]=useState([]);
   useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(Response => Response.json())
    .then(data => setUsers(data));
  })
  return(
    <div>
      {
        users.map(user => <li>{user.name}</li>)
      }
    </div>
  )
}

function Delivery(props){
  const deliveryStyle={
    border:"1px solid blue",
    backgroundColor:"lightSalmon",
    color:"white",
    padding:"10px",
    margin:"10px",
    borderRadius:"5px"
  }
  const{name,price}=props.product;
  return(
    <div style={deliveryStyle}>
      <h2>{name}</h2>
      <h3>{price}</h3>
    </div>
  )
}

function MovieDisplay(props){
  return(
    <div>
      <h3>Movie Display:{props.movie}</h3>
    </div>
  )
}

function MovieCounter(){
  const[count,setCount]=useState(0);
  return(
    <div>
      <button onClick={() => setCount(count+1)}>Increase</button>
      <h3>Number of movie:{count}</h3>
      <MovieDisplay movie={count+5}></MovieDisplay>
    </div>
  )
}

function User(){
  const[user,setUser]=useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(Response => Response.json())
    .then(data => setUser(data))
  },[])
  return(
    <div>
      {
        user.map(users => <li>{users.name}</li>)
      }
    </div>
  )
}

export default App;
