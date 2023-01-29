import {React,useState}  from "react";
import ReactDOM  from "react-dom/client";
import "./counters.css"

const Greeting = () =>{
    const incrementer = () => {
        setc(count+=1);
    }
    const incrementer1 = () => {
        setc1(count1+=1);
    }
    let [count,setc] = useState(0);
    let [count1,setc1] = useState(0);
    return (
        <div className="something">
            <h1 className="h11">Counters that update together</h1><br></br>
            <button onClick={incrementer} className="butt">
                clicked {count} me!
            </button><br/>
            <button onClick={incrementer1} className="butt">
                clicked {count} me!
            </button>
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Greeting/>);
