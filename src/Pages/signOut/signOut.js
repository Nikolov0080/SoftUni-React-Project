import React, {  useEffect, useContext } from 'react';
import UserContext from '../../context/context';

const SignOut = (props) => {

const context= useContext(UserContext);

    useEffect(() => {
       context.signOut()
    }, [context]);

    return (
        <div>
            {props.history.push('/')}
        </div>
    )
}

export default SignOut