import React,{Component} from 'react';
import PageLayout from '../../components/pageLayout/pageLayout';



class LoginPage extends Component{
constructor(props){
    super(props)

    this.state ={
        title:this.props.title
    }
}

    render(){
        return(
            <PageLayout title="Login">
         
            </PageLayout>
        )
    }
}

export default LoginPage;

