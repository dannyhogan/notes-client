import React, { Component } from 'react';
import NoteForm from '../NoteForm';
import { createNote, getNotes } from '../../services/notesApi';
import NotesDisplay from '../NotesDisplay';

class NotesContainer extends Component {
  state = {
    titleInput: '',
    noteInput: '',
    notes: []
  };

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const title = this.state.titleInput;
    const note = this.state.noteInput;
    createNote(title, note);
  };

  componentDidMount() {
    getNotes()
      .then(notes => {
        console.log(notes);
        this.setState({ notes });
      });
  }

  render() {
    return (
      <>
        <NoteForm handleSubmit={this.handleSubmit} handleChange={this.handleChange} title={this.state.titleInput} note={this.state.noteInput}/>
        <NotesDisplay notes={this.state.notes} />
      </>
    );
  }
}

export default NotesContainer;
