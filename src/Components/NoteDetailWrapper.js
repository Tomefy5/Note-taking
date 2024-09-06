import React from "react";
import { useParams } from "react-router-dom";
import NoteDetail from "./NoteDetail";

function NoteDetailWrapper(props) {
    let { id } = useParams()
    return <NoteDetail note={props.notes[id]} id={id} functions={props.functions}/>
}
export default NoteDetailWrapper