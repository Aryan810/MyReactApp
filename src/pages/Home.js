import {useEffect, useState} from 'react'
// components
import WorkoutDetails from '../components/WorkoutDetails';

const Home = () => {
    const [workouts, setWorkouts] = useState(null);
    //fires a function when a component is rendered !
    useEffect(() => {
        const fetchWorkout = async () => {
            const response = await fetch('/api/workouts');
            const json = await response.json();
            if (response.ok){
                setWorkouts(json);
            }else{

            }
        }   
        fetchWorkout();

    }, []); // [] allows that the function is only fired once !
    return (
        <div className="home">
            <div className="workouts">
                {workouts && workouts.map((workout) => (
                    <WorkoutDetails key={workout._id} workout={workout} />
                ))}
            </div>
        </div>
    )
}

export default Home;