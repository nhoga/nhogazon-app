import React from 'react'
import Rating from '../components/Rating';
import data from '../data'


export default function ProductScreen(props) {
    const product = data.products.find((x) => x._id === props.match.params.id);
    if (!product) {
        return <div>Producto no encontrado</div>
    }
    return (
        <div>
            <div className="row top">
                <div className="col-2">
                    <img className="large" src={product.image} alt={product.name}></img>
                </div>
                <div className="col-1">
                    <ul>
                        <li>
                            <h1>{product.name}</h1>
                        </li>
                        <li>
                            <Rating rating={product.rating} numReviews={product.numReviews}></Rating>
                        </li>
                        <li>
                            Precio: ${product.price}
                        </li>
                        <li>
                            Descripcion:<p>
                                {product.description}
                            </p>
                        </li>
                    </ul>
                </div>
                <div className="col-1">
                    <div className="card card-body">
                        <ul>
                            <li>
                                <div className="row">
                                    <div>Precio</div>
                                    <div className="price">${product.price}</div>
                                </div>
                            </li>
                            <li>
                                <div className="row">
                                    <div>Estado</div>
                                    <div>
                                        {product.countInStock > 0 ? (<span className="success">
                                            En Stok
                                        </span>
                                        ) :
                                            (
                                                <span className="error">Inavilitado</span>)}
                                    </div>
                                </div>
                            </li>
                            <li>
                                <button className="primary block">Agregar al carrito</button>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}




