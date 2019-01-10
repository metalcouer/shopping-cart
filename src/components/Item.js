import React from 'react'


const Item = (props) => {
    

//  let newItem = props.state.map((item, idx) => {
//     return (<Item state={item} key ={idx}></Item>)
//   })


return (
    

 <div className="collection-item">
  <div className="list-group">
   <div className="list-group-item">
    <div className="row">
            <div className="col-md-8">
            {props.name}</div>
            <div className="col-md-2">${(props.price)}</div>
            <div className="col-md-2">{props.quantity}</div>
    </div>
   </div>
   {/* {newItem} */}
  </div>
 </div>
    )
}

export default Item;