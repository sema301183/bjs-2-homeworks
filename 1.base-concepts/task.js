"use strict";
function solveEquation(a, b, c) {
  let arr = [];
  let d = (b ** 2 - 4 * a * c);
  if (d > 0) {
    let root1 = (-b + Math.sqrt(d)) / (2 * a);
    let root2 = (-b - Math.sqrt(d)) / (2 * a);
    arr.push(root1, root2);
    console.log(arr);
    return arr;
  }
  if (d === 0) {
    let root0 = -b / (2 * a);
    arr.push(root0);
    console.log(arr);
    return arr;
  }
  else {
    console.log("корней нет" + arr)
  }
  return arr; // array
}

function calculateTotalMortgage(percent, contribution, amount, date) {
  let per = parseInt(percent) / 100 / 12; //процентная ставка
  let con = parseInt(contribution); 	  //начальный взнос	
  let am = parseInt(amount);  			  //общая стоимость	
  if (isNaN(per) || per < 0) {
    return `Параметр "Процентная ставка" содержит неправильное значение "${percent}"`;
  } else if (isNaN(con) || con < 0) {
    return `Параметр "Начальный взнос" содержит неправильное значение "${contribution}"`;
  } else if (isNaN(am) || am < 0) {
    return `Параметр "Общая стоимость" содержит неправильное значение "${amount}"`;
  } else {

    let today = new Date();
    if (today.getFullYear() > date.getFullYear() || today.getMonth() > date.getMonth()) {
      return `Параметр "срок ипотеки" содержит неправильное значение ${date}`;
    } else {
      let s = am - con;						  //тело кредита
      let n = date.getMonth() - today.getMonth() + (12 * (date.getFullYear() - today.getFullYear())); //срок кредита в месяцах
      let pay = s * (per + per / (((1 + per) ** n) - 1));			//ежемесячная оплата
      let totalAmount = (pay * n).toFixed(2);
      console.log(totalAmount);
      return +totalAmount;
    }
  }

}