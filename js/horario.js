'use strict'

//import {pesquisarHorario} from './apiRelatorio.js'

export const getValuesOfInputTimeDate = () => {

   console.log(pesquisarHorario());

    const labelCalendar = document.getElementById("label_calendar");
    const inputCalendar = document.getElementById("date_input");

    const labelTimeInicio = document.getElementById("label_time_inicio");
    const timeInputInicio = document.getElementById("time_input_inicio");

    const labelTimeTermino = document.getElementById("label_time_termino");
    const timeInputTermino = document.getElementById("time_input_termino");

    const labelTimeDesconto = document.getElementById("label_time_desconto");
    const timeInputDesconto = document.getElementById("time_input_desconto");


    labelCalendar.addEventListener('click', () => {
        inputCalendar.showPicker();
    })

    labelTimeInicio.addEventListener('click', () => {
        timeInputInicio.showPicker();
    })

    labelTimeTermino.addEventListener('click', () => {
        timeInputTermino.showPicker();
    })

    labelTimeDesconto.addEventListener('click', () => {
        timeInputDesconto.showPicker();
    })


    inputCalendar.addEventListener('blur', () => {
        const myInputCalendarValue = inputCalendar.value;
        const myInputCalendarValueBR = inputCalendar.value.substring(8, 10) + '/' + myInputCalendarValue.substring(5, 7);
        console.log(myInputCalendarValue);
        console.log(myInputCalendarValueBR);
    })

    
    timeInputInicio.addEventListener('blur', () => {
        const myInputValue = timeInputInicio.value;
        console.log(myInputValue.substring(0, 2) + 'h' + myInputValue.substring(3, 5));
    })

    timeInputTermino.addEventListener('blur', () => {
        const myInputValue = timeInputTermino.value;
        console.log(myInputValue.substring(0, 2) + 'h' + myInputValue.substring(3, 5));
    })

    timeInputDesconto.addEventListener('blur', () => {
        const myInputValue = timeInputDesconto.value;
        console.log(myInputValue.substring(0, 2) + 'h' + myInputValue.substring(3, 5));
    })
}

