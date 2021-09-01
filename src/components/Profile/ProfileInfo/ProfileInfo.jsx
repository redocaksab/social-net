import React, { useState } from 'react';
import s from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatusWithHooks from './PofileStatusWithHooks';
import userPhoto from "../../../assets/images/user.png";
import { ProfileDataReduxForm } from './ProfileDataForm';

const ProfileData = (props) => {
    return (
        <div>
            {props.isOwner && <div><button onClick={props.activateEditMode}>Edit</button></div>}
            <div>
                <b>Full name</b>: {props.profile.fullName}
            </div>
            <div>
                <b>Looking for a job</b>: {props.profile.lookingForAJob ? "yes" : "no"}
            </div>

            <div>
                <b>My professional skills</b>: {props.profile.lookingForAJobDescription}
            </div>
            <div>
                <b>About me</b>: {props.profile.aboutMe}
            </div>
        </div>
    )
}

const ProfileInfo = (props) => {

    let [editMode, setEditMode] = useState(false);

    if (!props.profile) {
        return <Preloader />
    }
    const onMainPhotoSelected = (e) => {
        if (e.target.files.length) {
            props.savePhoto(e.target.files[0])
        }
    }

    const onSubmit = (formData) => {
        props.saveProfile(formData);
        setEditMode(false);
    }

    return (
        <div>
            <div className={s.descriptionBlock}>
                <img src={props.profile.photos.large || userPhoto} className={s.mainPhoto} />
                {props.isOwner && <input type={"file"} onChange={onMainPhotoSelected} />}
                {editMode ? <ProfileDataReduxForm initialValues={props.profile} onSubmit={onSubmit} /> : <ProfileData activateEditMode={() => { setEditMode(true) }} isOwner={props.isOwner} profile={props.profile} />}

                <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus} />
            </div>
        </div>
    )
}



export default ProfileInfo;