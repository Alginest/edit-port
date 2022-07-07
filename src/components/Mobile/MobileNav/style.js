import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
  mobileNav: {
    backgroundColor: "#333",
    width: "100%",
    height: "0px",
    zIndex: 10,
    position: "absolute",
    top: 0,
    right: 0,
    transition: "height 0.3s ease-in-out",
    display: (openMenu) => (openMenu ? "none" : "flex"),
    flexDirection: "column",
  },
  mobileNavActive: {
    backgroundColor: "#333",
    width: "100%",
    height: "500px",
    position: "absolute",
    top: 0,
    zIndex: 10,
    right: 0,
    display: (openMenu) => (openMenu ? "none" : "flex"),
  },
}));
