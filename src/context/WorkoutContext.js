import  {createContext, useReducer} from 'react'

export const WorkoutsContext = createContext(); // as we are not using export default we have to use the exact same function name.

export const workoutsReducer = (state, action) => {
    switch (action.type){
        case 'SET_WORKOUTS':
            return {
                workouts: action.payload
            }
        case 'CREATE_WORKOUT':
            return {
                workouts: [action.payload, ...state.workouts]
                // state has array of prev. workouts
            }
        case 'DELETE_WORKOUT':
            let x = state.workouts;
            return {workouts: x.filter((workout) => (workout._id !== action.payload._id))}
        default:
            return state;
    }
}

// action - has {type: string, payload: data} form.
// state - current state which we are going to change.

export const WorkoutsContextProvider = ({ children }) => {

    const [state, dispatch] = useReducer(workoutsReducer, {
        workouts: null
    });

    return (
        <WorkoutsContext.Provider value={{...state, dispatch}}>
            { children }
        </WorkoutsContext.Provider>
    )
}   