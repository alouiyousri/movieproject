import React from 'react'
import './Filterbyname.css'
import{ Form } from 'react-bootstrap'
const Filterbyname = ({inputsearch, setInpoutsearch }) => {
    return (
        <div className='filter_name'>
                <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                    value={inputsearch}
                    onChange={(e) => setInpoutsearch(e.target.value)}
                />
        </div> 
    );
}
export default Filterbyname
