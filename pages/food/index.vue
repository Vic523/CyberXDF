<template>
	<view class="main">
		<view class=""style="margin-bottom: 80rpx;">
			<u-navbar
				title="My List"
				@leftClick="leftClick"
				:autoBack="false"
				:bgColor="bgColor"
				:titleStyle="{ color: '#FFF'}"
			>
			</u-navbar>
		</view>
		<view class="box" v-if="flag">
			<view class="shop_cart">
				<view :class="active == 0 ? 'back back1' :( active == 1 ? 'back back2' :(active == 2 ? 'back back3' : 'back back4' )) ">
				<template v-for="(item,index) in tabs" >
					<view :class="active==index ? 'tab active' : 'tab'" @tap="activeBtn(item,index)">{{item.name}}</view>
				</template>
				</view>
				<view class="hint">
					<template v-for="(item,index) in titles[active]">
						<view class="title">{{item.title}}</view>
					</template>
					<view class="theme">
						<template v-for="(item,index) in foods[active]">
							<view class="Every_food" @tap="tapDetaile(item,active)">
								<view class="food_img">
									<image :src="item.image" mode=""></image>
								</view>
								<view class="food_name">{{item.name}}</view>
							</view>
						</template>
						</view>
				</view>
			</view>
			<view class="add" @tap="navFood">
				<u-icon name="arrow-leftward" color="rgb(98,83,189)" size="50"></u-icon>
			</view>
		</view>
		<view class="box2">
			<u-popup :show="show" mode="center"  @close="close" @open="open" overlayOpacity='0'>
			        <view class="detail">
			        	<view class="title">
			        		<image :src="detailImg" mode=""></image>
							<view :class="active == 0 ? 'name name1' :( active == 1 ? 'name name2' :(active == 2 ? 'name name3' : 'name name4' )) ">{{active == 0 ? 'Protein' :( active == 1 ? 'Carb' :(active == 2 ? 'Veggie' : 'Fruit' ))}}</view>
			        	</view>
						<view class="cut">
							<text @tap="cut=true" :class= "cut ? 'cutactive' : ''">{{cut ? detailName :'Type to add' }}</text>
						</view>
						<view class="content">
							<text>{{detailName}}</text>
							<view class="content_detail">
								{{detailTips}}
							</view>
						</view>
						<view class="footer">
							<u-icon name="arrow-leftward" color="rgb(106,106,106)" size="40" @tap='close'></u-icon>
							<text></text>
							<u-icon name="checkbox-mark" :color="cut ? 'rgb(102,187,106)' :'rgb(179,221,180)'" size="40" @tap='add'></u-icon>
						</view>
			        </view>
				</u-popup>
		</view>
	</view>
</template>

