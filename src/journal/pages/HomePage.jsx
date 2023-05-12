import { useDispatch, useSelector } from "react-redux";
import { IconButton, Typography } from "@mui/material";
import { AddOutlined } from "@mui/icons-material";
import { HomeLayout } from "../layout/HomeLayout";
import { NothingSelectedView } from "../views/NothingSelectedView";
import { NoteView } from "../views/NoteView";
import { startNewNote } from "../../store/journal/thunks";

export const HomePage = () => {
  const dispatch = useDispatch();
  const { isSaving, active } = useSelector((state) => state.journal);

  const onClickNewNote = () => {
    dispatch(startNewNote());
  };
  return (
    <HomeLayout>
      {!!active ? <NoteView /> : <NothingSelectedView />}

      <IconButton
        disabled={isSaving}
        onClick={onClickNewNote}
        size="large"
        sx={{
          color: "white",
          backgroundColor: "error.main",
          ":hover": { backgroundColor: "error.main", opacity: 0.8 },
          position: "fixed",
          right: 50,
          bottom: 50,
        }}
      >
        <AddOutlined sx={{ fontSize: 25 }} />
      </IconButton>
    </HomeLayout>
  );
};
