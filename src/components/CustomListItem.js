// CustomListItem.js
import { ListItem, ListItemIcon, ListItemText } from "@material-ui/core";
import { styled } from "@material-ui/core/styles";
import { List } from "@material-ui/core";

const StyledListItem = styled(ListItem)({
  padding: "8px",
  color: "#333",
  background:"#3f51b5",
  fontSize: "14px",
  fontWeight: 500,
  transition: "background-color 0.3s ease",
  "&:hover": { backgroundColor: "#ddd" },
});

const StyledListItemIcon = styled(ListItemIcon)({ minWidth: "100px" });

const StyledListItemText = styled(ListItemText)({ marginLeft: "4px" });

const StyledListItemButton = styled(ListItem)({
  "&:hover": { backgroundColor: "transparent" },
});

const StyledList = styled(List)({ paddingTop: "16px", paddingBottom: "16px" });

export {
  StyledListItem,
  StyledListItemIcon,
  StyledListItemText,
  StyledListItemButton,
  StyledList,
};
