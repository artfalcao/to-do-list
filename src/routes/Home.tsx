import React from "react";
import styled from "styled-components";
import LinkButton from "../components/LinkButton";
import checklist from "../img/checklist.png";


const SectionHome = styled.section`
    width: 100%;
    display: flex;
    flex-direction: row;

    div img {
        width: 180px;
        margin: .5em 0;
    }
`;

const HomeContend = styled.div`
    width: 400px;
    padding: 1em;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 5px;
    
    h1 {
        font-size: 1em;
        margin-bottom: .5em;
        text-align: center
    }

    h1 span {
        color: #fff;
        padding: 0.05em 0.1em;
        background-color:  #2727ff;
    }

    p {
        font-size: .5em;
        margin-bottom: .1em;
        color: #7b7b7b;
        text-align: center;
    }
`;


function Home() {
    return (
        <SectionHome>
             <div>
                <img src={checklist} alt='Checklist'/>
            </div>
            
            <HomeContend>
                <h1>Welcome to <br></br><span>toDo-List</span></h1>

                <p>Start to gerenciate your activitys!</p>

                <LinkButton to='/newactivity' text='Add Activity'/>
            </HomeContend>

        </SectionHome>
    );
}

export default Home;