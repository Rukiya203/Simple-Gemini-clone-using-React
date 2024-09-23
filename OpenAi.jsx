import React, { useState, useRef, useEffect } from 'react';

function OpenAi() {
    const [promptText, setPromptText] = useState(''); // State to manage the input value
    const [responseText, setResponseText] = useState(''); // State to manage the response
    const [error, setError] = useState(''); // State to manage errors
    const [array, setArray] = useState([]);
    const [array2, setArray2] = useState([]);

    

    
    async function fetchData() {
        const apiKey = 'AIzaSyDT2L4bdtUMCNVkuulGA631WLa5ZI2IZPU'; // Replace with your Gemini API key

        try {
            const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    contents: [
                        {
                            parts: [
                                { text: promptText } // Sending the user input as text
                            ]
                        }
                    ]
                }),
            });

            if (response.ok) {
                const data = await response.json();
                const apiResponse = data?.candidates[0]?.content?.parts[0]?.text || 'No response text found';
                console.log('Full response:', data); // Log the full response object

                setArray2(k => [...k, promptText]);

                setResponseText(apiResponse);

                setArray(p => [...p, promptText, apiResponse]);
                setPromptText('');
            } else {
                const errorText = await response.text();
                console.error('Error:', errorText); // Log error for debugging
                throw new Error(`Error ${response.status}: ${errorText}`);
            }
        } catch (error) {
            console.error('Error fetching data:', error.message);
            setError('Failed to fetch response.');
            setResponseText('');
        }
    }

    function handleInputChange(event) {
        setPromptText(event.target.value);
    }

    return (
        <div className='main-div'>
            <div className='response-con'>
                <ul>
                    {array.map((p, index) => (
                        <li key={index} id='list2'  style={{ listStyleType: 'none' }}>
                            {p} <br /><br /><br />
                        </li>
                    ))}
                </ul>
            </div>

            <div className='input-div'>
                <div className='input-text'>
                    <input
                        className='lolo'
                        type="text"
                        value={promptText}
                        onChange={handleInputChange}
                        placeholder="Enter your query"
                    />
                    <button id='but1' onClick={fetchData}>
                        Submit
                    </button>
                </div>
            </div>
        </div>
    );
}

export default OpenAi;
