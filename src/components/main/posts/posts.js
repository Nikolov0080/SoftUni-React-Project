import React, { useEffect, useState } from 'react';
import HoneyCard from '../honeyCard/honeyCard';
import { Row, Col, Button } from 'react-bootstrap'

const Posts = ({ props }) => {

    const [items, setItems] = useState([]);

    useEffect(() => {
        setItems(props);
    }, [props,items]);

    const sort = () => {
        setItems(items.sort((a, b) => { return a.price - b.price }))
        console.log(items)
    }


    return (
        <div>
            <div className="text-center container">
                <Button onClick={sort} className="mr-5">Sort by Name</Button>
                <Button>Sort by price</Button>
            </div>

            <Row className="col-12" style={{ margin: "0 auto" }}>
                {items.map((item, i) => {
                    return (
                        <Col key={i} lg="auto" >
                            <HoneyCard  {...item} />
                        </Col>
                    )
                })}
            </Row>
        </div>
    )
}

export default Posts;