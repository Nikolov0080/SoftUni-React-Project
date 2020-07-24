import React, { Component } from 'react';


class Input extends Component {

    constructor(props) {
      super(props);
    
        this.state = {
            email: this.props.email
        }
        
  
    }

    sendData = (event) => {
        this.props.onChange(event.target.value);
   }


    render() {
        return (
            <div className="form-group">
                <label htmlFor={this.props.id}>{this.props.label}</label>
                <input 
                    name={this.props.name}
                    type={this.props.type}
                    className="form-control"
                    id={this.props.id}
                    placeholder={this.props.placeholder}
                    onChange={this.sendData}
                ></input>
            </div>
        )
    }
}

export default Input;