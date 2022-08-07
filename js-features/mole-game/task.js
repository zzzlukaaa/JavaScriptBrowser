
//присваиваем переменные тегам по id
let dead = document.getElementById('dead');
let lost = document.getElementById('lost');

//задаем изначальные значения для счетчиков попаданий и промахов
let deadCount = 0;
let lostCount = 0;

//создаем функцию которая будет возвращать теги лунки
function getHole(index) {
	return document.getElementById(`hole${index}`);
}

//цикл для присваивания обработчика события для каждой лунки
for (let i = 1; i < 10; i += 1) {
	
	//вводим переменную лунки
	let hole = getHole(i);
	
	//обработчик событий
	hole.onclick = function () {
		//условие для срабатывания
		if (hole.classList.contains('hole_has-mole')) {
			deadCount += 1
			if (deadCount === 10) { //условие проверки на победу
				alert('Вы выйграли')
				deadCount = 0; //сброс счетчиков
				lostCount = 0;
			}
		} else {
			lostCount += 1;
			if (lostCount === 5) { //условие проверки на поражение
				alert('жаль но вы проиграли((');
				deadCount = 0; //сброс счетчиков
				lostCount = 0;
			}
		}
		//присваивание значений счетчиков тегам
		lost.textContent = `${lostCount}`
		dead.textContent = `${deadCount}`
	}
}
