<template>
	<view class="main">
		        <u-navbar
		            title="My List"
		            @leftClick="leftClick"
		            :autoBack="false"
					:bgColor="bgColor"
					:leftIconColor="leftIconColor"
					:titleStyle="{ color: '#FFF'}"
		        >
		        </u-navbar>
		<view v-if="show" style="margin-top: 150rpx;">
			<template v-for="(item,index) in list">
				<view class="box" @click="navDetail(index)">
					<text>{{index == 0 ? 'Proteins':( index == 1 ? 'Carbs' : (index == 2 ? 'Veggies' :'Fruits'))}}</text>
					<!-- <view :class="plan  back1"></view> -->
					<view :class="index == 0 ? 'plan  back1':( index == 1 ? 'plan  back2' : (index == 2 ? 'plan  back3' :'plan  back4'))"></view>
				</view>
			</template>
			<view class="add">
				<u-icon name="plus-circle-fill" color="rgb(98,83,189)" size="70" @tap='navFood'></u-icon>
			</view>
			<view class="add1">
				<u-icon name="reload" color="#fff" size="30" @tap='showTap'></u-icon>
			</view>
		</view>
		<view v-if="!show" style="margin-top: 100rpx;">
			<template v-for="(item,index) in list">
				<view class="box1" @click="navDetail(0)">
					<text>{{index == 0 ? 'Proteins':( index == 1 ? 'Carbs' : (index == 2 ? 'Veggies' :'Fruits'))}}</text>
					<view class="overall">
						<view :class="index == 0 ? 'plan1  back1':( index == 1 ? 'plan1  back2' : (index == 2 ? 'plan1  back3' :'plan1  back4'))"></view>
						<view class="flex_box">
							<template v-for="(v,i) in item">
								<view class="list_box">
									<view class="list">
										<image :src="v.image" mode=""></image>
										<text>{{v.name}}</text>
									</view>
								</view>
							</template>
						</view>
					</view>
				</view>
			</template>
			<view class="add1">
				<u-icon name="reload" color="#fff" size="30" @tap='showTap'></u-icon>
			</view>
		</view>
	</view>
</template>

<script>
export default{
	data(){
		return{
			show:true,
			list:'',
			bgColor:'#000',
			leftIconColor:'#fff'
		}
	},
	created() {
		this.list = this.$store.state.list
	},
	methods:{
		leftClick(){
			uni.navigateTo({
				url:'/pages/index/index'
			})
		},
		navDetail(id){
			uni.navigateTo({
				url:'/pages/List_detail/index?id=' + id
			})
		},	
		navFood(){
			console.log(11);
			uni.navigateTo({
				url:'/pages/food/index'
			})
		},
		showTap(){
			this.show = !this.show
		}
		
	}
}
</script>

<style scoped lang="scss">
	page{
		background-color: rgb(245,245,247);
	}
	.main{
		padding: 0 48rpx;
		
	}
	.box{
		margin-top: 20rpx;
	}
	.plan{
		margin-top: 20rpx;
		width: 100%;
		height: 140rpx;
		border-radius: 40rpx;
		border: 1px solid #999;
		background-color: rgb(255,255,255);
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
	
	.add{
		display: flex;
		justify-content: center;
	}
	.add1{
		margin: 10rpx auto;
		width: 80rpx;
		height: 80rpx;
		border-radius: 50%;
		text-align: center;
		background-color: rgb(98,83,189);
		display: flex;
		justify-content: center;
	}
	.overall{
		width: 100%;
		height: 220rpx;
		border: 1px solid #999;
		border-radius: 40rpx;
		margin-top: 10rpx;
	}
	.box1{
		margin-top: 10rpx;
	}
	.plan1{
		width: 100%;
		height: 60rpx;
		border-radius: 40rpx 40rpx 0 0;
		background-color: rgb(255,255,255);
	}
	.list_box{
		flex: 0 40%;
	}
	.list{
		margin: 5rpx 0;
		image{
			width: 30rpx;
			height: 30rpx;
		}
		text{
			font-size: 16rpx;
			margin-left: 10rpx;
		}
	}
	.flex_box{
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		justify-content: space-between;
		padding: 0 50rpx;
	}
</style>