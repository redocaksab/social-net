import { profileAPI, usersAPI } from './../api/api';

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET-USER-PROFILE';
const SET_STATUS = 'SET-STATUS';
const SAVE_PHOTO = 'SAVE-PHOTO';


let initialState = {
    posts: [
        {id: 1, message: 'Hi, how are you?', likesCount: 12},
        {id: 2, message: 'It\'s my first post', likesCount: 11},
        {id: 3, message: 'Blabla', likesCount: 11},
        {id: 4, message: 'Dada', likesCount: 11}
    ],
    profile: null, 
    status: "", 
};

const profileReducer = (state = initialState, action) => {

    switch(action.type) {
        case ADD_POST: {
            let newPost = {
                id: 5,
                message: action.newPostText,
                likesCount: 0
            };
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ''
            };
        }
        case SET_USER_PROFILE: {
            return {...state, profile: action.profile}
        }
        case SET_STATUS: {
            return {
                ...state,
                status: action.status
            }
        }
        case SAVE_PHOTO: {
            return {...state, profile: {...state.profile, photo: action.photo}}
        }
        default:
            return state;
    }
}
const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile});

export const addPostActionCreator = (newPostText) => ({type: ADD_POST, newPostText});

export const setStatus = (status) => ({type: SET_STATUS, status});
export const savePhotoSuccess = (photo) => ({type: SAVE_PHOTO, photo});

export const getUserProfile = (userId) => {
    return (dispatch) => {
        usersAPI.getProfile(userId).then(response => {
            dispatch(setUserProfile(response.data));
        });
    }
}
export const getStatus = (userId) => {
    return (dispatch) => {
        profileAPI.getStatus(userId).then(response => {
            dispatch(setStatus(response.data));
        });
    }
}
export const updateStatus = (status) => {
    return (dispatch) => {
        profileAPI.updateStatus(status).then(response => {
            if(response.data.resultCode === 0)
            dispatch(setStatus(status));
        });
    }
}
export const savePhoto = (photo) => {
    return (dispatch) => {
        profileAPI.savePhoto(photo).then(response => {
            if(response.data.resultCode === 0)
            dispatch(savePhotoSuccess(response.data.photos));
        });
    }
}
export const saveProfile = (profile) => {
    return (dispatch, getState) => {
        profileAPI.saveProfile(profile).then(response => {
            if(response.data.resultCode === 0) {}
           dispatch(getUserProfile(getState().auth.userId));
        });
    }
}
export default profileReducer;