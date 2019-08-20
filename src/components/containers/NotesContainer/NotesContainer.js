import React, { Component } from 'react';
import NoteForm from '../../NoteForm/NoteForm';
import { createNote, getNotes, deleteNote } from '../../../services/notesApi';
import NotesDisplay from '../../NotesDisplay/NotesDisplay';

class NotesContainer extends Component {
  state = {
    titleInput: '',
    noteInput: '',
    notes: []
  };

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    const title = this.state.titleInput;
    const note = this.state.noteInput;
    createNote(title, note)
      .then(note => {
        this.setState(state => ({
          notes: [...state.notes, note]
        }));
      });
  };

  handleDelete = id => {
    event.preventDefault();
    deleteNote(id)
      .then(deleted => {
        const updatedNotes = this.state.notes.filter(note => {
          return note._id !== deleted._id;
        });
        this.setState({ notes: updatedNotes });
      });
  };

  componentDidMount() {
    getNotes()
      .then(notes => {
        this.setState({ notes });
      });
  }

  render() {
    return (
      <>
        <NoteForm handleSubmit={this.handleSubmit} handleChange={this.handleChange} title={this.state.titleInput} note={this.state.noteInput}/>
        <NotesDisplay handleDelete={this.handleDelete} notes={this.state.notes} />
      </>
    );
  }
}

export default NotesContainer;
