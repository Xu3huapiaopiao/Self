import React from "react";

import { useEffect, useState } from "react";
import { Headerbk } from "../components";

const TagToTrack = () => {
    const [,setToolBarOptions] = useState(null);
    const [,setEditing] = useState(null);
    // const [toolbarOptions, setToolBarOptions] = useState(null);
    // const [editing, setEditing] = useState(null);
  
    useEffect(() => {
      setToolBarOptions(["Search"]);
      setEditing({ allowDeleting: true, allowEditing: true });
    }, [setEditing, setToolBarOptions]);
  
    return (
        <div className="bg-color-own m-2 md:m-12 p-2 md:p-10 rounded-3xl">
            <Headerbk title="Tag respondents to track" />
            {/* 
            insert table here
            Table needs to be populated with same data as Data.jsx (?)
             */}
        </div>
    );
};
export default TagToTrack;