import React, { useState, useEffect } from 'react';
import PageLayout from '../../components/pageLayout/pageLayout';
import dbRef from '../../fire/DB-refs/allProducts-ref';
import Posts from '../../components/posts/posts';

const ProductsPage = (props) => {

    const [products, setProducts] = useState({});

    useEffect(() => {
        const allProducts = async () => {
            await dbRef.on('value', prod => {
                setProducts(prod.val());
            });
        }

        allProducts()
    }, []);
  
    const currentProducts = Object.values(products)

    return (
        <PageLayout title="Our Products">
            <div>
                <Posts props={currentProducts} />
            </div>
        </PageLayout>
    )
}



export default ProductsPage;