import React from 'react';
import PropTypes from 'prop-types';

function NoteItem({ title, note }) {
  return (
    <li>
      <p>Title {title}</p>
      <p>Note: {note}</p>
    </li>
  );
}

NoteItem.PropTypes = {
  title: PropTypes.string.isRequired,
  note: PropTypes.string.isRequired
};

export default NoteItem;
