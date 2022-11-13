import React, {useRef, useState} from 'react';
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import CalendarAddEvent from "./CalendarAddEvent";
import axios from "axios";
import moment from "moment";


function Calendar() {
    const [modalOpen, setModalOpen] = useState(false)
    const [events, setEvents] = useState([])
    const calendarRef = useRef(null)



    const onEventAdded = e => {
        let calendarApi = calendarRef.current.getApi()
        calendarApi.addEvent({
            start: moment(e.start, "DD MM YYYY HH:mm").toDate(),
            end: moment(e.end, "DD MM YYYY HH:mm").toDate(),
            title: e.title,
            user: e.user
        })
    }

    async function handleEventAdd(data) {
       await axios.post("http://localhost:3001/create-event", data.event)
    }

    async function handleDatesSet(data) {
        const res = await axios.get("http://localhost:3001/get-events?start="+moment(data.start).toISOString()+"&end="+moment(data.end).toISOString())
        setEvents(res.data)
    }

    return (
        <section style={{backgroundColor: "white"}}>
            <button onClick={() => setModalOpen(true)} className="rounded  m-2 dark">Add event</button>

            <div style={{position: "relative", zIndex: 0}} className="text-dark">
                <FullCalendar
                    //schedulerLicenseKey="CC-Attribution-NonCommercial-NoDerivatives"
                    ref={calendarRef}
                    slotEventOverlap={false}
                    titleFormat={{
                        hour12: false,
                        month: 'long',
                        year: 'numeric',
                        day: 'numeric'}}
                    slotLabelFormat={{
                    hour: '2-digit',
                    minute: '2-digit',
                    hour12:false
                }}

                    events={events}
                    plugins={[dayGridPlugin, timeGridPlugin]}
                    initialView="dayGridWeek"
                    eventAdd={e => handleEventAdd(e)}
                    datesSet={(date) => handleDatesSet(date)}
                    headerToolbar={{
                        left: "prev,next",
                        center: "title",
                        right: "today,timeGridDay,timeGridWeek,dayGridMonth"
                    }}

                />
            </div>

            <CalendarAddEvent isOpen={modalOpen} onClose={() => setModalOpen(false)}
                              onEventAdded={e => onEventAdded(e)}/>


        </section>
    );
}


export default Calendar;