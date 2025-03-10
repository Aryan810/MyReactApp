import { useWorkoutsContext } from "../hooks/useWorkoutsContext";

const WorkoutDetails = ({workout}) => {
    var created_date = new Date(workout.createdAt);
    var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    var year = created_date.getFullYear();
    var month = months[created_date.getMonth()];
    var date = created_date.getDate();
    var hour = created_date.getHours();
    var min = created_date.getMinutes();
    var sec = created_date.getSeconds();
    var time = date + ' ' + month + ' ' + year + ' ' + hour + ':' + min + ':' + sec ;

    const {dispatch} = useWorkoutsContext();
    const handleOnClick = async () => {
        const response = await fetch(`https://aryanguptasapi.vercel.app/api/workouts/${workout._id}`, {
            method: 'DELETE'
        });

        const json = await response.json();
        if (response.ok){
            dispatch({type: 'DELETE_WORKOUT', payload: json});
        }
    }

    return (
        <div className="workout-box">
            <h3 class="title">{workout.title}</h3>
            <div className="workout-main">
                <div className="workout-details">
                    <p class="load"><strong>Load (Kg): </strong>{workout.load}</p>
                    <p class="reps"><strong>Repetations: </strong>{workout.reps}</p>
                    <p class="ctime">{time}</p>
                </div>
                <div className="workout-oper">
                    <button type="button" class="deletebtn" onClick={handleOnClick}>Delete</button>
                </div>
            </div>
        </div>
    )
};

export default WorkoutDetails;