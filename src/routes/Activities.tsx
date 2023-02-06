import styled from "styled-components";
import { useState, useEffect } from "react";

import LinkButton from "../components/LinkButton";
import ActivityCard from "../components/ActivityCard";
import Activity from "../entities/Activity";


const ActivitiesContainer = styled.div`
    padding: .5em;
`;

const StyledContainer = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin: 0 auto;

    .min-height {
        min-height: 75%; 
    }

    .start {
        justify-content: flex-start;
    }

    .column {
        flex-direction: column;
        justify-content: flex-start;
    }
`;

const TitleContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: .5em;

    h1 {
        font-size: .8em;
    }
`;

function Activities() {
    const [activities, setActivities] = useState<Activity[]>([]);

    useEffect(() => {

        fetch('http://localhost:5000/activities', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })
        .then((resp) => resp.json())
        .then((data) => {
            setActivities(data);
        })
        .catch((err) => console.log(err))

    }, [])

    async function removeActivity(id : number) {
        await fetch(`http://localhost:5000/activities/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
        })
        .then((resp) => resp.json())
        .then((data) => {
            setActivities(activities.filter((activity) => activity._id !== id ))
        })
        .catch((err) => console.log(err))
    }

    return (
        <ActivitiesContainer>
            <TitleContainer>
                <h1>Meus Projetos</h1>
                <LinkButton to='/newactivity' text='Add Activity'/>
            </TitleContainer>
            <StyledContainer className="start">
                {activities.length > 0 &&
                    activities.map((activity) => 
                        (<ActivityCard
                            id={activity._id}  
                            description={activity._description}
                            deadline={activity._deadline}
                            priority={activity._priority.name}
                            priorityColor={`priority${activity._priority.id}`}
                            key={activity._id}
                            handleRemove={removeActivity}
                        />)    
                    )}
            </StyledContainer>
        </ActivitiesContainer>
    )
}

export default Activities;