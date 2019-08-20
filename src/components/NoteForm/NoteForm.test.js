import React from 'react';
import { shallow } from 'enzyme';
import NoteForm from './NoteForm';

describe('App component', () => {
  it('renders App', () => {
    const wrapper = shallow(<NoteForm />);
    expect(wrapper).toMatchSnapshot();
  });
});
