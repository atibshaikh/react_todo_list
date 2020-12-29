import React, {useState, useEffect} from 'react';
import {Checkbox} from '../components/CheckBox';
import { useTasks } from '../components/hooks';
import { collatedTasks } from '../components/constant';
import { getTitle, getCollatedTitle, collatedTasksExist } from '../components/helpers';
import { useSelectedProjectValue, useProjectsValue } from  '../components/context';
import { AddTask } from './AddTask';


export const Tasks  = () => {

    const { selectedProject } = useSelectedProjectValue();
    const { projects } = useProjectsValue();
    const { tasks } = useTasks(selectedProject);

    //console.log("selectedProject task file", selectedProject);



    let projectName = '';

    if(projects && projects.length > 0 && selectedProject && !collatedTasksExist(selectedProject)){
        projectName = getTitle(projects, selectedProject).name;
        // console.log('Project name 1:', projectName);
    }
    if( collatedTasksExist(selectedProject) && selectedProject){
        projectName = getCollatedTitle(collatedTasks, selectedProject).name;
        // console.log('Project name 2:', projectName);
        
    }

    useEffect(() => {
        document.title = `${projectName}: Todolist`;
    })

    return(
     <div className="tasks" data-testid = 'tasks'>
         <h2 data-testid = "project-name">{projectName}</h2>
         <ul className="tasks__list">
             {
                 tasks.map( task => (

                    <li key={`${task.id}`} name={`${task.id}`}>
                       <Checkbox id={task.id} />
                        <span>{task.task}</span>
                    </li>
                 ))
             }
         </ul>
            
           <AddTask /> 
     </div>   
    )
}