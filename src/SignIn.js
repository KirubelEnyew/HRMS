import React,{Component} from 'react';
import {Button, Form, FormControl} from 'react-bootstrap';
import "./SignIn.css"
class SignIn extends Component{
    render(){
        return(
            <div>
                <body class="text-center">
                    <div class="container d-flex justify-content-center jumbotron vertical-center">
                    <Form>
                        <FormControl type="text" placeholder="User Name" />
                        <FormControl type="password" placeholder="Password" />
                        <Button variant="submit" className="btn-lg btn-primary btn-block">Sign In</Button>     
                    </Form>
                    </div>
                </body>
            </div>
            );
    }
}
export default SignIn;