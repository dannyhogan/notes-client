import React from 'react';
import PropTypes from 'prop-types';
import NoteItem from './NoteItem.js';

function NotesDisplay({ notes }) {

  const noteItems = notes.map(note => {
    <NoteItem note={note} />;
  });

  return (
    <ul>
      {noteItems}
    </ul>
  );
}

NotesDisplay.PropTypes = {
  notes: PropTypes.array.isRequired
};

export default NotesDisplay;
