import React from "react";
import styled from "styled-components";
import { Link } from 'react-router-dom';
import { BsPencil, BsFillTrashFill } from 'react-icons/bs';


const StyledCard = styled.div`
    padding: 0.2em;
    border: 1px solid #7a7a7a;
    width: 40%;
    height: 200px;
    margin: 1em;
    font-size: 2em;
    color: black;
    display: flex;
    flex-direction: column;
    gap: .2em;

    p {
    color: #424141;
    margin-bottom: .5em;
    font-size: .5em;
    }

    p span {
    font-weight: bold;
    font-size: 1em;
    }

    .priority {
        font-size: .5em;
        padding: .5em;
        margin-top: 5px;
        position: relative;
        bottom: 2px;
    }

    .priority1 {
            background-color: #4d75fa;
        }

        .priority2 {
            background-color: #fafa4d;
        }

        .priority3 {
            background-color: #fc7d28;
        }

        .priority4 {
            background-color: #fa584d;
        }
`;

const ActivityCardActions = styled.div`
    margin-top: .5em;
    display: flex;
    align-items: center;


    a, button {
        text-decoration: none;
        border: 1px solid #000;
        background-color: #fff;
        color: #000000;
        font-size: .5em;
        padding: .3em .6em;
        margin-right: .5em;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: 0.3s;
    }

    svg {
        margin-right: .5em;
    }
`;
    

type activityCardProps = {
    id : number, 
    description : string, 
    deadline : string, 
    priority : string,
    priorityColor: string,
    handleRemove : (e : number) => void 
}

function ActivityCard({ id, description, deadline, priority, priorityColor,  handleRemove } : activityCardProps) {
    
    const remove = (e : React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        handleRemove(id);
    }

    return (
        <StyledCard>
            <p>
                <span>Description: </span> {description}
            </p>
            <p>
                <span>Deadline: </span> {deadline}
            </p>
            <ActivityCardActions>
                <Link to={`/activities/${id}`}>
                    <BsPencil /> Editar
                </Link>
                <button onClick={remove}>
                    <BsFillTrashFill /> Excluir
                </button>
            </ActivityCardActions>
            
            <div className={`${priorityColor} priority`}>
                #{priority}
            </div>
        </StyledCard>
    )
}

export default ActivityCard;