import React from 'react';


const AddItem = (props) => {
    
// let newItem = props.items.map((item, idx) => <option key = {idx}>{item.name}</option>)
    
    
      return (
        <div className="container">
        <p>Total Price: ${props.total}</p>
        <form onSubmit = {props.addItem}>

            <div className="form-group">
                <h3>Quantity</h3>
                <input onChange = {props.quantity} type="number" id="quantity" className="form-control" required></input>
                <h3>Products</h3>
                <select onChange = {props.select} id="product-select" className="form-control" >
                {props.items.map(product => <option key={product.id} value={product.name}>
                {product.name} </option>)}
                    
                </select>
               
            </div>
            <button type="submit" className="btn-dark bg-primary" >Submit</button>
            </form>   
    </div>
    
    
      )
    }
    



export default AddItem;