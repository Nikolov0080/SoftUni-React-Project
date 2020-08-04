import React, { useEffect, useState } from 'react';
import HoneyCard from '../honeyCard/honeyCard';
import { Row } from 'react-bootstrap'

const Posts = ({ props }) => {

    const [items, setItems] = useState([]);
    
    useEffect(() => {
        setItems(props);
    }, [props]);

    return (
        <div>
            <Row className="col-12">
                {items.map((item, i) => {
                    return <HoneyCard key={i} {...item} />
                })}
            </Row>
        </div>
    )
}




export default Posts;
