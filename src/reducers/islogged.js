const islogged = (state = false, action) => {
    if (action.type === 'loggedin') {
        return !state;
    }

    else {
        return state;
    }

}

export default islogged;