import React from 'react';
import PropTypes from 'prop-types';

function NoteItem({ note }) {

  console.log('note item', note);

  return (
    <li>
      <p>Title {note.title}</p>
      <p>Note: {note.note}</p>
    </li>
  );
}

NoteItem.propTypes = {
  note: PropTypes.object.isRequired
};

export default NoteItem;
