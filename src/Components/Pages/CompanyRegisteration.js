import { Form, Button } from 'react-bootstrap';
import { useState } from 'react';
import Alert from '../AlertBox';

const CompanyRegisteration = () => {

    const [show, setShow] = useState(false);
    const text = "You Have Successfully Registered your self for the Startup ki Duniya Portal";
    return (
        <>
            <Alert show={show} setShow={setShow} text={text} />

            <div className="container bg-dark text-light my-5 py-3">
                <h2>Welcome to Startup ki Duniya ka Portal User!!</h2>
                <h4>We require Following Details from you:</h4>


                <Form>

                    <Form.Group controlId="name">
                        <Form.Label>Company Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter your Name" />
                    </Form.Group>


                    <Form.Group controlId="email">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="For eg: abc@gmail.com" />
                    </Form.Group>
                    <Form.Group controlId="password">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>


                    <Form.Group controlId="retypepassword">
                        <Form.Label>Retype Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>


                    <Button variant="success" className="btn-lg" onClick={() =>
                        setShow(true)
                    }>
                        Register yourself
  </Button>
                </Form>
            </div>
        </>
    )
}

export default CompanyRegisteration;