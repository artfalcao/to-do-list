import React from "react";
import styled from "styled-components";
import LinkButton from "../components/LinkButton";
import checklist from "../img/checklist.png";


const SectionHome = styled.section`
    width: 100%;
    height: 30em;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;

    div img {
        width: 600px;
    }
`;

const HomeContend = styled.div`
    width: 100%;
    height: 20em;
    padding: 1em;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 5px;
    
    h1 {
        font-size: 3em;
        margin-bottom: .5em;
        text-align: center;
    }

    h1 span {
        color: #fff;
        padding: 0.05em .4em;
        background-color:  #2727ff;
    }

    p {
        font-size: 1.5em;
        margin-bottom: .5em;
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