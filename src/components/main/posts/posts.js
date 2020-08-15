import React, { useEffect, useState } from 'react';
import HoneyCard from '../honeyCard/honeyCard';
import { Row, Col, Button, Dropdown } from 'react-bootstrap'

const Posts = ({ props }) => {

    const [items, setItems] = useState([]);
    const [select, setSelect] = useState('Name A-Z');

    useEffect(() => {
        setItems(props);
    }, [props]);

    const sortByPriceDesc = () => {
        const sorted = [...items].sort((a, b) => { return a.price - b.price });
        setItems(sorted);
        setSelect('Price - to +');
    }

    const sortByPriceAsc = () => {
        const sorted = [...items].sort((a, b) => { return b.price - a.price });
        setItems(sorted);
        setSelect('Price - to +');
    }

    const sortByName = () => {
        const sorted = [...items].sort((val, b) => {
            return val.name.localeCompare(b.name)
        });
        setItems(sorted)
        setSelect('Name A-Z');
    }

    return (
        <div>
            <div className="text-center container">
                <Dropdown>
Sort By
                    <Dropdown.Toggle className="ml-3" variant="success" id="dropdown-basic">
                        {select}
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item onClick={sortByPriceDesc}>Price - to +</Dropdown.Item>
                        <Dropdown.Item onClick={sortByPriceAsc}>Price + to -</Dropdown.Item>
                        <Dropdown.Item onClick={sortByName}>Name A-Z</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
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