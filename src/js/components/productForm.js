
import { store } from "./../shared/cartData.js";
let form = document.querySelector('.product-single__form');
if(form && form !==null ){
	let productForm = new Vue({
		el: ".product-single__form",
		data(){
			return{
				form: {
					id: document.querySelector('.vue__id').value,
					quantity:1,
				}
			}
		},
		methods: {
			addToCart(){
				axios.post('/cart/add.js', this.form)
									.then((response) => {

                        // add data to mini cart object
                            // check if product already exist
                            let found = store.state.cartData[0].items.find(product => product.variant_id == response.data.variant_id);
                            if(found){
                                found.quantity += parseInt(this.form.quantity);
                                
                                // you can reset the quanity back to 1 if you want
                                // this.form.quantity = 1;
                            }else{
                                // add item at the start of array
                                store.state.cartData[0].items.unshift(response.data);
                            }

														this.openMiniCart();

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
					},
					openMiniCart(){
						// fix for boostrap dropdown javascript opening and closing
						let dropDown = document.querySelector('.has-mini__cart')
						dropDown.classList.add('nav-hover');
						setTimeout(function(){
							dropDown.classList.remove('nav-hover');
						},3000);
				}
		}
	
	});
}

