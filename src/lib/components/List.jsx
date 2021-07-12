import React from 'react';

function List(props) {
    return (
        <div>
            <h3 className="card-title px-4 mt-4">{props.category}</h3>                
            <ul className="list-group">
                { props.products.map((product, index) => {
                    return <li className="list-group-item mx-4" key={index}>{product.id} {product.product} {product.brand} {product.model && product.model} - Precio: {product.price}€</li>
                })
                }                                        
            </ul>
        </div>        
        
    )
}

export default List;
