import { useState } from 'react'
import { Button, Modal, Form } from 'react-bootstrap'


const AddNumber = ({addNumber}) => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [number, setNumber] = useState({
        img: '',
        name: '',
        surname: '',
        phoneNumber: '',
        description: '',      
    });

    const saveNumber = (e) => {
        e.preventDefault()
        addNumber(number)
        setNumber({
            img: '',
            name: '',
            surname: '',
            phoneNumber: '',
            description: '', 
        })
        handleClose()
    }

    return (
        <div>
            <Button variant="primary" onClick={handleShow} className="addButton">Add Number</Button>{' '}

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                <Modal.Title>Add New Number</Modal.Title>
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
        </div>
    )
}

export default AddNumber
