import React, {useState} from "react";
import Modal from "react-modal";
import Datetime from "react-datetime";
import 'bootstrap/dist/css/bootstrap.min.css';


export default function ({isOpen, onClose, onEventAdded}) {
    const [title, setTitle] = useState("")
    const [start, setStart] = useState("")
    const [end, setEnd] = useState("")


    const onSubmit = (e) => {
        e.preventDefault();

        onEventAdded({
            title,
            start,
            end
        })
        onClose();
    }

    return (
        <div  style={{display: "flex", position: "fixed", color: "black"}} >
            <Modal isOpen={isOpen} onRequestClose={onClose}>

            <form  className="m-2 rounded" onSubmit={onSubmit}>
                <input className="m-2 rounded text-md-center" placeholder="Title and User" value={title} onChange={e => setTitle(e.target.value)}/>
               {/* <input className="m-2 rounded" placeholder="User" value={user} onChange={e => setUser(e.target.value)}/>*/}
                <div style={{color: "black", marginInline:"300px"}}>
                    <label>Start Date</label>
                    <Datetime value={start} onChange={date => setStart(date)}/>
                </div>
                <div style={{color: "black", marginInline:"300px"}}>
                    <label>End Date</label>
                    <Datetime value={end} onChange={date => setEnd(date)}/>
                </div>

                <button className="m-2 rounded">Add event</button>
            </form>

        </Modal></div>

    )
}

