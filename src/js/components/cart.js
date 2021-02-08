import axios from "axios";

let cart = document.querySelector('.cart');
if(cart && cart !== null ){
	let productCart = new Vue({
		el: ".cart",
		delimiters: ['${', '}'],
		data(){
			return{
					cart: null
			}
		},

		created(){
			this.getCart();
		},
		methods: {
			updateCart(){
				let result = this.cart.items.reduce(
						 (accumulator, target) => ({ ...accumulator, [target.variant_id]: target.quantity }),
				{});

				console.log(result);


				axios.post('/cart/update.js', {updates : result} )
						.then( (response) => {
								
	
								new Noty({
										type: 'success',
										timeout: 3000,
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
						timeout: 3000,
						layout: 'centerRight',
						text:'Something went wrong sorry...'
					}).show();
				});
			},
			addToCart(){
				axios.post('/cart/add.js', this.form)
									.then(function(response){
										new Noty({
											type: 'success',
											timeout: 3000,
											layout: 'centerRight',
											text:'Product added to cart...'
										}).show();
									})
									.catch(function (error){
										new Noty({
											type: 'error',
											timeout: 3000,
											layout: 'centerRight',
											text:'Something went wrong sorry...'
										}).show();
									})
			}
		}
	
	});
}
