import { collection, deleteDoc, getDoc } from "firebase/firestore/lite";
import {
  addNewEmptyNote,
  creatingNewNote,
  setActiveNote,
} from "../../../src/store/journal/journalSlice";
import { startNewNote } from "../../../src/store/journal/thunks";
import { FirebaseDB } from "../../../src/firebase/config";

describe("Test on journal/thunks.js", () => {
  const dispatch = jest.fn();
  const getState = jest.fn();
  beforeEach(() => jest.clearAllMocks());

  const uid = "QWE123";

  test("should create a empty new note", async () => {
    getState.mockReturnValue({ auth: { uid } });

    await startNewNote()(dispatch, getState());

    expect(dispatch).toHaveBeenCalledWith(creatingNewNote());
    expect(dispatch).toHaveBeenCalledWith(
      addNewEmptyNote({
        body: "",
        title: "",
        imageUrls: [],
        id: expect.any(String),
        date: expect.any(Number),
      })
    );
    expect(dispatch).toHaveBeenCalledWith(
      setActiveNote({
        body: "",
        title: "",
        imageUrls: [],
        id: expect.any(String),
        date: expect.any(Number),
      })
    );
    const collectionRef = collection(FirebaseDB, `${uid}/journal/notes`);
    const docs = await getDoc(collectionRef);

    const deletePromises = [];
    docs.forEach((doc) => {
      deletePromises.push(deleteDoc(doc.ref));
    });
    await Promise.all(deletePromises);
  });
});
