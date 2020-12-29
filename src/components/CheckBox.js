import React from 'react';
import {firebase} from '../firebase';

export const Checkbox = ({ id }) => {
    const archiveTask = () => {
        firebase
        .firestore()
        .collection('tasks')
        .doc(id)
        .update({
            archived:true,
        });
    };
    return(

        <div className="checkbox-holder" data-testid="checkbox-action"
         onClick={() => archiveTask()}
         onKeyDown={() => archiveTask()}
         role="button"
         tabIndex={0}
         aria-label="Check to archive your task"
         
         >
            <span className="checkbox"></span>
        </div>
    )
}

