import React from 'react';

function ApiCall (props) {
    return (
            <tbody>
                <tr>
                <th scope='row'><img src={props.image} alt={props.name}/></th>
                <td>{props.name}</td>
                <td>{props.phone}</td>
                <td>{props.email}</td>
                <td>{props.dob}</td>
                </tr>
            </tbody>
    )
}

export default ApiCall;