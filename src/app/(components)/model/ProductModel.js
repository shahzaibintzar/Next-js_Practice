// components/ProductModal.js
"use client"
import React, { useState } from 'react';
import styles from '../../../../styles/products.module.css';

const ProductModal = ({ onClose, onSubmit, title, isUpdate, product = {} }) => {
    const [formData, setFormData] = useState({
        title: product.title || '',
        description: product.description || '',
        phone: product.phone || ''
    });

    const [loading, setLoading] = useState(false)

    const  handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const postProductAPI = async () => {
        try {
         setLoading(true);

         const myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

const raw = JSON.stringify({
...formData
});

const requestOptions = {
  method: "POST",
  headers: myHeaders,
  body: raw,
  redirect: "follow"
};

const response = await fetch("http://localhost:3000/API/products", requestOptions)
setFormData({title:'' , discription:'' , phone:'' ,})
alert("product created");

        } catch (error) {
            console.log("error ", error);
        
        }
        finally{    
            setLoading(false);
        }
    }

    // const updateProductAPI = async () => {
    //     try {
    //         var myHeaders = new Headers();
    //         myHeaders.append("Content-Type", "application/json");

    //         var raw = JSON.stringify({
    //             "id": product._id,
    //             ...formData
    //         });

    //         var requestOptions = {
    //             method: 'PUT',
    //             headers: myHeaders,
    //             body: raw,
    //             redirect: 'follow'
    //         };

    //         await fetch("http://localhost:3000/API/products", requestOptions)
    //         setFormData({ title: '', description: '', phone: '' })
    //         alert("Product updated");
    //     } catch (error) {
    //     console.log("error",error)
    //     }
    // }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (isUpdate) {
            // updateProductAPI()
        }
        else {
            postProductAPI()
        }

        // Validate form data if needed
        // onSubmit(formData);
    };

    return (
        <div className={styles.modalOverlay}>
            <div className={styles.modalContent}>
                <button className={styles.closeButton} onClick={onClose}>
                    &times;
                </button>
                <h2> {isUpdate ? "Update Product" : "Add Product"}</h2>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="productName">Product Name:</label>
                    <input
                        type="text"
                        id="title"
                        name="title"
                        value={formData.title}
                        onChange={handleChange}
                    />

                    <br />

                    <label htmlFor="productName">Number:</label>
                    <input
                        type="number"
                        id="number"
                        name="number"
                        value={formData.number}
                        onChange={handleChange}
                    />

                    <br />

                    <label htmlFor="productDescription">Product Description:</label>
                    <textarea
                        id="description"
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                    />

                    {/* Add more form fields as needed */}
                    <br />
                    {loading ?
                        <button type="submit" disabled>Loading...</button> :
                        <button type="submit">Submit</button>}
                </form>
            </div>
        </div>
    );
};

export default ProductModal;