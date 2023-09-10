import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Button from '../../features/Atoms/Button/Button';
import styles from '../../pages/New & Featured/newFeature.module.css'
import { useCart } from 'react-use-cart';
import Swal from 'sweetalert2';
const baseURL = "http://localhost:4000/";


const AddCart = () => {
    const [product, setProduct] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    const { productId } = useParams();
    const { addItem } = useCart();
    

    


    useEffect(() => {
        axios.get(`${baseURL}products`)
            .then((res) => {
                const thisProduct = res.data.find(p => p.id === parseInt(productId));
                setProduct(thisProduct);
            })
            .catch((error) => {
                setError(error);
            })
            .finally(() => {
                setLoading(false);
            });
    }, [productId]);

    function handleAddToCart (p){
        addItem(p)
        Swal.fire({
            title: 'Good job!',
            html: 'You add product your cart!',
            icon: 'success'
          });
    }

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    if (!product) {
        return <div>Product not found.</div>;
    }
    return (
        <>
            <section id='details'>
                <div className="container">
                    <div className={styles.product_details}>
                        <figure>
                            <img src={product.image} alt="" />
                        </figure>
                        <div className={styles.product_content}>
                            <p>{product.variant}</p>
                            <h1>{product.title}</h1>
                            <span>Price: {product.price}</span>
                            <h5>{product.description}</h5>
                        </div>
                        <div className={styles.AddCart}>
                            <Button onClick={() => handleAddToCart(product)} >Add to Bag</Button>
                        </div>
                    </div>

                </div>
            </section>
        </>
    )
}

export default AddCart