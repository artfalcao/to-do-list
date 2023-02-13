import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Activity from "../entities/Activity";
import { Options } from "../types/selectProps";

import { ActivityForm } from "./NewActivity";
import Input from "../components/Input";
import Select from "../components/Select";
import SubmitButton from "../components/SubmitButton";

function ActivityPage() {
  const { id } = useParams();
  const [activity, setActivity] = useState<any>({});

  useEffect(() => {
    fetch(`http://localhost:5000/activities/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((resp) => resp.json())
      .then((data) => {
        setActivity(data);
        //redirect
        //navigate('/activities', /*{state:{ message: 'Projeto criado com sucesso!' }}*/)
      });
  }, [id]);

  const [description, setDescription] = useState(activity._description);
  const [deadline, setDeadline] = useState(activity._deadline);
  const [prioritys, setPrioritys] = useState([]);
  const [activityPriority, setActivityPriority] = useState<Options>(
    activity._priority
  );

  useEffect(() => {
    fetch("http://localhost:5000/prioritys", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setPrioritys(data);
      })
      .catch((err) => console.log(err));
  }, []);

  function editPost(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    console.log("Editou!");
  }

  return (
    <ActivityForm>
      <Input
        type="text"
        text="Description of the Activity"
        name="description"
        placeholder="Insert here the description of the activity"
        handleOnChange={(e) => setDescription(e.target.value)}
        value={description}
      />

      <Input
        type="text"
        text="Deadline"
        name="deadline"
        placeholder="DD/MM/YYYY"
        handleOnChange={(e) => setDeadline(e.target.value)}
        value={deadline}
      />

      <Select
        name="priority"
        text="Priority"
        options={prioritys}
        handleOnChange={(e) =>
          setActivityPriority({
            id: e.target.value,
            name: e.target.options[e.target.selectedIndex].text,
          })
        }
      />

      <SubmitButton handleOnClick={editPost} text="Save" />
    </ActivityForm>
  );
}

export default ActivityPage;
