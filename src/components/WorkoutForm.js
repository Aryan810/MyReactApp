import { useState } from "react";
import { useWorkoutsContext } from "../hooks/useWorkoutsContext";
const WorkoutForm = () => {
    const { dispatch } = useWorkoutsContext();
    const [title, setTitle] = useState('');
    const [load, setLoad] = useState('');
    const [reps, setReps] = useState('');
    const [error, setError] = useState(null);
    const handleSubmit = async (e) => {
        e.preventDefault();
        const workout = {"title": title, "load": load, "reps": reps};
        const response = await fetch("https://aryanguptasapi.vercel.app/api/workouts", {
            method: 'POST', 
            body: JSON.stringify(workout), 
            headers: {
                // 'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
        });
        const json = await response.json();

        if (!response.ok){
            setError(json.error);
        }else{
            setTitle('');
            setLoad('');
            setReps('');
            dispatch({type: 'CREATE_WORKOUT', payload: json})
            setError("Added Successfully!");
            console.log("New workout added!");
        }
    };
    
    return (
        <form className="create" onSubmit={handleSubmit}>
            <h3>Add a new Workout</h3>
            
            <div className="form-input-div">
                <h4>Title:</h4>
                <input 
                    type="text" 
                    onChange={(e) => setTitle(e.target.value)}
                    value={title}
                    name="Title"
                />
            </div>
            <div className="form-input-div">
                <h4>Load (in Kg):</h4>
                <input 
                    type="number" 
                    onChange={(e) => setLoad(e.target.value)}
                    value={load}
                    name="Load"
                />
            </div>
            <div className="form-input-div">
                <h4>Resp:</h4>
                <input 
                    type="number" 
                    onChange={(e) => setReps(e.target.value)}
                    value={reps}
                    name="Reps"
                />
            </div>
            <button type="submit">Add Workout</button>
            {error && <div className="form-error">{error}</div>}

        </form>
    )
}

export default WorkoutForm;