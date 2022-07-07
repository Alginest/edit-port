import { AppBar, Container, Link, Toolbar } from "@material-ui/core";
import React from "react";
import { useGlobalContext } from "../../../contextApi";
import useStyles from "./style";
const MobileNav = () => {
  const { openMenu } = useGlobalContext();
  const classes = useStyles(openMenu);
  console.log(openMenu);
  return (
    <section
      className={
        !openMenu
          ? `${classes.mobileNav} ${classes.mobileNavActive}`
          : classes.mobileNav
      }
    >
      <ul className={classes.mobileNav}>
        <li className={classes.mobileLi}>
          <Link className={classes.mobileLink}>Home</Link>
        </li>
        <li className={classes.mobileLi}>
          <Link className={classes.mobileLink}>About</Link>
        </li>
        <li className={classes.mobileLi}>
          <Link className={classes.mobileLink}>Home</Link>
        </li>
        <li className={classes.mobileLi}>
          <Link className={classes.mobileLink}>Contact</Link>
        </li>
        <li className={classes.mobileLi}>
          <Link className={classes.mobileLink}>Home</Link>
        </li>
      </ul>
    </section>
  );
};

export default MobileNav;
