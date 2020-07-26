import React,{Component} from 'react';
import PageLayout from '../../components/pageLayout/pageLayout';



class OrderPage extends Component{
constructor(props){
    super(props)

    this.state ={
        title:this.props.title
    }
}

    render(){
        return(
            <PageLayout title="Place Your order">
         
            </PageLayout>
        )
    }
}

export default OrderPage;