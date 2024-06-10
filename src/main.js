import './oss-temp/CSS/_config.css'
import './oss-temp/CSS/_custom.css'
import './oss-temp/CSS/color.css'
import './oss-temp/CSS/reset.css'
import './oss-temp/CSS/structure.css'
import './oss-temp/CSS/typography.css'
import './oss-temp/CSS/utility.css'

import { globalEventHandler } from './oss-temp/JS/handlers'
import { singleStateToggle } from './oss-temp/JS/state'
import { Cart, Product } from './shop'

let two_day_signature = new Product(
	'Two_Day_Signature',
	'Дводневен signature',
	2000
)
let three_day_signature = new Product(
	'Three_Day_Signature',
	'Тридневен signature',
	2850
)
let four_day_signature = new Product(
	'Four_Day_Signature',
	'Четиридневен signature',
	3600
)
///
let two_day_immuno = new Product('Two_Day_Immuno', 'Дводневен immuno', 1900)
let three_day_immuno = new Product('Three_Day_Immuno', 'Тридневен immuno', 2700)
let four_day_immuno = new Product(
	'Four_Day_Immuno',
	'Четиридневен immuno',
	3400
)

let cart = new Cart(
	two_day_signature,
	three_day_signature,
	four_day_signature,
	//
	two_day_immuno,
	three_day_immuno,
	four_day_immuno
)

globalEventHandler('click', '._faq_origin', singleStateToggle)
globalEventHandler('click', '._cart_origin', singleStateToggle)
globalEventHandler('click', '._add_amount', cart.addAmount)
globalEventHandler('click', '._remove_amount', cart.removeAmount)
globalEventHandler('click', '#submit', cart.processPayment)
globalEventHandler('click', '#proxyProcess', cart.proxyRequest)
cart.updateDOM()
