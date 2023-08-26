import * as React from 'react';
import './style.css';
import Header from './Components/Header';
import PeopleGallery from './Components/Peoples';

const PeopleList = () => {
    return(
        <>
           <Header></Header>
           <h1>Hi There</h1>
           <PeopleGallery />
        </>
    )
}

export default PeopleList;