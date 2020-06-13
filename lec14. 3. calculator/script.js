! function () {
	"use strict";

	function clicking(t) {
		result.textContent += t.textContent
	}
	var off = document.getElementById("off"),
		result = document.getElementsByClassName("result")[0],
		clear = document.getElementsByClassName("clear")[0],
		Delete = document.getElementsByClassName("delete")[0],
		one = document.querySelector(".one"),
		two = document.querySelector(".two"),
		three = document.querySelector(".three"),
		four = document.querySelector(".four"),
		five = document.querySelector(".five"),
		six = document.querySelector(".six"),
		seven = document.querySelector(".seven"),
		eight = document.querySelector(".eight"),
		nine = document.querySelector(".nine"),
		zero = document.querySelector(".zero"),
		equal = document.querySelector(".equal"),
		plus = document.querySelector(".plus"),
		minus = document.querySelector(".minus"),
		multi = document.querySelector(".multi"),
		di = document.querySelector(".di"),
		module = document.querySelector(".module"),
		pow = document.querySelector(".pow"),
		slice = result.textContent.slice(-1);
		
		clear.onclick = function () {
			result.textContent = ""
		}, Delete.onclick = function () {
			result.textContent = result.textContent.slice(0, -1)
		}, one.onclick = function () {
			clicking(this)
		}, two.onclick = function () {
			clicking(this)
		}, three.onclick = function () {
			clicking(this)
		}, four.onclick = function () {
			clicking(this)
		}, five.onclick = function () {
			clicking(this)
		}, six.onclick = function () {
			clicking(this)
		}, seven.onclick = function () {
			clicking(this)
		}, eight.onclick = function () {
			clicking(this)
		}, nine.onclick = function () {
			clicking(this)
		}, zero.onclick = function () {
			clicking(this)
		}, plus.onclick = function () {
			clicking(this)
		}, minus.onclick = function () {
			clicking(this)
		}, di.onclick = function () {
			clicking(this)
		}, multi.onclick = function () {
			clicking(this)
		}, module.onclick = function () {
			clicking(this)
		}, pow.onclick = function () {
			clicking(this)
		}
}();