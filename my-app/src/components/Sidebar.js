import React from "react"

export default function Sidebar({setCurrentNoteId, currentNote, newNote, notes, deleteBtn}) {
    const noteElements = notes.map(({ id, body }, index) => {
    const title = body.split("\n")[0];
    
    return (    
        <div key={id}>
            
            <div className={`title ${id === currentNote.id ? 
                "selected-note" : ""}`} onClick={() => setCurrentNoteId(id)}>
                
                <h4 className="text-snippet">Note {title}</h4>
                <button className="delete-btn" onClick={(event) => deleteBtn(event, id)}>
                    <i className="gg-trash trash-icon"></i>
                </button>
            </div>
         
        </div>
    )})

    return (
        <section className="pane sidebar">
            <div className="sidebar--header">
                <h3>Notes</h3>
                <button className="new-note" onClick={newNote}>+</button>
            </div>
            {noteElements}
        </section>
    )
}
