const actions = {
	pushObj(context,value){
		context.commit('PUSHOBJ',value)
	},
	delObj(context,value){
		context.commit('DELOBJ',value)
	}
}

export default actions