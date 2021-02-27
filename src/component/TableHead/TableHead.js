import React from 'react';
import './TableHead.css';

const style = {
    margin: '10px 5px'
}

function TableHead ({sortByName, sortByPhone, sortByEmail, sortByDob}) {



    return (

            <thead>
                <tr>
                <th scope="col">Image</th>
                <th scope="col">Name<span onClick={sortByName}  className="caret" style={style}></span></th>
                <th scope="col">Phone<span onClick={sortByPhone}  className="caret" style={style}></span></th>
                <th scope="col">Email<span onClick={sortByEmail}  className="caret" style={style}></span></th>
                <th scope="col">DOB<span onClick={sortByDob}  className="caret" style={style}></span></th>
                </tr>
            </thead>

    )
}

export default TableHead;