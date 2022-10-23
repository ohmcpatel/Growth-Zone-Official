
import logo from "../images/logo.png";
import "./RegisterInfo.css";
import { useHistory } from "react-router-dom";
import db from "./firebase"
import { getFirestore, collection, addDoc, getDocs} from "firebase/firestore"




export default function RegisterInfo(){
    let history = useHistory();

    // const colRef = collection(db, 'master')

    // getDocs(colRef)
    //     .then((snapshot) => {
    //         console.log(snapshot.docs)
    //     })

    // const addProfileForm = document.querySelector('add')
    // addProfileForm.addEventListener('submit', (e) => {
    //     e.preventDefault()

    //     addDoc(colRef, {
    //         email: addProfileForm.email.value,
    //         uname: addProfileForm.u_name.value,
    //         password: addProfileForm.password.value,
    //     })
    //     .then(() => {
    //         addProfileForm.reset()
    //     })
    // })



    return (
        <div>
            <nav>

                <div className="headlines">
                    <h1 className="login">Sign Up</h1>
                    <button 
                        onClick={() => {
                            history.push("/")
                        }}className="signup">Log In</button>
                </div>

                <img className ="logo" src={logo} alt="Comfy Logo"/>

                <div className = "fields">
                    <input className="u_name" type="text" placeholder="Name" />
                    <input className="email" type="text" placeholder="Email"/>
                    <input className="password" type="password" placeholder="Password" />
                </div>

                <h3 className = "fyp"> <a href="https://www.water.com/selfserve/myonlineaccount/forgot-password/email-verification-sent.jsf" target="_blank">Forgot your password?</a></h3>

                <div className="container">
                    <button onClick={ () => {
                        history.push("/registertasks");


                    }} className="log"> Login </button>
                </div>

            </nav>
        </div>     
    );
}


