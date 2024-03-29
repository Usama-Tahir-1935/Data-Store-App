import React, { useState, useRef } from "react";
import classes from "./AddUser.module.css";
import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";
import Wrapper from "../Helpers/Wrapper";

const AddUser = (props) => {
    const nameInputRef = useRef();
    const ageInputRef = useRef();

    const [error, setError] = useState();

    const submitHandler = (event) => {
        event.preventDefault();
        const enteredName = nameInputRef.current.value;
        const enteredUserAge = ageInputRef.current.value;
        
        if(enteredName.trim().length === 0 || enteredUserAge.trim().length === 0) {
            setError({
                title: 'Invalid input',
                message: 'please enter a valid name and age (non-empty value)'
            });
            return;
        };
        if(+enteredUserAge < 1) {
            setError({
                title: 'Invalid age',
                message: 'Please enter a valid age (> 0)'
            });
            return;
        };
        props.onAddUser(enteredName, enteredUserAge);
        nameInputRef.current.value = '';
        ageInputRef.current.value = '';
    };

    const onAddError = () => {
        setError(null);
    };
    return (
        <Wrapper>
            {error && (<ErrorModal title = {error.title} message = {error.message} onConfirm = {onAddError}/>)}
            <Card className ={classes.input}>
            <form onSubmit={submitHandler}>
                <label htmlFor="username">Username</label>
                <input id="username" ref={nameInputRef}/>
                <label htmlFor="age" >Age (years old)</label>
                <input id="age" ref={ageInputRef}/>
                <Button type = "submit">Add User</Button>
            </form>
            </Card>
        </Wrapper>
    );
};

export default AddUser;