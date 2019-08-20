import React from 'react';
import PropTypes from 'prop-types';
import styles from './NoteItem.css';

function NoteItem({ note, handleDelete }) {

  return (
    <li className={styles.NoteItem}>
      <p>Title:
        <span>{note.title}</span>
      </p>
      <p>Note:
        <span>{note.note}</span>
      </p>
      <button onClick={() => handleDelete(note._id)}>
        X
      </button>
    </li>
  );
}

NoteItem.propTypes = {
  note: PropTypes.object.isRequired,
  handleDelete: PropTypes.func.isRequired
};

export default NoteItem;
