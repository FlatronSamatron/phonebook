import React from 'react'
import { Table, Badge } from 'react-bootstrap'

import DeleteButton from './DeleteButton'
import EditButton from './EditButton'

const itemList = ({numbers, deleteNumber, editButton}) => {

    const numberList = numbers.map( ({id, img, name, surname, phoneNumber, description}, i) => {
        return <tr key={id + name}>
            <td>{i+1}</td>
            <td><img className="photo" src={img} alt={description}/></td>
            <td style={{textTransform: 'capitalize'}}>{name} {surname}</td>
            <td>{phoneNumber}</td>
            <td><Badge variant="success">{description}</Badge>{' '}</td>
            <td><EditButton numbers={numbers} id={id} editButton={editButton} index={i}/></td>
            <td><DeleteButton id={id} deleteNumber={deleteNumber}/></td>
        </tr>
    })

    return (
        <Table striped hover>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Photo</th>
                    <th>Name Surname</th>
                    <th>PhoneNumber</th>
                    <th>Description</th>
                    <th>Edit</th>
                    <th>Remove</th>
                </tr>
            </thead>
            <tbody>
                {numberList}
            </tbody>
        </Table>
    )
}

export default itemList
