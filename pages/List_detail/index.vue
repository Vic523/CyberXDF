<template>
	<view class="main"  @tap.stop='back'>
		<view class=""style="margin-bottom: 40rpx;">
			<u-navbar
				title="My List"
				@leftClick="leftClick"
				:autoBack="false"
				:bgColor="bgColor"
				
				:titleStyle="{ color: '#FFF'}"
			>
			</u-navbar>
		</view>
		<text >{{id == 0 ? 'Proteins':( id == 1 ? 'Carbs' : (id == 2 ? 'Veggies' :'Fruits'))}}</text >
		<view class="shop_cart" @tap.stop= 'stopbtn'>
			<view :class="id == 0 ? 'back  back1':( id == 1 ? 'back  back2' : (id == 2 ? 'back  back3' :'back  back4'))"></view>
			
			<view class="hint" v-if="list[id].length <= 0">
				<p>Your section is empty!</p>
				<p>Add items by tapping the "+" button!</p>
			</view>
			<template v-for="(item,index) in list[id]">
				<view class="list" :key='item.value'>
					<view class="list_box">
						<image :src="item.image" mode=""></image>
						<text class="">{{item.name}}</text>
					</view>
					<checkbox-group @change="checkboxChange">
						<checkbox :value="item.value" :checked="item.checked" :key="'check-'+item.value"/>
					</checkbox-group>
			
				</view>
			</template>
		</view>
		<view class="add" @tap.stop="navFood">
			<u-icon name="plus-circle-fill" color="rgb(98,83,189)" size="40" ></u-icon>
		</view>
		<view class="add" @tap.stop="del">
			<u-icon name="trash-fill" color="rgb(98,83,189)" size="30"></u-icon>
		</view>
		<view class="left" @tap.stop="cut('left')">
			<u-icon name="arrow-leftward" color="#999" size="20"></u-icon>
		</view>
		<view class="right" @tap.stop="cut('right')">
			<u-icon name="arrow-rightward" color="#999" size="20"></u-icon>
		</view>
	</view>
</template>

<script>
	export default {
		data(){
			return{
				lsitDetail:[],
				id:'',
				list:'',
				value:[],
				bgColor:'#000',
				leftIconColor:'#fff'
			}
		},
		onLoad(option) {
			console.log(option);
			this.id = option.id
		},
		created() {
			var that = this;
			this.list = this.$store.state.list
			console.log(this.list);
			uni.$on('updateList',function(data){
				/* console.log('事件：',data); */
				that.list = data;
			})
		},
		methods:{
			navFood(){
				/* console.log(11); */
				uni.navigateTo({
					url:'/pages/food/index?id='+this.id
				})
			},
			stopbtn(){
				/* console.log(11); */
			},
			back(){
				uni.navigateTo({
					url:'/pages/List/index'
				})
			},
			checkboxChange(e){
				this.value.push(e.detail.value)
				/* console.log(this.value); */
			},
			del(){
				this.$store.dispatch('delObj',{
					value:[...new Set(this.value)],
					id:this.id
				})
				console.log(this.list = this.$store.state.list);
			},
			cut(offset){
				if(offset=='left'){
					if(this.id!=0){
						this.id = this.id -1
					}
				}else if(offset=='right'){
					if(this.id != 3){
						this.id ++
					}
				}
			}
		}
	}
</script>

<style scoped lang="scss">
	.main{
		padding: 48rpx;
	}
	text{
		font-weight: bold;
	}
	.shop_cart{
		width: 100%;
		height: 1000rpx;
		/* background-color: red; */
		border: 1px solid #999;
		border-radius: 40rpx;
		margin-top: 10rpx;
	}
	.add{
		margin-top: 20rpx;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.hint{
		display: flex;
		flex-direction: column;
		align-items: center;
		margin-top: 300rpx;
		p{
			font-size:16rpx;
			color: #999;
		}
	}
	.back{
		height: 120rpx;
		width: 100%;
		border-radius: 38rpx 38rpx 0 0;
		// background-image: linear-gradient(to right, rgb(251,76,98) 10% , rgb(253,150,140) 20% ,rgb(254,200,207) 30% , rgb(255,255,255) 40%) ;
	}
	.back1{
		background-image: linear-gradient(to right, rgb(251,76,98) 10% , rgb(253,150,140) 20% ,rgb(254,200,207) 30% , rgb(255,255,255) 40%) ;
	}
	.back2{
		background-image: linear-gradient(to right, rgb(255,178,8) 30% , rgb(255,199,73) 40% ,rgb(254,232,179) 50% , rgb(255,255,255) 55%) ;
	}
	.back3{
		background-image: linear-gradient(to right, rgb(73,238,123) 60% , rgb(121,243,158) 70% ,rgb(199,250,215) 80% , rgb(255,255,255) 90%) ;
	}
	.back4{
		background-image: linear-gradient(to right, rgb(17,188,183) 8% , rgb(79,206,202) 12% ,rgb(182,235,233) 16% , rgb(255,255,255) 20%) ;
	}
	.list{
		margin-top: 50rpx;
		padding: 0 60rpx;
		display: flex;
		align-items: center;
		justify-content: space-between;
		.list_box{
			display: flex;
			align-items: center;
			image{
				width: 70rpx;
				height: 70rpx;
				margin-right: 20rpx;
			}
			
		}
	}
	.left{
		position: fixed;
		top: 480rpx;
		left: 2px;
	}
	.right{
		position: fixed;
		top: 480rpx;
		right: 2px;
	}
</style>