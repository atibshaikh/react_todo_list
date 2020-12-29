import React, { useState } from 'react';
import { firebase } from '../firebase';
import {generatePushId} from '../components/helpers';
import {useProjectsValue} from '../components/context';


export const AddProject = ({ shouldShow = false }) => {

    const [show, setShow] = useState(shouldShow);
    const [projectName, setProjectName] = useState('');

    const projectId = generatePushId();

    const {setProjects} = useProjectsValue();

    const addProject = () =>
        projectName &&
        firebase
            .firestore()
            .collection('projects')
            .add({
                projectid : projectId,
                name:projectName,
                userid : 'qyTfgSrAq^dfkis'
            })
            .then( () => {
                setProjects([]);
                setProjectName([]);
                setShow(false);
            });

            return (
                <div className="add-project" data-testid="add-project">
                    { show && (
                        <div className="add-project__input">
                            <input
                                aria-label="Enter Your project name"
                                value={projectName}
                                onChange = {e => setProjectName(e.target.value)}
                                className="add-project__name"
                                data-testid = "project-name"
                                type="text"
                                placeholder = "Name your project"
                            />
                            <button
                                aria-label="add project"
                                className="add-project__submit" 
                                type="button"
                                onClick = { () => addProject()}
                                data-testid = "add-project-submit"
                            > 
                                Add Project
                            </button>

                            <span
                                aria-label="cancel add project"
                                data-testid="hide-project-overlay"
                                className="add-projcet__cancel"
                                onClick = {()=> setShow(false)}
                                onKeyDown = {()=> setShow(false)}
                                role="button"
                                tabIndex={0}

                            >
                                Cancel
                            </span>
                           

                        </div>
                    )}
                    
                    <span className="add-project__plus">+</span>
                    <span
                        aria-label="add project"
                        data-testid="add-project-action"
                        className="add-projcet__text"
                        onClick = {()=> setShow(!show)}
                        onKeyDown = {()=> setShow(!show)}
                        role="button"
                        tabIndex={0}

                    >
                        Add Project
                    </span>
                </div>
            );

};