import * as React from 'react';
import './style.css';
import Header from './Components/Header';
import PeopleGallery from './Components/Peoples';

const PeopleList = () => {
    return(
        <>
           <Header></Header>
           <PeopleGallery />
        </>
    )
}

export default PeopleList;