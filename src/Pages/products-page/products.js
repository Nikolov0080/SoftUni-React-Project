import React, { useState, useEffect } from 'react';
import PageLayout from '../../components/pageLayout/pageLayout';
import dbRef from '../../fire/DB-refs/allProducts-ref';
import Posts from '../../components/pagination/posts';
import Pagination from '../../components/pagination/pagination';



const ProductsPage = (props) => {

    const [products, setProducts] = useState({});
    const [currentPage, setCurrentPage] = useState(1);
    const [productsPerPage, setProductsPerPage] = useState(3);

    useEffect(() => {
        const allProducts = async () => {
            await dbRef.on('value', prod => {
                setProducts(prod.val());
            });
        }
        allProducts();
    }, []);

    const posts = Object.values(products);
    // const printProducts = () => {
    //     const honeyData = Object.values(products);
    //     return honeyData.map((product, i) => {
    //         return <HoneyCard key={i} {...product} />
    //     })
    // }



    // Get current posts
    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = posts.slice(indexOfFirstProduct, indexOfLastProduct);

    // Change page

    const paginate = (pageNumber) => setCurrentPage(pageNumber)


    return (
        <PageLayout title="Our Products">

<Posts  props={currentProducts}/>
<Pagination productsPerPage={productsPerPage} totalProducts={products.length} paginate={paginate} />

        </PageLayout>
    )
}



export default ProductsPage;