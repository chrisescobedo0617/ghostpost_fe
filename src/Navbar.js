import React from "react";
import { List } from "semantic-ui-react";
import { Link } from "react-router-dom";

const Navbar = (props) => (
  <div>
    <List floated="left" horizontal>
      <List.Item disabled href="#">
        GhostPost Machine™
      </List.Item>
      <List.Item>
        <Link to="/">All Posts</Link>
      </List.Item>
      <List.Item>
        <Link to="/boasts">Filter by Boasts</Link>
      </List.Item>
      <List.Item>
        <Link to="/roasts">Filter by Roasts</Link>
      </List.Item>
      <List.Item>
        <Link to="/most-popular">Most Popular</Link>
      </List.Item>
      <List.Item>
        <Link to="/create-post">Create Post</Link>
      </List.Item>
    </List>
    <br />
  </div>
);

export default Navbar;
