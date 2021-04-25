import React from "react";
import ListItem from "./ListItem";
import { Table } from "reactstrap";

const Children = (children) => {
  return (
    <Table borderless>
      <thead>
        <tr>
          <th>#</th>
          <th>Image</th>
          <th>Name</th>
          <th>Pickup Time</th>
          <th>Check in/out</th>
        </tr>
      </thead>
      <tbody>
        {children.children.length > 0 &&
          children.children.map((child, index) => {
            return (
              <ListItem key={child.childId} child={child} index={index + 1} />
            );
          })}
      </tbody>
    </Table>
  );
};
export default Children;
