function jQuery (selector, context = document){
    this.elements = Array.from(context.querySelectorAll(selector));
	return this
}

jQuery.prototype.each = function (fn){
	this.elements.forEach((element, index) => fn.call(element, element, index));
	return this;
}

jQuery.prototype.click = function(fn){
	this.each(element => element.addEventListener('click', fn))
	return this
}

jQuery.prototype.hide = function(){
	this.each(element => element.style.display = 'none')
  return this;
}

jQuery.prototype.show = function(){
	this.each(element => element.style.display = '')
  return this;
}

jQuery.prototype.html = function(contents){
	if (contents === undefined) { // проверка наличия аргумента
		return this.elements.map( element => element.innerHTML ); // если аргумента нет, возвращаем массив из innerHTML каждого элемента
	} else {
		this.each( element => element.innerHTML = contents ); // если аргумент есть, импользуем его для задания innerHTML каждого эелемент
		return this; // возвращем this для обеспечения возможности чейнинга
	}
}

const $ = (e) => new jQuery(e); // задаём алиас нашей поделке

$('button').click(e => console.log(e.target)) // очуменно вешаем обработчик
console.log($('div').html()) // неистово тестируем