import { React, useEffect, useState } from 'react'
import { Helmet } from 'react-helmet'
import './style.scss'
import Sidebar from '../Sidebar/Sidebar'
import TaskCard from '../Task/taskComp'

const Home = () => {

    const name = 'Muhammad Talha';

    const [counter, setCounter] = useState(1);
    const [todo, setTodo] = useState([]);
    const [inProg, setInProg] = useState([]);
    const [done, setDone] = useState([]);

    
    const [makeingTask, setMakeingTask] = useState(false);
    
    const creataTodoTask = async () => {
        setMakeingTask(true);
    }
    
    // Receving Data from Child
    
    const [receivedObject, setReceivedObject] = useState(null);
    
    const handleChildData = (dataObject) => {
        setReceivedObject(dataObject);
        switch (dataObject.section) {
            case 'To Do':
                setTodo(prev => [...prev, dataObject]);
                break;
            case 'In Progress':
                setInProg(prev => [...prev, dataObject]);
                break;
            case 'Done':
                setDone(prev => [...prev, dataObject]);
                break;
            default:
                console.warn('Unknown Inputes');
                break;
        }

    }

    // console.log(taskPriority);

    return (
        <>
            <Helmet>
                <title>TrackSpace</title>
            </Helmet>

            {makeingTask && <MakeTaskWindow onClose={() => setMakeingTask(false)} onDataSend={handleChildData} />}

            <section className="hero">
                <Sidebar />
                <section className="home-dash">
                    <div className="hm-hero-banner">
                        <div className="txt-cnt">
                            <h1 className="hm-hero-banenr-name">{`Welcome, ${name}`}</h1>
                            <h2 className="date">Sunday, July 23</h2>
                        </div>

                    </div>

                    <div className="tsk-cont-cnt">
                        <div className="task-cnt">
                            <div className="tp-bar">
                                <h1 className="tp-bar-head todo">To Do</h1>
                                <button onClick={creataTodoTask} id='todo' className="add-tsk"><span className='add-btn-ico'></span></button>
                            </div>
                            <div className="tsk-arr-cnt">
                                {
                                    todo.map((task, index) => (
                                        <TaskCard key={index} userName={name} taskDescription={task.description} taskPrio={task.priority}/>
                                    ))
                                }
                            </div>
                        </div>
                        <div className="task-cnt">
                            <div className="tp-bar">
                                <h1 className="tp-bar-head todo">In Progress</h1>
                                <button onClick={creataTodoTask} id='todo' className="add-tsk"><span className='add-btn-ico'></span></button>
                            </div>
                            <div className="tsk-arr-cnt">
                                {
                                    inProg.map((task, index) => (
                                        <TaskCard key={index} userName={name} taskDescription={task.description} taskPrio={task.priority}/>
                                    ))
                                }
                            </div>
                        </div>
                        <div className="task-cnt">
                            <div className="tp-bar">
                                <h1 className="tp-bar-head todo">Done</h1>
                                <button onClick={creataTodoTask} id='todo' className="add-tsk"><span className='add-btn-ico'></span></button>
                            </div>
                            <div className="tsk-arr-cnt">
                                {
                                    done.map((task, index) => (
                                        <TaskCard key={index} userName={name} taskDescription={task.description} taskPrio={task.priority}/>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                </section>
            </section>
        </>
    )
}

export default Home;

const MakeTaskWindow = (props) => {

    const [defaultClass, setDefaultClass] = useState('main-window-active');

    const focusFunction = () => {
        if (defaultClass == 'main-window-active') {
            setDefaultClass('main-window');
        }
        else {
            setDefaultClass('main-window-active');
        }

        setTimeout(() => {
            props.onClose();
        }, 300);
    }

    const [section, setSection] = useState(['To Do', 'In Progress', 'Done']);
    const [prio, setPriority] = useState(['Low', 'Medium', 'High']);

    const [taskDescription, setTaskDescription] = useState('');
    const [selectedSection, setSelectedSection] = useState('');
    const [selectedPriority, setSelectedPriority] = useState('');

    const taskObj = {
        description: taskDescription,
        section: selectedSection,
        priority: selectedPriority
    }

    // Sending Objevt Data to Parent

    const sendData = () => {
        props.onDataSend(taskObj);
        focusFunction();
    }

    return (
        <>
            <section className={defaultClass} >
                <div className="task-mkr-cnt">

                    <button title='Close' className="close" onClick={focusFunction}><span className='close-ico'></span></button>

                    <h1 className="head">Create Task</h1>

                    <label className='lbl' htmlFor="description">Description</label>
                    <textarea name="decription" id="desc" className='desc' placeholder='Task Description' value={taskDescription} onChange={(e) => setTaskDescription(e.target.value)}></textarea>

                    <label className='lbl' htmlFor="description">Section</label>
                    <select name="sec" id="sec" className="sec" defaultValue="" onChange={(e) => { setSelectedSection(e.target.value) }}>
                        <option value="" disabled hidden>Select Section</option>
                        {
                            section.map((section, index) => (
                                <option className="sec-option" value={section}>{section}</option>
                            ))
                        }
                    </select>

                    <label className='lbl' htmlFor="description">Priority</label>
                    <select name="prio" id="prio" className="prio" defaultValue="" onChange={(e) => { setSelectedPriority(e.target.value) }}>
                        <option value="" disabled hidden>Select Issue Priority</option>
                        {
                            prio.map((priority, index) => (
                                <option className="prio-option" value={priority}>{priority}</option>
                            ))
                        }
                    </select>

                    <button className="createTask" onClick={sendData}>Create</button>
                </div>
            </section>
        </>
    )
}
