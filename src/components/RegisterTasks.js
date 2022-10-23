import { useState } from "react";
import "./RegisterTasks.css"
import { useHistory } from "react-router-dom";
import rarrow from "../images/right_arrow.png";
import larrow from "../images/left_arrow.png";
export default function RegisterTasks(){

    let history = useHistory();


    const [challenges, setChallenges] = useState([]);

    const addToChal = (task) => {
        if (!challenges.includes(task)){
        setChallenges((challenges) =>{
            return[...challenges, task]
        
        })}
    }


    const [btnstate1, setBtnState1] = useState(false);

    function lightUp1(){
        if (!challenges[2]){
            setBtnState1(btnstate1 => !btnstate1);
        }
    }

    let toggleClassCheck1 = btnstate1 ? ' active1': null;

    const [btnstate2, setBtnState2] = useState(false);

    function lightUp2(){
        if (!challenges[2]){
        setBtnState2(btnstate2 => !btnstate2);
        }
    }

    let toggleClassCheck2 = btnstate2 ? ' active2': null;

    const [btnstate3, setBtnState3] = useState(false);


    function lightUp3(){
        if (!challenges[2]){
        setBtnState3(btnstate3 => !btnstate3);
        }
    }

    let toggleClassCheck3 = btnstate3 ? ' active3': null;


    const [btnstate4, setBtnState4] = useState(false);


    function lightUp4(){
        if (!challenges[2]){
        setBtnState4(btnstate4 => !btnstate4);
        }
    }

    let toggleClassCheck4 = btnstate4 ? ' active4': null;


    const [btnstate5, setBtnState5] = useState(false);


    function lightUp5(){
        if (!challenges[2]){
        setBtnState5(btnstate5 => !btnstate5);
        }
    }

    let toggleClassCheck5 = btnstate5 ? ' active5': null;






    return (
        <div className="Page">
            <h1 className="title">Areas of Improvement</h1>
            <div className="tasks">
                <button onClick={() => {addToChal("Fitness"); {lightUp1()}}} id="task1" className={`btn${toggleClassCheck1}`}> <h1>Fitness</h1></button>
                <button onClick={() => {addToChal("Stress"); {lightUp2()}}} id="task2" className={`btn${toggleClassCheck2}`}><h1>Stress</h1></button>
                <button onClick={() => {addToChal("Social Anxiety"); {lightUp3()}}} id="task3" className={`btn${toggleClassCheck3}`}><h1>Social Anxiety</h1></button>
                <button onClick={() => {addToChal("Mindfulness"); {lightUp4()}}} id="task4" className={`btn${toggleClassCheck4}`}><h1>Mindfulness</h1></button>
                <button onClick={() => {addToChal("Discipline"); {lightUp5()}}} id="task5" className={`btn${toggleClassCheck5}`}><h1>Discipline</h1></button>

            </div>
            
            <div className="navigate">
                <button onClick={() => {
                            history.push("/signup")
                        }}className="button1"><img src={larrow} /></button>
                <button onClick={() => {
                            history.push("/dashboard")
                        }}className="button2"><img src={rarrow} /></button>     
                
                          
            </div>
        </div>     
    );
}
