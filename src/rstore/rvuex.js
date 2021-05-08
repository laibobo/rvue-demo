let Vue

class Store {
    constructor(options){
        this._vm = new Vue({
            data: {
                $$state: options.state
            }
        })

        this._mutations = options.mutations
        this._actions = options.actions
        
        this.commit = this.commit.bind(this)
        this.dispatch = this.dispatch.bind(this)
    }

    get state() {
        return this._vm._data.$$state            
    }

    set state() {
        console.error('please use relaceState to reset state')
    }

    commit(name, payload){
        const entry = this._mutations[name]
        if(!entry) {
            console.error('unkown mutation name')
        }

        entry(this.state, payload)
    }
    
    dispatch(name, payload) {
        const entry = this._actions[name]

        if(!entry) {
            console.error('unkown action name')
        }

        entry(this, payload)
    }
}

function install(_Vue){
    Vue = _Vue

    Vue.mixin({
        beforeCreate(){
            if(this.$options.store){
                Vue.prototype.$store = this.$options.store
            }
        }
    })
}

export default {
    Store,
    install
}