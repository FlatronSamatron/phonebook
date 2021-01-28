import { useState } from 'react'
import { Button, Modal, Form } from 'react-bootstrap'
import * as Icon from 'react-bootstrap-icons';

const EditButton = ({numbers, id, editButton, index}) => {

    const [number, setNumber] = useState({});

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const numberEdit = () => {
        const member = numbers.filter( member => member.id === id )[0]
        setNumber({
            img: member.img,
            name: member.name,
            surname: member.surname,
            phoneNumber: member.phoneNumber,
            description: member.description, 
        })
        handleShow()
    }

    const saveNumber = (e) => {
        e.preventDefault()
        editButton(number, index)
    }


    return (
        <>
            <div className="icon" onClick={()=>{numberEdit()}}>
                <Icon.Pencil/>
            </div>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                <Modal.Title>Edit Number</Modal.Title>
                </Modal.Header>
                    <Modal.Body>
                        <Form onSubmit={(e)=>saveNumber(e)}>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>User Photo</Form.Label>
                                <Form.Control type="text" placeholder="Photo src" required  
                                value={number.img}
                                onChange={(el)=>setNumber( number => {return {...number, img:el.target.value}})} 
                                />
                            </Form.Group>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>User Name</Form.Label>
                                <Form.Control type="text" placeholder="Name" required 
                                value={number.name}
                                onChange={(el)=>setNumber( number => {return {...number, name:el.target.value}})} 
                                />
                            </Form.Group>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>User Surname</Form.Label>
                                <Form.Control type="text" placeholder="Surname" required
                                value={number.surname}
                                onChange={(el)=>setNumber( number => {return {...number, surname:el.target.value}})} 
                                />
                            </Form.Group>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>User Phone number</Form.Label>
                                <Form.Control type="number" placeholder="Phone number" required 
                                value={number.phoneNumber}
                                onChange={(el)=>setNumber( number => {return {...number, phoneNumber:el.target.value}})} 
                                />
                            </Form.Group>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Description</Form.Label>
                                <Form.Control type="text" placeholder="Short description" required
                                value={number.description}
                                onChange={(el)=>setNumber( number => {return {...number, description:el.target.value}})} 
                                />
                            </Form.Group>
                            <Button variant="secondary" onClick={handleClose}>
                                Close
                            </Button>
                            <Button variant="primary" type="submit" >
                                Save
                            </Button>
                        </Form>
                    </Modal.Body>
            </Modal>
        </>
    )
}

export default EditButton
