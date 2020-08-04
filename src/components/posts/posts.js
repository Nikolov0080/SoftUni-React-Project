import React, { useEffect, useState } from 'react';
import HoneyCard from '../honeyCard/honeyCard';
import { Row } from 'react-bootstrap'



const Posts = ({ props }) => {

    const [items, setItems] = useState([]);
    const [cleaner, setCleaner] = useState(true);

    useEffect(() => {
        setItems(props);
    }, [props]);


    if (cleaner) {

        setTimeout(() => {
            setCleaner(false)
        }, 200)

        return (
            <div>
                <Row className="col-12">
                    <div>dsdsdsd</div>
                </Row>
            </div>
        )
    }

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
