import "./Setting.css"
import { useHistory } from "react-router-dom";
import avatar2 from "../images/avatar2.png";
import home from "../images/home.png";

export default function Setting(){
    let history = useHistory();

    return(
        <div className="body">
            <h1>Settings</h1>
            <h2>Name: Tim Byers</h2>
            <img className="avatar" src={avatar2} alt="avatar2"/>
            <h3>Email: timbyers@gmail.com</h3>
            <h3>Password: daisybyers92</h3>
            <h3>Tasks Completed: None</h3>
            <h3>Tier: Silver II</h3>
            <h3>Friends: John, Poe</h3>
            <h3>Time Spent: 02 Hours 50 Minutes</h3>
            <button className="home"><img src={home} alt="my image" onClick={() =>
                                                                history.push("./dashboard")} /></button>


        </div>
    );
}