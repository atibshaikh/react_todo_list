import React, {useState} from 'react';
import { FaPizzaSlice } from 'react-icons/fa';
import { AddTask } from '../AddTask';

export const Header = ({darkMode, setDarkMode}) => {
    const [shouldShowMain, setShouldShowMain] = useState(false);
    const [showQuickAddTask, setShowQuickAddTask] = useState(false);

    return (
        <header className="header" data-testid="header">
            <nav>
                <div className="logo">
                    <img src="/images/logo.png" alt="Todolist"/>
                </div>
                <div className="settings">
                    <ul>
                        <li data-testid="quick-add-task-action" className="settings__add"
                        >
                           <button type="button"
                            aria-label="Quick Add Task"
                           onClick = { () => {
                                setShowQuickAddTask(true);
                                setShouldShowMain(true);

                            } }

                            onKeyDown = { () => {
                                setShowQuickAddTask(true);
                                setShouldShowMain(true);

                            } } 
                           > +</button>
                        </li>
                        <li 
                        data-testid="dark-mode-action" 
                        className="settings__darkmode"
                        
                        > 
                        <button type="button"
                            aria-label="Darkmode ON/OFF"
                            onClick={ () => setDarkMode(!darkMode) }
                            onKeyDown={ () => setDarkMode(!darkMode) }
                        >

                        <FaPizzaSlice /> 
                        </button>
                        
                        </li>

                    </ul>
                </div>
            </nav>

            <AddTask 
                showAddTaskMain={false}
                shouldShowMain={shouldShowMain}
                showQuickAddTask={showQuickAddTask}
                setShowQuickAddTask = {setShowQuickAddTask}
                 

            />
        </header>
    )
}