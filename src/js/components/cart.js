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
