import "./Dashboard.css"
import shield from "../images/shield.png";
import avatar2 from "../images/avatar2.png"; 
import { useHistory } from "react-router-dom";

export default function SignIn(){

    let history = useHistory();

    return (
        <div>
            <div>
                
                <div className="titlechal"><h1>Challenges</h1></div>

                    <button type="button" className="c1">Do 10 Push Ups</button>
                    <button type="button" className="c2">Talk to a Stranger</button>
                    <button type="button" className="c3">Wake up at 6 AM</button>
                    <button type="button" className="c4">Meditate for an Hour</button>
                    <button type="button" className="c5">Unplug for the Day</button>
                </div>

                <div className="buttons">
                <button className="buttonpic1"><img src={shield} alt="my image" onClick={() =>
                                                                history.push("./registertasks")} /></button>

                <button className="buttonpic2"><img src={avatar2} alt="my image 2" onClick={() =>
                                                                history.push("./profile")} /></button>

                </div>

                

        </div>     
    );
}

