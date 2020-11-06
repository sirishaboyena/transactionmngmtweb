import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Form,Button, Card} from 'react-bootstrap'
import './regForm.css'
class regForm extends Component{


    render(){
        return(<div className="container">Student Registration Form
            <Card >
        <Form className="regForm">
            <Form.Group>
                <div className="col-xs-2">
            
            <Form.Label>Name</Form.Label>
            <div >
            <Form.Control className="textBoxStyle"  type="text" placeholder="First Name" />-
            <Form.Control className="textBoxStyle2" type="text" placeholder="Last Name" />
            </div>
            </div>
            <Form.Label>Email</Form.Label>
            <Form.Control classnatype="email" placeholder="Email Address" />
            <Form.Label>Work Phone</Form.Label>
            <div>
            <Form.Control className="textBoxStyle" type="text" placeholder="Area Code" /> - <Form.Control className="textBoxStyle2" type="text" placeholder=" Number" />
            </div>
            <Form.Label>Cell Phone</Form.Label>
            <div>
            <Form.Control  className="textBoxStyle" type="text" placeholder="Country Code" /> - <Form.Control className="textBoxStyle2"  type="text" placeholder="Phone Number" />
            </div>
            <Form.Label>Address</Form.Label>
            <Form.Control type="text" />
            <Form.Text className="text-muted"> Street Address Line 1</Form.Text>
            <Form.Control type="text" />
            <Form.Text className="text-muted"> Street Address Line 2</Form.Text>
            <Form.Control type="text" />
            <Form.Text className="text-muted"> City</Form.Text>
            <Form.Control type="text" />
            <Form.Text className="text-muted"> State </Form.Text>
            <Form.Control type="text" />
            <Form.Text className="text-muted"> Zip Code </Form.Text>
            </Form.Group>
        </Form>
        </Card>
        </div>)
    }


}

export default regForm