import { collection, doc, setDoc } from "firebase/firestore/lite";
import { FirebaseDB } from "..//../firebase/config";
import {
  addNewEmptyNote,
  setActiveNote,
  creatingNewNote,
  setNotes,
  setSaving,
  noteUpdated,
  setPhotosToActiveNote,
} from "./journalSlice";
import { loadNotes } from "../../helpers/loadNotes";
import { fileUpload } from "../../helpers/fileUpload";

export const startNewNote = () => {
  return async (dispatch, getState) => {
    dispatch(creatingNewNote());

    const { uid } = getState().auth;

    const newNote = {
      title: "",
      body: "",
      date: new Date().getTime(),
    };

    const newDoc = doc(collection(FirebaseDB, `${uid}/journal/notes`));
    await setDoc(newDoc, newNote);

    newNote.id = newDoc.id;

    dispatch(addNewEmptyNote(newNote));
    dispatch(setActiveNote(newNote));
  };
};

export const startLoadingNotes = () => {
  return async (dispatch, getState) => {
    const { uid } = getState().auth;
    if (!uid) throw new Error("The user UID does not exist");

    const notes = await loadNotes(uid);

    dispatch(setNotes(notes));
  };
};

export const startSaveNote = () => {
  return async (dispatch, getState) => {
    dispatch(setSaving());

    const { uid } = getState().auth;
    const { active: activeNote } = getState().journal;

    const noteToFirestore = { ...activeNote };
    delete noteToFirestore.id;

    const docRef = doc(FirebaseDB, `${uid}/journal/notes/${activeNote.id}`);
    await setDoc(docRef, noteToFirestore, { merge: true });

    dispatch(noteUpdated(activeNote));
  };
};

export const startUploadingFiles = (files = []) => {
  return async (dispatch, getState) => {
    dispatch(setSaving());

    // await fileUpload(files[0]);
    const fileUploadPromises = [];
    for (const file of files) {
      fileUploadPromises.push(fileUpload(file));
    }

    const photosUrls = await Promise.all(fileUploadPromises);
    console.log(photosUrls);
    dispatch(setPhotosToActiveNote(photosUrls));
  };
};
