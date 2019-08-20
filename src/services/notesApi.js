export const createNote = (title, note) => {
  return fetch('http://localhost:7891/api/v1/notes/', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ title, note })
  })
    .then(res => ([res.ok, res.json()]))
    .then(([ok, json]) => {
      if(!ok) throw 'Unable to post note';
      return json;
    });
};

export const getNotes = () => {
  return fetch('http://localhost:7891/api/v1/notes/', {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' }
  })
    .then(res => ([res.ok, res.json()]))
    .then(([ok, json]) => {
      if(!ok) throw 'Unable to get notes';
      return json;
    });
};

export const deleteNote = (id) => {
  return fetch(`http://localhost:7891/api/v1/notes/${id}`, {
    method: 'DELETE'
  })
    .then(res => ([res.ok, res.json()]))
    .then(([ok, json]) => {
      if(!ok) throw 'Unable to delete note';
      return json;
    });
};
