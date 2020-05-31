import Data from '../Asset/data/data';

const iState = {
    list: Data,
    loginData: [{ name: 'user', password: '123456', email: 'abc@gmail.com' }],
    isSignedIn: false

};

const reducer = (state = iState, action) => {
    switch (action.type) {
        case "signInFun":
            console.log('action.payload.isSignedIn', action.payload.isSignedIn)
            return {
                "loginData": state.loginData,
                "list": state.list,
                "isSignedIn": action.payload.isSignedIn
            }
        case "createUser":
            const n = { "name": action.payload.name, "password": action.payload.password, "email": action.payload.email }
            // console.log([...state.loginData, n], n)
            return {
                "loginData": [...state.loginData, n],
                "list": state.list,
                "isSignedIn": state.isSignedIn
            }

        case "searchData":
            let filteredData = ''
            // console.log('data', action.payload.searchInput)
            if (action.payload.searchInput !== '') {
                filteredData = state.list.filter(value => {
                    return value.State
                        .toString()
                        .toLowerCase()
                        .includes(action.payload.searchInput.toLowerCase())
                })
                return {
                    "list": filteredData,
                    "loginData": state.loginData,
                    "isSignedIn": state.isSignedIn
                }
            }
            else {
                return { "list": Data, "loginData": state.loginData, "isSignedIn": state.isSignedIn }
            }
        default:
            return state;
    }
}

export default reducer;