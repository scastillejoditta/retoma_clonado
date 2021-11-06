import axios from 'axios';

// EP's disponibles:
// /Ejes, /Ejes/:id, /Preguntas, /Preguntas/:id, /Preguntas_Opciones, /Preguntas_Opciones/:id, 
// /Respuestas_Candidates, /Respuestas_Candidates/:id, /Comentarios_Candidates, /Comentarios_Candidates/:id,
// /Machifrases_Candidates, /Machifrases_Candidates/:id

// Ver Docu para los fields.

const headers = {
  'Authorization': `Bearer ${process.env.AIRTABLE_KEY}`
}

export const fetchRecords = async (path) => {
  const res = await axios.get(`${process.env.URL_AIRTABLE_TOKEN}/${path}`, {headers});
  return res;
}

export const fetchRecord = async (path, id) => {
  const res = await axios.get(`${process.env.URL_AIRTABLE_TOKEN}/${path}/${id}`, {headers});
  return res;
}