import { useHistory } from "react-router-dom";
import silverstars from "../images/silverstar.png";
import setting from "../images/setting.png";
import avatar2 from "../images/avatar2.png"
import "./Profile.css";



export default function Profile(){
    
    let history = useHistory();

    return(
    <div>
        <button className="setting"><img src={setting} alt="my image" onClick={() =>
                                                                history.push("./Setting")} /></button>
        <img className="second_avatar" src={avatar2} alt="Avatar2" />
        <h1>Tim</h1>

        <div className="chals">
            <h2>Fitness</h2>
            <h2>Stress</h2>
            <h2>Social Anxiety</h2>
        </div>
        <div className="exit"><button onClick={()=>{
            history.push("./dashboard")
        }}> Return </button></div>
        <img className="silver_star" src={silverstars} alt="SilverStar" />
        <img className="silver_star" src={silverstars} alt="SilverStar" />

    </div>
    )
}