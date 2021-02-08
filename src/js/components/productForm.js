let form = document.querySelector('.product-single__form');
if(form && form !== null){
	let productForm = new Vue({
		el: ".product-single__form",
		data(){
			return{
				form: {
					id: document.querySelector('.vue__id').value,
					quantity:1
				}
			}
		},
		methods: {
			addToCart(){
				axios.post('/cart/add.js', this.form)
									.then(function(response){
										new Noty({
											type: 'success',
											timeout: 3000,
											layout: 'topRight',
											text:'Product added to cart...'
										}).show();
									})
									.catch(function (error){
										new Noty({
											type: 'error',
											timeout: 3000,
											layout: 'topRight',
											text:'Something went wrong sorry...'
										}).show();
									})
			}
		}
	
	});
}

