import React, {useState} from 'react'
import  { FaChevronDown, FaInbox, FaRegCalendarAlt, FaRegCalendar } from 'react-icons/fa';
import { AddProject } from '../AddProject';
import { useSelectedProjectValue } from '../context';
import { Projects } from '../Projects';


export const Sidebar =  () => {

    const {setSelectedProject} = useSelectedProjectValue();
    const [active, setActive] = useState('inbox');
    const [showProjects, setShowProjects] = useState(true);
    //console.log('from sidebar', setSelectedProject);

    return(
        <div className="sidebar" data-testid="sidebar">
            <ul className="sidebar__generic">
                <li data-testid= "inbox" className = {active === 'inbox' ? 'active' : undefined} >
                    <div
                        aria-label="show inbox tasks"
                        onClick = { () => {
                            setActive('inbox');
                            setSelectedProject('INBOX');

                        }}
                        onKeyDown = { () => {
                            setActive('inbox');
                            setSelectedProject('INBOX');
                        }}
                        role="button"
                        tabIndex={0}
                    >
                        <span> <FaInbox /></span><span>Inbox</span>
                    </div>
               </li>
                <li data-testid= "today" className = {active === 'today' ? 'active' : undefined} >
                    <div
                    aria-label="show today tasks"
                        onClick = { () => {
                            setActive('today');
                            setSelectedProject('TODAY');
    
                        }}
                        onKeyDown = { () => {
                            setActive('today');
                            setSelectedProject('TODAY');
    
                        }}
                        role="button"
                        tabIndex={0}
                    >

                    <span> <FaRegCalendar /></span><span>Today</span>
                    </div>
               </li>
                <li data-testid= "today" className={active === 'next_7' ? 'active' : undefined}>
                    <div    
                        aria-label="show next 7 days tasks"
                         onClick = { () => {
                            setActive('next_7');
                            setSelectedProject('NEXT_7');
    
                        }}
                        onKeyDown = { () => {
                            setActive('next_7');
                            setSelectedProject('NEXT_7');
                        }}
                        role="button"
                        tabIndex={0}
                    >
                        <span> <FaRegCalendarAlt /></span><span>Next 7 Days</span>     
                    </div>     
               </li>

            </ul>

            <div className="sidebar__middle" 

                onClick= {() => {setShowProjects(!showProjects)}}
                onKeyDown= {() => {setShowProjects(!showProjects)}}
                role="button"
                tabIndex={0}
            
            >
                <span><FaChevronDown className={!showProjects ? 'hidden-projects' : undefined}/></span>
                <h2>Projects</h2>
            </div>

        <ul className="sidebar__projects"> { showProjects && <Projects/> }</ul>
            
            { showProjects && <AddProject /> }
            
        </div>
    );
    
}
