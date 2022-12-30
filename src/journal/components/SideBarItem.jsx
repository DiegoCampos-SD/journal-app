import { TurnedInNot } from "@mui/icons-material";
import {
  Grid,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { useMemo } from "react";
import { useDispatch } from "react-redux";
import { setActiveNote } from "../../store/journal";

export const SideBarItem = ({ title, body, id, date, imageUrls = [] }) => {
  const dispatch = useDispatch();

  const onClickNote = () => {
    dispatch(setActiveNote({ title, body, id, date, imageUrls }));
  };
  const newTitle = useMemo(() => {
    return title.length > 17 ? title.substring(0, 17) + "..." : title;
  }, [title]);

  const newText = useMemo(() => {
    return body.length > 25 ? body.substring(0, 17) + "..." : body;
  }, [body]);

  return (
    <ListItem disablePadding>
      <ListItemButton onClick={onClickNote}>
        <ListItemIcon>
          <TurnedInNot />
        </ListItemIcon>
        <Grid container>
          <ListItemText primary={newTitle} />
          <ListItemText secondary={newText} />
        </Grid>
      </ListItemButton>
    </ListItem>
  );
};
