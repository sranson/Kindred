import React from 'react';
import { useQuery, gql } from '@apollo/client';
import { QUERY_MATCHES } from '../../utils/queries';
import { useParams } from 'react-router-dom';

const Matches = () => {
    // const Matches = () => {
    //     const { username } = useParams();
    //     const { savedCategory } = useParams();

    //     const { loading, data } = useQuery(QUERY_MATCHES, {
    //         variables: { username: username, savedCategory: savedCategory },
    //     },
    //         console.log(data)
    //     );
    //     const matches = data.users.username || {};

    //     if (loading) {
    //         return <div>Loading...</div>
    //     }


    return (
        <main>
            <h1 className="card-header">
                <Matches />
            </h1>
        </main>
    )


}


export default Matches;


