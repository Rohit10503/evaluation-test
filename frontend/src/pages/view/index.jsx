import React, { useEffect, useState } from "react";
import axios from 'axios';
import "./view.css"

const View = () => {
    const [htmlContent, setHtmlContent] = useState('');

    // const fetchData = async () => {
    //     try {
    //         const response = await fetch("http://127.0.0.1:5000/assemble");
    //         if (!response.ok) {
    //             throw new Error('Network response was not ok');
    //         }

    //         setData(response);
    //         console.log(data);
    //     } catch (error) {
    //         console.error('Error fetching data:', error);
    //     }
    // };

    useEffect(() => {
        // Make a GET request to fetch the HTML content from the backend
        axios.get('http://127.0.0.1:5000/assemble')
            .then(response => {
                // Set the HTML content received from the backend
                setHtmlContent(response.data);
            })
            .catch(error => {
                console.error('Error fetching HTML content:', error);
            });
    }, []);

    return (
        <>
            <h1>View</h1>

            <div>
                {/* Render the HTML content using dangerouslySetInnerHTML */}
                <div className="ex-table" dangerouslySetInnerHTML={{ __html: htmlContent }} />
            </div>

            <div>
                <a href="http://127.0.0.1:5000/assemble" download>Download HTML file</a>
                
            </div>

        </>
    );
};

export default View;
