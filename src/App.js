import logo from './logo.svg';
import './App.css';
import * as React from "react"
import {Routes, Route, Link} from 'react-router-dom';
import {useEffect, useState} from "react";

export default function App() {
return (
    <div className="App">
        <Routes>
            <Route path="/" element = {<Home/>}/>
            <Route path="/About/" element = {<About/>}/>
            <Route path="/Privacy/" element = {<Privacy/>}/>
        </Routes>
    </div>
);

}


function Home(){
    const [name, setName] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    useEffect(() => { 
        fetch('https://api.github.com/users/danthu501/repos')
        .then(res  => res.json())
        .then(data => {
            setName((prevname)=>[
                ...prevname, 
                {
                    name: data[0].name, 
                    description: data[0].description,
                    html_url: data[0].html_url
                },
                {
                    name: data[1].name, 
                    description: data[1].description,
                    html_url: data[1].html_url
                },
                {
                    name: data[2].name, 
                    description: data[2].description,
                    html_url: data[2].html_url
                },
                {
                    name: data[3].name, 
                    description: data[3].description,
                    html_url: data[3].html_url
                },
                {
                    name: data[4].name, 
                    description: data[4].description,
                    html_url: data[4].html_url
                }
            ]
            );
        setIsLoading(false)
        } );
    },[]);

return(
    <div className="App">

        <nav>
            <ul className="my-list">
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/About">About</Link>
                </li>
                <li>
                    <Link to="/privacy">Privacy</Link>
                </li>
            </ul>
        </nav>
        <main>
            
            <h2>Mina publika github</h2>
            {isLoading && <div>Data is curently being Loaded.....</div>}
            {name.map((names)=>(
            <div className='container'>
            <h3>
            {names.name}
            </h3>
            <p>{names.description}</p>
            <p><a href={names.html_url}>{names.html_url}</a></p>
            </div>
        ))
        }
    </main>

</div>
)


};

function About(){
return(
<div className='App'>
        <nav>
            <ul className="my-list">
                <li>
                <Link to="/">Home</Link>
                </li>
                <li>About</li>
                <li>
                <Link to="/privacy">Privacy</Link>
                </li>
            </ul>
        </nav>
</div>)
};

function Privacy(){
    return(<div className='App'>
            <nav>
                <ul className="my-list">
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="About">About</Link>
                    </li>
                    <li>
                        Privacy
                    </li>
                </ul>
            </nav>
        </div>)
}


