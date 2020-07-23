import React, { createContext } from "react";

// set the defaults
const SelectedPostContext = createContext({
  postId: "",
  setPostId: () => {},
});

export default SelectedPostContext;