<script>
	export default {
		data(){
			return{
				active:0,
				id:0,
				show:false,
				flag:true,
				cut:false,
				detailImg:'',
				detailName:'',
				detailValue:'',
				detailTips:'',
				bgColor:'#000',
				leftIconColor:'#fff',
				tabs:[
					{
						name:'Protein'
						
					},
					{
						name:'Carbs'
						
					},
					{
						name:'Veggies'
						
					},
					{
						name:'Fruits'
						
					}
				],
				titles:[
					[
						{
						title:'Choose a type of protein'
						}
					],
					[
						{
						title:'Choose a type of Carbs'
						}
					],
					[
						{
						title:'Choose a type of Veggies'
						}
					],
					[
						{
						title:'Choose a type of Fruits'
						}
					]
				],
				foods:[
						[
							{
								name:'Egg',
								image:'../../static/list/food_1.png',
								value:1,
								tips:'One large egg contains around 6 grams of protein, making it a good source of this essential nutrient.',
								checked:false
							},
							{
								name:'Beef',
								image:'../../static/list/food_2.png',
								value:2,
								tips:'Opt for lean cuts of beef to minimize saturated fat intake while still benefiting from a good source of protein, iron, and vitamin B12.',
								checked:false
							},
							{
								name:'Chicken',
								image:'../../static/list/food_3.png',
								value:3,
								tips:'Chicken is a lean source of protein, low in fat, high in niacin and selenium, and a good source of vitamin B6, phosphorus, and choline',
								checked:false
							},
							{
								name:'Pork',
								image:'../../static/list/food_4.png',
								value:4,
								tips:'Pork is a good source of protein, thiamin, selenium, and vitamin B12, but it is also relatively high in fat, so it should be consumed in moderation as part of a balanced diet.',
								checked:false
							},
							{
								name:'Lamb',
								image:'../../static/list/food_5.png',
								value:5,
								tips:'Lamb is a rich source of protein, vitamin B12, niacin, zinc, and selenium, but it is high in saturated fat, so it should be consumed in moderation as part of a balanced diet.',
								checked:false
							},
							{
								name:'Fish',
								image:'../../static/list/food_6.png',
								value:6,
								tips:'Include fatty fish like salmon, mackerel, or sardines in your diet to benefit from heart-healthy omega-3 fatty acids.',
								checked:false
							},
							{
								name:'Dairy',
								image:'../../static/list/food_7.png',
								value:7,
								tips:'Choose low-fat or skim milk to get essential nutrients like calcium, protein, and vitamin D without excessive saturated fat content.',
								checked:false
							},
							{
								name:'Sea food',
								image:'../../static/list/food_8.png',
								value:8,
								tips:'Enjoy a variety of seafood like shrimp, crab, and oysters to obtain lean protein, omega-3 fatty acids, and important minerals while keeping calories in check.',
								checked:false
							},
							{
								name:'Other',
								image:'../../static/list/food_9.png',
								value:9,
								tips:'Other',
								checked:false
							},
							
						],
						[
							{
								name:'Rice',
								image:'../../static/list/food_10.png',
								value:10,
								tips:'Rice is naturally gluten-free, making it a great option for those with gluten intolerance or celiac disease.',
								checked:false
							},
							{
								name:'Bread',
								image:'../../static/list/food_11.png',
								value:11,
								tips:'Choose whole-grain bread and watch portion sizes to benefit from the carbohydrates, fiber, and nutrients like B vitamins and iron, while being mindful of the sodium and calorie content.',
								checked:false
							},
							{
								name:'Pasta',
								image:'../../static/list/food_12.png',
								value:12,
								tips:'Pasta can be a good source of carbohydrates, fiber, and some important nutrients like iron and B vitamins, but it is also high in calories and can be low in protein.',
								checked:false
							},
							{
								name:'Corn',
								image:'../../static/list/food_13.png',
								value:13,
								tips:'Corn is a good source of fiber, vitamin C, thiamin, and folate, but it is also relatively high in carbohydrates and can be low in protein.',
								checked:false
							},
							{
								name:'Cereal',
								image:'../../static/list/food_14.png',
								value:14,
								tips:'Choose cereals that are high in fiber and low in added sugars to keep you feeling full and satisfied throughout the morning.',
								checked:false
							},
							{
								name:'Potato',
								image:'../../static/list/food_15.png',
								value:15,
								tips:'Potatoes are a good source of complex carbohydrates, vitamin C, and potassium, but choose to eat them boiled, baked, or roasted instead of fried to reduce the calorie and fat intake.',
								checked:false
							},
							{
								name:'Bean',
								image:'../../static/list/food_16.png',
								value:16,
								tips:'Black beans are an excellent source of plant-based protein, fiber, and essential micronutrients such as iron and folate.',
								checked:false
							},
							{
								name:'Noodle',
								image:'../../static/list/food_17.png',
								value:17,
								tips:'Choose whole-grain noodles for added fiber and nutrients, and avoid noodles that are high in sodium or refined carbohydrates.',
								checked:false
							},
							{
								name:'Other',
								image:'../../static/list/food_9.png',
								value:9,
								tips:'Other',
								checked:false
							},
							
						],
						[
							{
								name:'Tomato',
								image:'../../static/list/food_19.png',
								value:19,
								tips:'Tomatoes are an excellent source of vitamin C, lycopene, and potassium, and are low in calories, making them a healthy addition to your meals.',
								checked:false
							},
							{
								name:'Onion',
								image:'../../static/list/food_20.png',
								value:20,
								tips:'Onions are a good source of fiber, vitamin C, and antioxidants, and they add flavor to your dishes without adding many calories.',
								checked:false
							},
							{
								name:'Carrots',
								image:'../../static/list/food_21.png',
								value:21,
								tips:"Carrots are high in beta-carotene, which is important for eye health, and the're also a good source of fiber, vitamin K, and potassium.",
								checked:false
							},
							{
								name:'Pepper',
								image:'../../static/list/food_22.png',
								value:22,
								tips:'Peppers contain antioxidants, which are beneficial compounds that can help to protect against cellular damage.',
								checked:false
							},
							{
								name:'Broccoli',
								image:'../../static/list/food_23.png',
								value:23,
								tips:"Broccoli is a cruciferous vegetable that's rich in fiber, vitamin C, vitamin K, and folate, and it also contains phytonutrients that have anti-cancer properties.",
								checked:false
							},
							{
								name:'Cucumber',
								image:'../../static/list/food_24.png',
								value:24,
								tips:'Cucumbers are low in calories and high in water content, making them a great addition to hydrating salads or as a snack.',
								checked:false
							},
							{
								name:'Mushroom',
								image:'../../static/list/food_25.png',
								value:25,
								tips:'Mushrooms are a good source of protein, fiber, and micronutrients such as selenium and vitamin D.',
								checked:false
							},
							{
								name:'Cabbage',
								image:'../../static/list/food_26.png',
								value:26,
								tips:"Cabbage is a cruciferous vegetable that's rich in fiber, vitamin C, vitamin K, and antioxidants, and it's also low in calories, making it a great addition to your meals.",
								checked:false
							},
							{
								name:'Other',
								image:'../../static/list/food_9.png',
								value:9,
								tips:'Other',
								checked:false
							},
							
						],
						[
							{
								name:'Banana',
								image:'../../static/list/food_28.png',
								value:28,
								tips:'Bananas are a good source of potassium, fiber, and vitamin C, and they make for a convenient and filling snack.',
								checked:false
							},
							{
								name:'Grapes',
								image:'../../static/list/food_29.png',
								value:29,
								tips:'Grapes are a good source of fiber, which can help to improve digestive health and promote feelings of fullness.',
								checked:false
							},
							{
								name:'Apple',
								image:'../../static/list/food_30.png',
								value:30,
								tips:'Apples are a good source of fiber and vitamin C, and they make for a crunchy and refreshing snack.',
								checked:false
							},
							{
								name:'Melon',
								image:'../../static/list/food_31.png',
								value:31,
								tips:"Melons are high in water content, making them a hydrating snack, and they're also a good source of vitamin C, potassium, and antioxidants.",
								checked:false
							},
							{
								name:'Orange',
								image:'../../static/list/food_32.png',
								value:32,
								tips:"Oranges are a good source of vitamin C, potassium, and fiber, and they're a juicy and refreshing snack.",
								checked:false
							},
							{
								name:'Lemon',
								image:'../../static/list/food_33.png',
								value:33,
								tips:'Lemons are rich in vitamin C and antioxidants, and they add flavor and tang to dishes and beverages.',
								checked:false
							},
							{
								name:'Berry',
								image:'../../static/list/food_34.png',
								value:34,
								tips:'Berries, such as strawberries, blueberries, and raspberries, are high in antioxidants and fiber, making them a great addition to breakfast or as a snack.',
								checked:false
							},
							{
								name:'Avocados',
								image:'../../static/list/food_35.png',
								value:35,
								tips:'Avocados are high in healthy fats, fiber, and potassium, and they make for a creamy and satisfying addition to salads or as a spread.',
								checked:false
							},
							{
								name:'Other',
								image:'../../static/list/food_9.png',
								value:9,
								tips:'Other',
								checked:false
							},
							
						]
					
				]
			}
		},
		onLoad(option) {
			console.log(option.id);
			if(option.id!=undefined){
				this.active = option.id
			}
			this.id = option.id
		},
		methods:{	
			activeBtn(item,index){
				this.active = index
				console.log(index);
			},
			navFood(){
				/* uni.navigateTo({
					url:'/pages/List_detail/index'
				}) */
				uni.navigateBack({
					delta: 1
				});
			}, 
			open() {
				// console.log('open');
			},
			close() {
				this.show = false
				this.flag = true
				// console.log('close');
			},
			tapDetaile(item,active){
				if(active == this.id){
					this.flag = false
					this.show = true
					this.detailImg = item.image
					this.detailName = item.name
					this.detailValue= item.value
					this.detailTips = item.tips
				}
			},
			add(){
				if(this.cut){
					/* let obj = {
						name:this.detailName,
						image:this.detailImg,
						value:this.detailValue,
						tips:this.detailTips
					} */
					console.log(this.id);
					this.$store.dispatch('pushObj',{
						name:this.detailName,
						image:this.detailImg,
						value:this.detailValue,
						tips:this.detailTips,
						id:this.id
					})
					uni.navigateBack({
						delta:2
					})
				}
				
			}
		}
	}
