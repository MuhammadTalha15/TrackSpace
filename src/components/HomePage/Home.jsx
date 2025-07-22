import { React, useEffect, useState } from 'react'
import { Helmet } from 'react-helmet'
import './style.scss'
import Sidebar from '../Sidebar/Sidebar'
import TaskCard from '../Task/taskComp'

const Home = () => {

    const name = 'Muhammad Talha';

    const [counter, setCounter] = useState(1);
    const [todo, setTodo] = useState([]);
    // const [todo, setTodo] = useState([1, 2, 3, 4, 5, 6, 7, 8]);

    const [makeingTask, setMakeingTask] = useState(false);

    const creataTodoTask = async () => {
        setMakeingTask(true);
    }

    return (
        <>
            <Helmet>
                <title>TrackSpace</title>
            </Helmet>

            {makeingTask && <MakeTaskWindow onClose={() => setMakeingTask(false)} />}

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
                                <button onClick={creataTodoTask} id='todo' className="add-tsk">Add new</button>
                            </div>
                            <div className="tsk-arr-cnt">
                                {
                                    todo.map((task, index) => (
                                        <TaskCard userName={name} />
                                    ))
                                }
                            </div>
                        </div>
                        <div className="task-cnt">
                            <div className="tp-bar">
                                <h1 className="tp-bar-head todo">In Progress</h1>
                                <button onClick={creataTodoTask} id='todo' className="add-tsk">Add new</button>
                            </div>
                            <div className="tsk-arr-cnt">
                                {
                                    todo.map((task, index) => (
                                        <TaskCard userName={name} />
                                    ))
                                }
                            </div>
                        </div>
                        <div className="task-cnt">
                            <div className="tp-bar">
                                <h1 className="tp-bar-head todo">Done</h1>
                                <button onClick={creataTodoTask} id='todo' className="add-tsk">Add new</button>
                            </div>
                            <div className="tsk-arr-cnt">
                                {
                                    todo.map((task, index) => (
                                        <TaskCard userName={name} />
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

    return (
        <>
            <section className={defaultClass} >
                <div className="task-mkr-cnt">

                    <button className="close"><span className='close-ico' onClick={focusFunction}></span></button>

                    <h1 className="head">Create Task</h1>

                    <label className='lbl' htmlFor="description">Task Description</label>
                    <textarea name="decription" id="desc" className='desc' placeholder='Task Description'></textarea>

                    <label className='lbl' htmlFor="description">Section</label>
                    
                    <button className="sec">Select Section</button>

                    <label className='lbl' htmlFor="description">Priority</label>
                    <button className="prio">Select Issue Priority</button>

                    <button className="createTask">Create</button>
                </div>
            </section>
        </>
    )
}
