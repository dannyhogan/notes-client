import React from 'react';
import PropTypes from 'prop-types';
import NoteItem from '../NoteItem/NoteItem.js';

function NotesDisplay({ notes, handleDelete }) {

  const noteItems = notes.map((note, i) => {
    return <NoteItem key={note.title + i} handleDelete={handleDelete} note={note} />;
  });

  return (
    <ul>
      {noteItems}
    </ul>
  );
}

NotesDisplay.propTypes = {
  notes: PropTypes.array.isRequired,
  handleDelete: PropTypes.func.isRequired
};

export default NotesDisplay;
