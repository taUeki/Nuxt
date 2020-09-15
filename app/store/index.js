import { firebase, db } from '@/plugins/firebase'

export const state = () => ({
    memos: []
})
export const mutations = {
    add(state, memo) {
        state.memos.push(memo)
    },
    setMemos(state, { memos }) {  
        state.memos = memos  
    },  
}

export const getters = {
    getMemos(state) {
        return state.memos
    }
}

export const actions = {  
    fetchMemos({commit}) {
        db.collection('memos').get()
        .then(snapshot => {
            snapshot.forEach(doc => {
                let memo = doc.data()
                memo.id = doc.id
                commit('add', memo) 
            })
        })
    },
    fetchById({commit}, id) {
        db.collection('memos').doc(this.$route.params.id).get()
        .then(doc => {
            commit('setMemos', doc.data())
        })
    },    
}  
