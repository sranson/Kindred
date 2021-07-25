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

// //should handle the function to upload a file... does not work currently
//     const [uploadFileMutation] = useMutation(SINGLE_UPLOAD_MUTATION);
//     const apolloClient = useApolloClient();

//     const onChangeHandler = event => {
//         var selectedFile = event.target.files[0]
//         let reader = new FileReader();
//         reader.onload = function(e) {
//             let newPic = e.target.result;
//             try {
//                 uploadFileMutation({
//                     variables: {
//                         newPic
//                     }
//                 }).then(() => {
//                 apolloClient.resetStore();
//                 })
//             } catch (err) {
//                 console.log(err);
//             }
//         }
//         reader.readAsDataURL(selectedFile);
//     }

    return(
        <div>
            <h1>Settings</h1>
            <form onSubmit={aboutSubmit}>
                <label>Write something about yourself!</label>
                <textarea id="about" value={about} onChange={handleInput}></textarea>
                <input type="submit"/>
            </form>
            {/* <form>
                <input type="file" onChange={onChangeHandler}></input>
            </form> */}
        </div>
    )
}

export default Settings;