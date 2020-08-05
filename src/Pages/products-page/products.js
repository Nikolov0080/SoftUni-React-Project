import React, { useState, useEffect } from 'react';
import PageLayout from '../../components/pageLayout/pageLayout';
import dbRef from '../../fire/DB-refs/allProducts-ref';
import Posts from '../../components/posts/posts';

const ProductsPage = () => {

    const [products, setProducts] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const allProducts = async () => {
            await dbRef.on('value', prod => {
                setProducts(prod.val());
            });
            
            setLoading(false);
        }

        allProducts();
    }, []);

    const currentProducts = Object.values(products)

    if (loading) {
        return (

            <PageLayout title="Our Products">
                <div >
                    <div className="text-center  text-primary" style={{ marginTop: "10rem" }}>
                        <div className="spinner-border" style={{ width: "10rem", height: "10rem" }} role="status">
                            <span className="sr-only">Loading...</span>
                             Loading
                        </div>
                    </div>
                </div>
            </PageLayout>

        )
    }

    return (
        <PageLayout title="Our Products">
            <div >
                <Posts props={currentProducts} />
            </div>
        </PageLayout>
    )
}

export default ProductsPage;