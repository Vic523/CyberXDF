const mutations ={
	PUSHOBJ(state,value){
		state.list[value.id].push({
			name:value.name,
			image:value.image,
			tips:value.tips,
			value:value.value
		})
		
	},
	DELOBJ(state,value){
		console.log(value);
		
		/* var list2 = [];
		state.list.forEach((item,index) => {
			item.forEach((val,key) => {
				list2[val.value] = [index,key];
			})
		})
		
		value.value.forEach((item,index) => {
			if(list2[item])
			{
				 state.list[list2[item][0]].splice(list2[item][1],1)
			}
		})
		 */
		value.value.forEach((val,key)=>{
			 state.list[value.id] = state.list[value.id].filter((item,index)=>{
					return val != item.value
			})
			
			console.log( state.list[value.id]);
			uni.$emit('updateList',state.list[value.id])
		})
	}
}

export default mutations