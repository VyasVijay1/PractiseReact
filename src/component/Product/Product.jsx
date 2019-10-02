import React from 'react'

function Product(props){
    return(
        <div>
            <h3>Name: {props.product.name}</h3> 
            <p>Price: {props.product.price}</p>
            <p> Description: {props.product.description}</p>
        
        </div>
    )
}
export default Product