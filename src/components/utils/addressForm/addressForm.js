import React from 'react'
import { useForm } from 'react-hook-form';
import { Button } from 'react-bootstrap'
import moment from 'moment';



const AddressForm = (props) => {

    const { register, handleSubmit, errors } = useForm();

    const onSubmit = (data) => {






        console.log(data)
    }

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)} >
                <input name="lsdk" ref={register} />

                <Button type="submit">submit</Button>
            </form>
        </div>
    )
}



export default AddressForm

