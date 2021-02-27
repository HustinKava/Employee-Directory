import React from 'react';

function formatDate(date) {
    const dateArray = date.split("-");
    const year = dateArray[0];
    const month = dateArray[1];
    const dayArray = dateArray[2].split("T");
    const day = dayArray[0];
    const formattedDate = [month, day, year].join("-");
    return formattedDate;
  }

function TableBody (props) {
    return (
            <tr>
            <th scope='row'><img src={props.image} alt={props.name}/></th>
            <td>{props.name}</td>
            <td>{props.phone}</td>
            <td>{props.email}</td>
            <td>{formatDate(props.dob)}</td>
            </tr>
    )
}

export default TableBody;