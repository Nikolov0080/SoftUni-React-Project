import React, { useState, useEffect } from 'react';
import PageLayout from '../../components/pageLayout/pageLayout';
import dbRef from '../../fire/DB-refs/allProducts-ref';
import Posts from '../../components/main/posts/posts';
import Loading from '../../components/utils/loading/loading';

const ProductsPage = (props) => {

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
                <Loading />
            </PageLayout>
        )
    }

    return (
        <PageLayout title="Our Products">
            <div>
                <Posts props={currentProducts} />
            </div>
        </PageLayout>
    )
}

export default ProductsPage;