import { createSlice } from "@reduxjs/toolkit";

export const JournalSlice = createSlice({
  name: "journal",
  initialState: {
    isSaving: false,
    messageSaved: "",
    notes: [],
    active: null,
    // active: {
    //   id: "afacai",
    //   title: "",
    //   body: "",
    //   date: 123456,
    //   imageUrls: [],
    // },
  },
  reducers: {
    creatingNewNote: (state) => {
      state.isSaving = true;
    },
    setSaving: (state) => {},

    addNewEmptyNote: (state, action) => {
      state.notes.push(action.payload);
      state.isSaving = false;
    },

    setActiveNote: (state, action) => {
      state.active = action.payload;
    },
    setNotes: (state, action) => {},
    updateNote: (state, action) => {},
    deletNoteById: (state, action) => {},
  },
});

export const {
  creatingNewNote,
  setSaving,
  addNewEmptyNote,
  setActiveNote,
  setNotes,
  updateNote,
  deletNoteById,
} = JournalSlice.actions;
