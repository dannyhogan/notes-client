import React, { Component } from 'react';
import PropTypes from 'prop-types';

class NoteForm extends Component {

  static propTypes = {
    handleChange: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    title: PropTypes.string.isRequired,
    note: PropTypes.string.isRequired
  }

  render() {
    return (
      <form onSubmit={this.props.handleSubmit}>
        <input type="text" value={this.props.title} name="titleInput" onChange={this.props.handleChange}></input>
        <input type="text" value={this.props.note} name="noteInput" onChange={this.props.handleChange}></input>
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default NoteForm;
