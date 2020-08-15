import React, { useEffect, useState, useRef } from 'react';
import HoneyCard from '../honeyCard/honeyCard';
import { Row, Col, Dropdown } from 'react-bootstrap'
import Input from '../../utils/input/input';

const Posts = ({ props }) => {

    const [items, setItems] = useState([]);
    const [select, setSelect] = useState('Name A-Z');
    const inputText = useRef('');
    const searchResult = useRef('');
    const forFilter = useRef({});

    useEffect(() => {
        setItems(props);
        forFilter.current = props;
    }, [props]);

    const sortByPriceDesc = () => {
        const sorted = [...items].sort((a, b) => { return a.price - b.price });
        setItems(sorted);
        forFilter.current = sorted;
        setSelect('Price - to +');
    }

    const sortByPriceAsc = () => {
        const sorted = [...items].sort((a, b) => { return b.price - a.price });
        setItems(sorted);
        forFilter.current = sorted;
        setSelect('Price + to -');
    }

    const sortByName = () => {
        const sorted = [...items].sort((val, b) => {
            return val.name.localeCompare(b.name)
        });
        setItems(sorted)
        forFilter.current = sorted;
        setSelect('Name A-Z');
    }

    const search = (event) => {
        inputText.current = event.target.value.toLowerCase();

        console.log(inputText.current)
        searchResult.current = forFilter.current.reduce((acc, curr) => {

            if (curr.name.toLowerCase().includes(inputText.current) || // by name
                curr.description.toLowerCase().includes(inputText.current) || // by description
                curr.price.toString().toLowerCase().includes(inputText.current) // by price
            ) {
                acc.push(curr)
            }
            return acc
        }, []);

        setItems(searchResult.current);
    }

    return (
        <div>
            <div className="text-center container row">

                <div className='col text-right mt-4'>
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

                <div className='col text-center'>
                    <Input
                        placeholder="Search "
                        type="text"
                        onChange={search}
                    />
                </div>

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