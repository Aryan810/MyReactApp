import {useEffect} from 'react'
import { useWorkoutsContext } from '../hooks/useWorkoutsContext';

// components
import WorkoutDetails from '../components/WorkoutDetails';
import WorkoutForm from '../components/WorkoutForm';

const Home = () => {

    const {workouts, dispatch} = useWorkoutsContext();
    // here 'workouts' is the current state and we can update it with 'dispatch'

    // const [workouts, setWorkouts] = useState(null);
    //fires a function when a component is rendered !
    useEffect(() => {
        const fetchWorkout = async () => {
            const response = await fetch('/api/workouts/');
            const json = await response.json();
            if (response.ok){
                // setWorkouts(json);
                dispatch({type: 'SET_WORKOUTS', payload: json}); // fires the workoutReducer function which executes the task, here which is 'SET_WORKOUTS'
            }else{
                console.log("BAD RESPONSE!");
            }
        }   
        fetchWorkout();

    }, [dispatch]); // [] allows that the function is only fired once !
    return (
        <div className="home">
            <div className="workouts">
                {workouts && workouts.map((workout) => (
                    <WorkoutDetails key={workout._id} workout={workout} />
                ))}
            </div>
            <WorkoutForm />
        </div>
    )
}

export default Home;