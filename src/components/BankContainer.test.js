import React from 'react';
import ReactDOM from 'react-dom';
import { getByDisplayValue, getByLabelText, render, screen } from "@testing-library/react"
import BankContainer from "./BankContainer"

test('Test if the component loads successfuly', ()=>{
    render(<BankContainer/>)
    screen.debug()
})

test('on initial render the all radio button is selected', ()=>{
    render(<BankContainer/>)
    const allRadio = screen.getByDisplayValue('')
    console.log(allRadio)
    expect(allRadio.checked).toEqual(true)
})