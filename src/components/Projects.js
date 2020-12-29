import React, { useState } from 'react';
import { useProjectsValue, useSelectedProjectValue } from "./context";
import { IndividualProject } from '../components/layout/IndividualProject';



export const Projects = ( {activeValue = true} ) => {

    const [active, setActive] = useState(activeValue);
    const { setSelectedProject } = useSelectedProjectValue();
    const { projects }  = useProjectsValue();
    // console.log(projects);
    return(
        projects &&
        projects.map( project => (
           
            <li
                key={project.docId}
                data-doc-id={project.docId}
                data-testid="project-action-parent"
                className = {
                    active ===  project.projectid
                    ? 'active sidebar__project'
                    : 'sidebar__project'
                }
               
            >   
            <div
                role="button"
                tabIndex={0}
                onKeyDown = { () => {
                    setActive(project.projectid)
                    setSelectedProject(project.projectid)
                }}
                onClick= { () => {
                    setActive(project.projectid)
                    setSelectedProject(project.projectid)
                }}
                aria-label={`select project ${project.name}`}
            >
                <IndividualProject project={project}/>
            </div>
                
              
            </li>
        ))
    )

}