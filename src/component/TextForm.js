import React, { useState } from 'react'


export default function TextForm(props) {
    const handleLoClick = () => {
        console.log("clicked")
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to lowercase!", "Success");
        
    }
    const handleReverseClick = () => {
        console.log("clicked")
        let newText = text.split('').reverse().join('');
        setText(newText)
    }
    const handleAlternatingClick = () => {
        console.log("clicked")
        let newText = "";
        for (let i=0; i< text.length; i++ )
            if  (i %2 ===0){
                newText += text[i].toUpperCase();
            }
            else{
                newText += text[i].toLowerCase();
            }


        setText(newText)
    }
    const handleOnchange = (event) => {
        console.log("changes");
        setText(event.target.value);

    }
    const [text, setText] = useState('enter here');

    return (
        <>
            <div>
          


                <h1>{props.heading}</h1>
                <div className="mb-3">

                    <textarea className="form-control" value={text} onChange={handleOnchange} id="mybox" rows="6"></textarea>
                    <button className='btn btn-danger mx-2' onClick={handleLoClick}>Lowercase</button>
                    <button className='btn btn-danger mx-2' onClick={handleReverseClick}>Reversecase</button>
                    <button className='btn btn-danger mx-2' onClick={handleAlternatingClick}>Alternatingcase</button>
                </div>
            </div>
        </>
    )
}
