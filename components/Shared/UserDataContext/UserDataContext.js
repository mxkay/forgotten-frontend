import React, { createContext } from 'react';

// set the defaults
const UserDataContext = createContext({
    userData: {email: '', handle: '', name: '', _id: ''},
    setUserData: () => {}
});

export default UserDataContext;