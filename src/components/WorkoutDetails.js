
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
    return (
        <div className="workout-details">
            <h4 class="title">{workout.title}</h4>
            <p class="load"><strong>Load (Kg): </strong>{workout.load}</p>
            <p class="reps"><strong>Repetations: </strong>{workout.reps}</p>
            <p class="ctime">{time}
            </p>
        </div>
    )
};

export default WorkoutDetails;