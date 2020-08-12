import React, { useEffect, useState } from 'react';
import HoneyCard from '../honeyCard/honeyCard';
import { Row, Col } from 'react-bootstrap'

const Posts = ({ props }) => {

    const [items, setItems] = useState([]);

    useEffect(() => {
        setItems(props);

    }, [props]);

    return (
        <div>
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