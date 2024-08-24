import { useState } from 'react'

function PostAdd(props) {
    return (
        <form id='formPostAdd'>
            <ul>
                <li>
                    <label>
                        Author
                    </label>
                    <input type='text' onChange={props.onAuthorChange} />
                </li>
                <li>
                    <label>
                        Description``
                    </label>
                    <textarea id='txtPostDescription' onChange={props.onPostDescriptionChange}></textarea>
                </li>
            </ul>
            
        </form>
    );
}


export default PostAdd;