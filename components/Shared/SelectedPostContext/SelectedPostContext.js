import { createContext } from 'react';

// set the defaults
const SelectedPostContext = createContext({
    postID: '',
    setPostID: () => {}
});

export default SelectedPostContext;