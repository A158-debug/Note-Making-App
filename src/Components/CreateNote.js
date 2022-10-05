import React from 'react'

const CreateNote = ({saveHandler,setInputText,inputText}) => {
   
   
    return (
        <div className="note" style={{ background: "rgba(255, 255, 255, 0)" }}>
            <textarea
                cols="10"
                rows="5"
                placeholder="Type...."
                value={inputText}
                onChange={e=>setInputText(e.target.value)}
            ></textarea>
            <div className="note__footer">
                <button className="note__save" onClick={saveHandler}>Save</button>
            </div>
        </div>
    );
}

export default CreateNote

