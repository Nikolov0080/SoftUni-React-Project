import React, { useEffect, useState } from 'react';
import HoneyCard from '../honeyCard/honeyCard';
import { Spinner } from 'react-bootstrap';

const Posts = ({ props }) => {
    console.log(props.length)

    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setItems(props)

        setTimeout(() => {
            setLoading(false)
        }, 800);
    }, [])


    const printPosts = () => {

    }


    if (loading) {
        return (
            <Spinner animation="border" role="status" size="lg">
                <span className="sr-only">Loading...</span>
            </Spinner>
        )
    } else {
        return (
            <div>
               
            </div>
        )
    }
}

export default Posts;
