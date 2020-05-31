import Data from '../Asset/data/data';

const iState = {
    list: Data,
    loginData: [{ name: 'user', password: '123456', email: 'abc@gmail.com' }],

};

const reducer = (state = iState, action) => {
    switch (action.type) {
        case "createUser":
            const n = { "name": action.payload.name, "password": action.payload.password, "email": action.payload.email }
            // console.log([...state.loginData, n], n)
            return {
                "loginData": [...state.loginData, n],
                "list": state.list,
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
                    "loginData": state.loginData
                }
            }
            else {
                return { "list": Data, "loginData": state.loginData }
            }
        default:
            return state;
    }
}

export default reducer;