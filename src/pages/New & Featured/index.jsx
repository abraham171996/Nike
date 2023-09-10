import React, { useState, useEffect } from 'react';
import styles from './newFeature.module.css';
import { BiFilter } from 'react-icons/bi';
import axios from 'axios';
import { IoIosArrowDown } from 'react-icons/io';
import { GETAPIData } from '../../Http/Http';
import { Link } from 'react-router-dom';

const baseURL = "http://localhost:4000/";

const NewFeatured = () => {
    const [products, setProducts] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
       axios.get(`${baseURL}products`)
           .then((res) => {
                setProducts(res.data);
           })
           .catch((error) => {
                setError(error);
           })
           .finally(() => {
                setLoading(false);
           });
    }, []);

   
    if (loading) {
        // Skeleton loading state
        return (
            <div className={styles.skeletonContainer}>
                {[...Array(4)].map((_, index) => (
                    <div key={index} className={styles.skeletonCard}>
                        <div className={styles.skeletonImage}></div>
                        <div className={styles.skeletonText}></div>
                        <div className={styles.skeletonText}></div>
                        <div className={styles.skeletonText}></div>
                    </div>
                ))}
            </div>
        );
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    return (
        <>
            <section id='products'>
                <div className="container">
                    <div className={styles.products_icons}>
                        <div className={styles.left}>
                            <span>Hide Filters</span>
                            <BiFilter />
                        </div>
                        <div className={styles.right}>
                            <span>Sort By</span>
                            <IoIosArrowDown />
                        </div>
                    </div>
                    <div className={styles.products_cards}>
                        {products.map((p) => (
                            <Link key={p.id} to={`/products/${p.id}`}>
                                    <div key={p.id} className={styles.card}>
                                <figure>
                                    <img src={p.image} alt="" />
                                </figure>
                                <div className={styles.card_bottom}>
                                    <p>{p.variant}</p>
                                    <h2>{p.title}</h2>
                                    <span>{p.category}</span>
                                    <span>{p.colorCount}</span> 
                                    <span className={styles.price}>{p.price}</span>
                                </div>
                            </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default NewFeatured;
