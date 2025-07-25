// TaskCard.jsx
import './style.scss';
// import { FaRegUser, FaRegCommentDots, FaRegEye } from 'react-icons/fa';

const TaskCard = (props) => {

    const title = 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor ea nisi consectetur perspiciatis, dolorem, error'
    const test = 'Change top CTA button text';
    
    return (
        <>
            <div className="task-card">

                <div className="meta">
                    <div className="user">
                        {/* <FaRegUser className="icon" /> */}
                        <img src="https://i.pravatar.cc/24?img=3" alt="avatar" />
                        <span>{props.userName}</span>
                    </div>
                    <div className="tags">
                        <span title='Priority' className={`tag ${props.taskPrio}`}>{props.taskPrio}</span>
                    </div>
                </div>

                <div className="title">{props.taskDescription}</div>


                <div className="footer">
                    {/* <div><FaRegCommentDots /> 4</div> */}
                    <div>50%</div>
                    {/* <div><FaRegEye /> 2</div> */}
                    <div>4d</div>
                </div>
            </div>
        </>
    );
};

const Test = () => {
    return (
        <>
            <div className="test">

            </div>
        </>
    )
}

export default TaskCard;
