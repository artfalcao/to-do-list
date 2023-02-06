import styled from "styled-components";
import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";

// Components
import Input from "../components/Input";
import Select from "../components/Select";
import SubmitButton from "../components/SubmitButton";
import { Options } from "../types/selectProps";
import Activity from "../entities/Activity";

export const ActivityForm = styled.form`
    width: 200px;
    margin: 1em auto;
    border: 1px solid #272424;
    padding: .5em;
`;


function NewActivity() {

    const [description, setDescription] = useState("");
    const [deadline, setDeadline] = useState("");
    const [prioritys, setPrioritys] = useState([]);
    const [activityPriority, setActivityPriority] = useState<Options>({id: '', name: ''});
    const navigate = useNavigate();

    useEffect(()  => {
        fetch("http://localhost:5000/prioritys", {
        method: "GET",
        headers: {
            'Content-Type': 'application/json'
        }
        })
            .then((res) => res.json())
            .then((data) => {
                setPrioritys(data);
            })
            .catch((err) => console.log(err))
    }, []);

    function submit(e : any) {
        e.preventDefault();
        const newActivity = new Activity(description, deadline, activityPriority);
        saveNewActivity(newActivity);
    }

    async function saveNewActivity(activity : Activity) {
        
        await fetch('http://localhost:5000/activities', {
            method: 'POST',
            headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
            },
            body: JSON.stringify(activity)
        })
        .then((resp) => resp.json())
        .then((data) => {
            console.log(data);
            //redirect
            navigate('/activities', /*{state:{ message: 'Projeto criado com sucesso!' }}*/)
        })
    }

    return (

        <ActivityForm>
             <Input 
                type='text'
                text='Description of the Activity'
                name='description'
                placeholder='Insert here the description of the activity'
                handleOnChange={(e) => setDescription(e.target.value)}
                value={description}
            />

            <Input 
                type='text'
                text='Deadline'
                name='deadline'
                placeholder="DD/MM/YYYY"
                handleOnChange={(e) => setDeadline(e.target.value)}
                value={deadline} 
            />

            <Select 
                name='priority' 
                text='Priority'
                options={prioritys}
                handleOnChange={(e) => setActivityPriority(
                    {
                        id: e.target.value,
                        name: e.target.options[e.target.selectedIndex].text,
                    }
                )}
                value={activityPriority.id}
            />

            <SubmitButton handleOnClick={submit} text="Create Activity"/>
        </ActivityForm>
    );
}

export default NewActivity;