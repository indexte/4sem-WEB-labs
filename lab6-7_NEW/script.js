"use strict"

let orders=[];

function getPrice()
{
	let product = document.getElementById("product1");
 let value = product.value;
 value=Number(value);
 let amount=document.getElementById("amount").value;    
 let price=value*amount;    
document.getElementById("price").innerHTML=price;
}

function Calculate() {

let product = document.getElementById("product1");
let value = product.value;
value=Number(value);
let amount=document.getElementById("amount").value;    
let price=value*amount;    
document.getElementById("price").innerHTML=price;
let procent;
let post=false; let home=false; let pack=false;

if(document.getElementById("home").checked||document.getElementById("post").checked) {
    if(document.getElementById("home").checked) {
		procent=document.getElementById("home").value;
		home=true;
	}
    else {
		procent=document.getElementById("post").value;
		post=true;
    }
    
let add;

if(document.getElementById("additional").checked) {
		add=document.getElementById("additional").value;
		pack=true;
	} else
        add=0;
        
add=Number(add);
procent=Number(procent);
procent+=add
procent=procent.toFixed(2);
let result=price*procent;
result=result.toFixed(2);
document.getElementById("result").innerHTML=result;
let productSelect=myForm.product;
let selectedOption = productSelect.options[productSelect.selectedIndex];
let name=selectedOption.text;
let order=new Order(name,amount,result,post,home,pack);
orders.push(order);
} else
	alert("Оберіть спосіб доставки");
}


function Order(name,amount,price,post,home,pack) {
	this.name=name;
	this.amount=amount;
	this.price=price;
	this.post=post;
	this.home=home;
	this.pack=pack;
}

function clear() {
document.getElementById("price").innerHTML="0";
document.getElementById("result").innerHTML="";
}


let invoiceContainer=document.getElementById("invoice");
let total=document.getElementById("total");


function getInfo() {
	let name=document.getElementById("user").value;
	let adress=document.getElementById("adress").value;
	if(name!=""&&adress!="")
	{
		let price=0;
	for(let order of orders)
		price+=+order.price;
	let str="<tr ><th>Назва товару та його ціна</th><th  >Кількість</th><th>Вартість з урахуванням способу доставки та наявності упаки</th></tr>";
	for (let order of orders)
	{
		str+=`<tr><td > ${order.name}</td> <td  class="center"> ${order.amount}</td> <td  class="center"> ${order.price}</td></tr>`;
	}
	price=price.toFixed(2);
	str+=`<tr><th class="name" colspan="2">Ім'я замовника</th><td   class="center">${name}</td></tr><tr><th class="adress"  colspan="2">Адреса замовника</th><td class="center">${adress}</td></tr>`+
	`<tr><th colspan="2" class="result">Загальна вартість замовлення</th><th>${price}</th></tr>`

	invoiceContainer.innerHTML=str;
	invoiceContainer.classList.remove("d-none");
	}
}

document.getElementById("calculate").onclick=Calculate;
document.getElementById("cancel").onclick=clear;
document.getElementById("res").onclick=getInfo;