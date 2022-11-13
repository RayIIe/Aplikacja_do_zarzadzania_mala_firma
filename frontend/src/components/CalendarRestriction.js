function isOverlapping(event){
    let array = calendar.fullCalendar('clientEvents');
    for(let i in array){
        if(array[i].id !== event.id){
            if(!(Date(array[i].start) >= Date(event.end) || Date(array[i].end) <= Date(event.start))){
                return true;
            }
        }
    }
    return false;
}