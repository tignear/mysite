import Vuex from 'vuex';

export {MUTATION}
const MUTATION={
    openSidebar:"openSidebar",
    closeSidebar:"closeSidebar"
}
const store = () => new Vuex.Store({

    state: {
        isOpenSidebar: false
    },
    mutations: {
        [MUTATION.openSidebar](state) {
            state.isOpenSidebar = true
        },
        [MUTATION.closeSidebar](state) {
            state.isOpenSidebar = false
        }
    }
})

export default store
