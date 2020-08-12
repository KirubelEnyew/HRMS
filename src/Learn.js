import React,{Component} from 'react';
import {Button} from 'react-bootstrap';
class Learn extends Component{
    constructor(props){
        super();
        this.state={
            age:props.sh.initialAge
        };
    }
    makeOlder(){
        this.setState({
            age:this.state.age+1
        });
    }
    makeYounger(){
        this.setState({
            age:this.state.age-1
        });
    }
    render(){
        return(
            <div>
               <p>some info {this.props.sh.name[1]}</p>
                <p>You are now {this.state.age}</p>
                <hr/>
               <Button className="btn-lg btn-primary" onClick={this.makeOlder.bind(this)}>Make Me Older</Button>
               <Button className="btn-lg btn-primary" onClick={this.makeYounger.bind(this)}>Make Me Younger</Button>
            </div>
            );
    }
}
export default Learn;