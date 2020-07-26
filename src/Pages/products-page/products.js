import React,{Component} from 'react';
import PageLayout from '../../components/pageLayout/pageLayout';



class ProductsPage extends Component{
constructor(props){
    super(props)

    this.state ={
        title:this.props.title
    }
}

    render(){
        return(
            <PageLayout title="Our Products">
         
            </PageLayout>
        )
    }
}

export default ProductsPage;