import React, { useState, useEffect } from 'react';

const ProfileStatusWithHooks = (props) => {
    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(props.status);

    const activateEditMode = () => {
        setEditMode(true);
    }
    const deactivateEditMode = () => {
        setEditMode(false);
       props.updateStatus(status);
    }

    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value);
    }
    useEffect(() => {
        setStatus(props.status);
    }, [props.status]);
    return <>
        {!editMode &&
            <div>
               <b>Status</b>: <span onDoubleClick={activateEditMode}>{props.status || "-----"} </span>
            </div>}
        {editMode &&
            <div>
                <input onChange={onStatusChange} autoFocus onBlur={deactivateEditMode} value={status} />
            </div>
        }
    </>

}

export default ProfileStatusWithHooks;