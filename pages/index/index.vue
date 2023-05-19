<template>
	<view class="content">
		<h3>Let's find your nutrition plan</h3>
		<view class="uni-margin-wrap">
			<swiper class="swiper" circular :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval"
				:duration="duration">
				<swiper-item>
					<view class="swiper-item uni-bg-red">
						<image src="../../static/home/home1.png" mode="" style="900rpx"></image>
					</view>
				</swiper-item>
				<swiper-item>
					<view class="swiper-item uni-bg-green">
						<image src="../../static/home/home2.png" mode="" style="900rpx"></image>
					</view>
				</swiper-item>
				<swiper-item>
					<view class="swiper-item uni-bg-blue">
						<image src="../../static/home/home3.png" mode="" style="900rpx"></image>
					</view>
				</swiper-item>
			</swiper>
		</view>
		<view class="btn"  @tap="nav">
			Get Started
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'Hello',
				indicatorDots: true,
				autoplay: true,
				interval: 2000,
				duration: 500
			}
		},
		onLoad() {

		},
		 methods: {
		        changeIndicatorDots(e) {
		            this.indicatorDots = !this.indicatorDots
		        },
		        changeAutoplay(e) {
		            this.autoplay = !this.autoplay
		        },
		        intervalChange(e) {
		            this.interval = e.target.value
		        },
		        durationChange(e) {
		            this.duration = e.target.value
		        },
				nav(){
					uni.navigateTo({
						url:'/pages/List/index'
					})
				}
		    }
	}
</script>
<style lang="scss" scoped>
	.content{
		padding: 56rpx;
		margin-top: 30px;
		h3{
			text-align: center;
			margin-bottom: 40rpx;
		}
	}
		.uni-margin-wrap {
			width: 690rpx;
			width: 100%;
		}
		.swiper {
			height: 900rpx;
		}
		.swiper-item {
			display: block;
			height: 300rpx;
			line-height: 300rpx;
			text-align: center;
		}
		.swiper-list {
			margin-top: 40rpx;
			margin-bottom: 0;
		}
		.uni-common-mt {
			margin-top: 60rpx;
			position: relative;
		}
		.info {
			position: absolute;
			right: 20rpx;
		}
		.uni-padding-wrap {
			width: 550rpx;
			padding: 0 100rpx;
		}
		uni-image{
			height: 800rpx;
		}
		.btn{
			width: 90%;
			margin: auto;
			height: 60rpx;
			text-align: center;
			line-height: 60rpx;
			background-color: rgb(126,69,83);
			border-radius: 40rpx;
			color: #FFF;
		}
	</style>
