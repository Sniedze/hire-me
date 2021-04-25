import React, { useEffect, useState } from "react";
import { getAllChildren } from "../../helpers/utils";
import { credentials } from "../../config";
import ChildrenList from "../../components/ChildrenList";

const Children = () => {
  const [childrenData, setChildrenData] = useState([]);

  useEffect(() => {
    getAllChildren(credentials, setChildrenData);
  }, []);

  return (
    <>
      <h3>Check in /Check out Your Child</h3>{" "}
      <ChildrenList children={childrenData} />
    </>
  );
};
export default Children;
