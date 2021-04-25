import React, { useEffect, useState } from "react";
import { getAllChildren } from "../../helpers/utils";
import { credentials } from "../../config";
import ChildrenList from "../../components/ChildrenList";

const Children = ({ api }) => {
  const [childrenData, setChildrenData] = useState([]);

  useEffect(() => {
    getAllChildren(credentials, setChildrenData);
  }, []);

  return <ChildrenList children={childrenData} />;
};
export default Children;
