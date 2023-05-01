import { TurnedInNot } from "@mui/icons-material";
import {
  Box,
  Divider,
  Drawer,
  Grid,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
} from "@mui/material";
import React from "react";

export const Sidebar = ({ drawerWidth = 240 }) => {
  return (
    <Box
      component="nav"
      sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
    >
      <Drawer
        variant="permanent"
        open
        sx={{
          display: { xs: "block" },
          "& .MuiDrawer-paper": { boxSizing: "border-box", width: drawerWidth },
        }}
      >
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            Fulano Smith
          </Typography>
        </Toolbar>
        <Divider />
        <List>
          {["Enero", "Febrero", "Marzo", "Abril", "Mayo"].map((mes) => (
            <ListItem key={mes} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <TurnedInNot />
                </ListItemIcon>
                <Grid container>
                  <ListItemText primary={mes} />
                  <ListItemText
                    secondary={"Loren aaaa aaaa aaaaa aaaaaa aaaaaa"}
                  />
                </Grid>
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </Box>
  );
};
