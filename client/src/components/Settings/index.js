import { useApolloClient, useMutation } from '@apollo/client';
import {SINGLE_UPLOAD_MUTATION, UPDATE_ABOUT} from '../../utils/mutations'
import React, {useState} from 'react';

const Settings = () => {
    const [updateAbout] = useMutation(UPDATE_ABOUT);
    const [about, setAbout] = useState('');
    const handleInput = event => {
        setAbout(event.target.value)
      };

    const aboutSubmit = (e) => {
        try {
            updateAbout({
                variables: {
                    about
                },
            })
        } catch (err) {
            console.log(err);
        }
    }

    // IN THEORY THE FOLLOWING CODE SHOULD PASS THE FILE TO THE SINGLE_UPLOAD_MUTATION WHICH THEN PASSES TO CLOUDINARY. CURRENTLY GIVES ERROR SAYING WE'RE NOT PASSING A STRING BUT WE ARE...
    // const [uploadFileMutation] = useMutation(SINGLE_UPLOAD_MUTATION);
    // const apolloClient = useApolloClient();

    // const onChangeHandler = event => {
    //     var selectedFile = event.target.files[0]
    //     let reader = new FileReader();
    //     reader.onload = function (e) {
    //         let $file = e.target.result
    //         uploadFileMutation({variables: $file}).then(() => {
    //             apolloClient.resetStore();
    //         })
    //     }
    //     reader.readAsDataURL(selectedFile);
    // }
    
    

    return(
        <div>
            <h1>Settings</h1>
            <form onSubmit={aboutSubmit}>
                <textarea value={about} onChange={handleInput}></textarea>
                <input type="submit"/>
            </form>
        </div>
    )
}

export default Settings;