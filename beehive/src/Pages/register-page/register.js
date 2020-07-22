import React,{Component} from 'react';
import PageLayout from '../../components/pageLayout/pageLayout';



class RegisterPage extends Component{
constructor(props){
    super(props)

    this.state ={
        title:this.props.title
    }
}

    render(){
        return(
            <PageLayout title="Register">
         
            </PageLayout>
        )
    }
}

export default RegisterPage;