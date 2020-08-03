import React, { useState, useEffect } from 'react';
import fire from '../../fire/fireAuth';
const SignOut = (props) => {

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const signOut = async () => {
             setLoading(false);
            await fire.signOut()
        }

        signOut()
    }, [loading]);


    if (loading) {
        return (
            <div>
                Loading.....
            </div>
        )

    }

    return (
        <div>
            {props.history.push('/')}
        </div>
    )
}

export default SignOut