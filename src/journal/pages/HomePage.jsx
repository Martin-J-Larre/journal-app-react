import { IconButton, Typography } from "@mui/material";
import { HomeLayout } from "../layout/HomeLayout";
import { NothingSelectedView } from "../views/NothingSelectedView";
import { NoteView } from "../views/NoteView";
import { AddOutlined } from "@mui/icons-material";

export const HomePage = () => {
  return (
    <HomeLayout>
      {/* <Typography>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure autem ab
        aliquid tempore, facere esse voluptate explicabo sapiente perferendis.
        Quo nobis tempore fugiat fugit voluptatibus harum, est assumenda
        dignissimos mollitia.
      </Typography> */}
      <NothingSelectedView />
      {/* <NoteView /> */}

      <IconButton
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
