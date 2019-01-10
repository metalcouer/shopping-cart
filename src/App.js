import React, { Component } from 'react';
import CartHeader from './components/CartHeader.js';
import CartFooter from './components/CartFooter.js';
import CartItems from './components/CartItems.js';
import AddItem from './components/AddItem.js';
import './App.css';

class App extends Component {
 constructor () {
   super()
   this.state = {
     cartItemList: [{ id: 40, name: 'Mediocre Iron Watch', priceInCents: 399 },
     { id: 41, name: 'Heavy Duty Concrete Plate', priceInCents: 499 },
     { id: 42, name: 'Intelligent Paper Knife', priceInCents: 1999 },
     { id: 43, name: 'Small Aluminum Keyboard', priceInCents: 2500 },
     { id: 44, name: 'Practical Copper Plate', priceInCents: 1000 },
     { id: 45, name: 'Awesome Bronze Pants', priceInCents: 399 },
     { id: 46, name: 'Intelligent Leather Clock', priceInCents: 2999 },
     { id: 47, name: 'Ergonomic Bronze Lamp', priceInCents: 40000 },
     { id: 48, name: 'Awesome Leather Shoes', priceInCents: 3990 },],
     orderList: [],
     quantity: 0,
     name:'',
     total:0,
     price: 0,
     totalSum: 0
     
   }
  }

  quantity = (e) =>  this.setState ({
    quantity: +e.target.value
  })
  
  name = (e) => this.setState({
    name: e.target.value
  })

  select = (e) =>{
    e.preventDefault() 
    this.setState ({
     name: e.target.value

  })
  let item = this.state.cartItemList.filter(item => item.name === e.target.value)
  this.setState ({
    price: item[0].priceInCents / 100,
    id: item[0].id
  })
}
  
    
  addItem = (event) => {
    event.preventDefault()
     let newItem = {
        product: {
        id:this.state.id,
        name: this.state.name,
        price: this.state.price * this.state.quantity,
      },
      quantity: this.state.quantity
      }
      console.log(newItem)
      let prices = this.state.orderList.map(item => item.product.price)
      let total = prices.reduce((acc, cur) => {
        return acc + cur
      }, 0)
      total += newItem.product.price
      console.log(this.state.orderList.concat([newItem]))
      this.setState({
        orderList: [...this.state.orderList, newItem],
        total: total.toFixed(2)
      })
      
  }

  // submit = (e) => {e.preventDefault ()
  //   let filtered = this.state.cartItemList.filter(product => this.state.name === product.name)
  //   console.log("filtered",filtered)
  //   let newItem = {
  //     id: this.state.cartItemList.length + 1,
  //     product: {
  //       id: filtered[0].id,
  //       name:this.state.name,
  //       priceInCents: filtered[0].priceInCents
  //     },
  //     quantity: this.state.quantity
  //   }
  //   this.setState({
  //     orderList: [newItem,...this.state.orderList]
  //   })
  // }

 render() {
  

  return (
    <div className="app">
      <CartHeader/>
      <CartItems cartItems={this.state.orderList}/>
      <AddItem 
      items={this.state.cartItemList} 
      quantity = {this.quantity} 
      select = {this.select} 
      addItem = {this.addItem} 
      total ={this.state.total}/>
      <CartFooter copyright='2018'/>
      
    </div>
  );
}
}

export default App;