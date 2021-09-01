import React from 'react';
import { createField, Input } from '../../common/FormsControlls/FormsControlls';
import { reduxForm } from 'redux-form';
import { Textarea } from './../../common/FormsControlls/FormsControlls';

const ProfileDataForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div><button>Save</button></div>
            <div>
                <b>Full name</b>: {createField("Full name", "fullName", [], Input)}
            </div>
            <div>
                <b>Looking for a job</b>: {createField("", "lookingForAJob", [], Input, { type: "checkbox" })}
            </div>
            <div>
                <b>My professional skills</b>: {createField("", "lookingForAJobDescription", [], Textarea)}
            </div>
            <div>
                <b>About me</b>: {createField("", "aboutMe", [], Textarea)}
            </div>
        </form>
    )
}

export const ProfileDataReduxForm = reduxForm({
    form: "editProfile",
})(ProfileDataForm);
