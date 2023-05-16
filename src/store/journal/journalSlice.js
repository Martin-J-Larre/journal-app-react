import { createSlice } from "@reduxjs/toolkit";

export const JournalSlice = createSlice({
  name: "journal",
  initialState: {
    isSaving: false,
    messageSaved: "",
    notes: [],
    active: null,
  },
  reducers: {
    creatingNewNote: (state) => {
      state.isSaving = true;
    },
    setSaving: (state) => {
      state.isSaving = true;
      state.messageSaved = "";
    },

    addNewEmptyNote: (state, action) => {
      state.notes.push(action.payload);
      state.isSaving = false;
    },

    setActiveNote: (state, action) => {
      state.active = action.payload;
      state.messageSaved = "";
    },
    setNotes: (state, action) => {
      state.notes = action.payload;
    },
    noteUpdated: (state, action) => {
      state.isSaving = false;
      state.notes = state.notes.map((note) => {
        if (note.id === action.payload.id) {
          return action.payload;
        }
        return note;
      });

      state.messageSaved = `${action.payload.title} was updated correctly`;
    },
    deletNoteById: (state, action) => {},
  },
});

export const {
  creatingNewNote,
  setSaving,
  addNewEmptyNote,
  setActiveNote,
  setNotes,
  noteUpdated,
  deletNoteById,
} = JournalSlice.actions;
