import React from 'react';
import PropTypes from 'prop-types';
import NoteItem from './NoteItem.js';

function NotesDisplay({ notes }) {

  console.log('notes arr', notes);

  const noteItems = notes.map(note => {
    return <NoteItem note={note} />;
  });

  console.log(noteItems);

  return (
    <ul>
      {noteItems}
    </ul>
  );
}

NotesDisplay.propTypes = {
  notes: PropTypes.array.isRequired
};

export default NotesDisplay;
