import React from "react";
import styles from "./FormsControlls.module.css";
import {Field} from "redux-form";

export const Textarea = (props) => {
    const hasError = props.meta.touched && props.meta.error;
    return (
        <div className={styles.formControll + " " + (hasError ? styles.error : "")}>
            <div>
            <textarea {...props.input} placeholder={props.placeholder}/>
            </div>
             {hasError && <span>{props.meta.error}</span>}
        </div>
    );
}

export const Input = (props) => {
    const hasError = props.meta.touched && props.meta.error;
    return (
        <div className={styles.formControll + " " + (hasError ? styles.error : "")}>
            <div>
            <input {...props.input} placeholder={props.placeholder} type={props.type}/>
            </div>
             {hasError && <span>{props.meta.error}</span>}
        </div>
    );
}

export const createField = (placeholder, name, validators, component, props = {}, text = "") => (
    <div>
        <Field placeholder={placeholder} name={name}
               validate={validators}
               component={component}
               {...props}
        /> {text}
    </div>
)

