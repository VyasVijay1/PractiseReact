import React from 'react'
import Products from './Products'
import Product from './Product'

function MapProduct(){
    const Productlist = Products.map((prod) =><Product Key={prod.id} product={prod}/>

    );
    return(
        <div>{Productlist}</div>
    )
}
export default MapProduct