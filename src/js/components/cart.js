import { store } from "./../shared/cartData.js";

let cartBubble = document.querySelector('.cart__count');
let cart = document.querySelector('.cart');
if(cart && cart !== null ){
	let productCart = new Vue({
		el: ".cart",
		delimiters: ['${', '}'],
		data(){
			return{
					cartData: store.state.cartData,
			}
		},
		computed:{
			cart_total_price(){
				let total = 0;
				
				this.cartData[0].items.forEach(item => {
						total += item.quantity*item.price;
				});

				return total;
		},
			cart(){
				return this.cartData[0]
			}
		},

		methods: {

			totalPrice(item){
				return item.price * item.quantity;
			},
			updateCart(){
				let result = this.cart.items.reduce(
						 (accumulator, target) => ({ ...accumulator, [target.variant_id]: target.quantity }),
				{});

				console.log(result);


				axios.post('/cart/update.js', {updates : result} )
						.then( (response) => {
								
							store.state.cartData[0] = response.data;

								new Noty({
										type: 'success',
										timeout: 2000,
										layout: 'topRight',
										text: 'You updated products in your cart'
								}).show();

						})
						.catch(function (error) {
								new Noty({
										type: 'error',
										layout: 'topRight',
										text: 'There was something wrong!!'
								}).show();
						});
			 

		},
			getCart(){
				axios.get('/cart.js')
				.then(response =>{
					console.log(response)
						this.cart = response.data;
				})
				.catch(error =>{
					new Noty({
						type: 'error',
						timeout: 2000,
						layout: 'centerRight',
						text:'Something went wrong sorry...'
					}).show();
				});
			},

		}
	
	});
}
