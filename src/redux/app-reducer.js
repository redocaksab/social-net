import { getAuthUserData } from "./auth-reducer";

const SET_INITIALIZED = 'SET-INITIALIZED';


let initialState = {
    initialized: false,
};

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_INITIALIZED:

            return {
                ...state,
                initialized: true,
            }

        default:
            return state;
    }
}

export const setIntitialize = () => ({type: SET_INITIALIZED});


export const initializeAPP = () => {
    return (dispatch) => {
       let promise = dispatch(getAuthUserData());
       Promise.all([promise]).then(() => {
           dispatch(setIntitialize());
       });
    }
}
export default appReducer;