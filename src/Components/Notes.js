import React, { useState, useEffect } from "react";
import Note from "./Note"
import CreateNote from "./CreateNote"
import { v4 as uuid } from "uuid";

const Notes = () => {
    const [savedNotes] = useState(localStorage.getItem('Notes'))
    const [notes, setNotes] = useState(savedNotes ? JSON.parse(savedNotes) : [])
    const [inputText, setInputText] = useState("")


    //saving the data in the localStorage
    useEffect(() => {
        localStorage.setItem("Notes", JSON.stringify(notes))
    }, [notes])

    const deleteNote = (id) => {
        const filteredNotes = notes.filter((note) => note.id !== id);
        setNotes(filteredNotes);
    };
    const saveHandler = () => {
        setNotes((notes) => [
            ...notes, { id: uuid(), key: uuid(), text: inputText },
        ]);
        //clear the textarea
        setInputText("");
    };

    return (
        <>
            <p className="note-heading">Note Making App</p>
            <div className="notes">
                <div className="create-note">
                    <CreateNote saveHandler={saveHandler} inputText={inputText} setInputText={setInputText} />
                </div>
                <div className="all-notes">
                    {notes?.map((note) => (
                        <Note
                            key={note.id}
                            id={note.id}
                            text={note.text}
                            deleteNote={deleteNote}
                        />))
                    }
                </div>
            </div>
        </>
    );
}
export default Notes;