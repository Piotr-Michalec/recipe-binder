import React,{useState,useEffect} from 'react';

const DisplayAll = () =>{

const[testRes, setTestRes]=useState("test state")
const corsAnywhere = 'https://cors-anywhere.herokuapp.com/';
const api = `http://localhost:8080/posts`;



       const callAPI= () =>{
        fetch(`http://localhost:8080/posts/`)
            .then(res => res.text())
            .then(res => console.log('fetch response ',res))    
           
    }

    useEffect(()=>{
        callAPI();
        console.log('useeff2')
    })

    console.log(testRes)
    return(
        <div>
            <h3>all links from server</h3>
            <h1>{testRes}</h1>
        </div>
    );
};
export default DisplayAll;