</script>

<style lang="scss" scoped>
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
		margin-bottom: 10rpx;
	}
	.add{
		margin-top: 20rpx;
		display: flex;
		justify-content: center;
		width: 180rpx;
		border: 10px solid rgb(98,83,189);
		border-radius: 80rpx;
		text-align: center;
		margin: auto;
	}
	.hint{
		margin-top: 60rpx;
		.title{
			text-align: center;
			color: #999;
		}
		.theme{
			display: flex;
			flex-wrap: wrap;
			align-items: center;
			justify-content: space-around;
			.Every_food{
				margin-top: 40rpx;
				display: flex;
				flex-direction: column;
				align-items: center;
				flex:33%;
			}
			.food_img{
				width: 120rpx;
				height: 120rpx;
				border-radius: 40rpx;
				display: flex;
				border: 1px solid #999;
				align-items: center;
				justify-content: center;
				image{
					width: 70rpx;
					height: 70rpx;
				}
			}
		}
	}
	.back{
		height: 120rpx;
		width: 100%;
		border-radius: 38rpx 38rpx 0 0;
		display: flex;
		justify-content: space-around;
		align-items: center;
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
	.tab{
		width: 120rpx;
		height: 60rpx;
		background-color: #FFF;
		font-size: 24rpx;
		border-radius: 40rpx;
		text-align: center;
		line-height: 60rpx;
	}
	.active{
		background-color: rgb(98,83,189);
	}
	.detail{
		width: 540rpx;
		height: 600rpx;
		padding: 60rpx;
		border-radius: 20rpx;
		border: 3px solid #999;
		.title{
			display: flex;
			justify-content: space-between;
			align-items: center;
			image{
				width: 100rpx;
				height: 100rpx;
			}
			.name{
				padding: 10rpx;
				width: 120rpx;
				height: 50rpx;
				text-align: center;
				line-height: 50rpx;
				border-radius: 40rpx;
			}
			.name1{
				background-color: rgb(251,76,98);
			}
			.name2{
				background-color: rgb(255,178,8);
			}
			.name3{
				background-color: rgb(73,238,123);
			}
			.name4{
				background-color: rgb(17,188,183);
			}
		}
	}
	.cut{
		width: 100%;
		border-bottom: 3px solid #999;
		padding-bottom: 10rpx;
		margin: 30rpx 0;
		text{
			font-size: 60rpx;
			color: #999;
			
		}
		.cutactive{
			color: black;
		}
	}
	
	.content{
		width: 95%;
		height: 200rpx;
		border: 1px solid #999;
		padding: 10rpx;
		border-radius: 20rpx;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: space-around;
		.content_detail{
			display: flex;
			align-items: center;
			justify-content: center;
			font-size: 20rpx;
			color: rgb(106, 106, 106);
			
		}
	}
	.footer{
		padding: 50rpx 80rpx;
		display: flex;
		justify-content: space-between;
		align-items: center;
		text{
			width: 5rpx;
			height: 40rpx;
			border-radius: 10rpx;
			background-color: #999;
		}
	}
</style>