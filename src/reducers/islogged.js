const islogged = (state = false, action) => {
    if (action.type === 'loggedin') {
        return state = true;
    }

    else {
        return state;
    }

}

export default islogged;