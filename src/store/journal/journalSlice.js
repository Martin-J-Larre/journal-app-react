import { createSlice } from "@reduxjs/toolkit";

export const JournalSlice = createSlice({
  name: "journal",
  initialState: {
    isSaving: true,
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
    setSaving: (state) => {},
    addNewEmptyNote: (state, action) => {},
    setActiveNote: (state, action) => {},
    setNotes: (state, action) => {},
    updateNote: (state, action) => {},
    deletNoteById: (state, action) => {},
  },
});

export const {
  setSaving,
  addNewEmptyNote,
  setActiveNote,
  setNotes,
  updateNote,
  deletNoteById,
} = JournalSlice.actions;
