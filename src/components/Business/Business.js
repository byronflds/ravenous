import React from "react";

const business = {
	imageSrc: 'https://content.codecademy.com/programs/react/ravenous/pizza.jpg',
name: 'MarginOtto Pizzeria',
address: '1010 Paddington Way',
city: 'Flavortown',
state: 'NY',
zipCode: '10101',
category: 'Italian',
rating: 4.5,
reviewCount: 90
}


function Business(){
	return (

		<div>
		<img src={business.imageSrc}/>
		<h1>{business.name}</h1>
		<ul>
		<li>{business.address}   {business.category}</li>
		<li>{business.city}   {business.rating}</li>
		<li>{business.state} {business.zipCode}    {business.reviewCount} reviews</li>
		</ul>
		</div>

		);
}

export default Business;