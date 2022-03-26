var employers = ['АртеМ', 'максим', 'Владимир', 'сергей', 'НикиТа', 'евГений', ' Дарья', ' ', 'виктория ', 'ЕкаТерина', '', ' Андрей ', 'КИРИЛЛ'];
var nameCourse = 'Базовый React';
var command = [];

employers.forEach(employer => {
	if (employer.length > 0 && employer.trim() != '') {
		command.push(employer);
	}
}) 
for (let i = 0; i < command.length; i++) {
	command[i] = command[i].toLowerCase().trim();
	command[i] = command[i][0].toUpperCase() + command[i].slice(1);
}

const data = {
	cash: [3, 8, 3],
	react: ['JSX', 'components', 'props', 'state', 'hooks'],
	add: ['styled-components', 'firebase']
};

function calcCash(own = 0, { cash }) {
	const everyCash = cash;
	let total = own;
	everyCash.forEach(number => {
		total += number;
	})
	return total;
}

const { react: [jsx] } = data;
const { react } = data;
const{ add } = data;

const lesson = calcCash(null, data);

class MakeBusiness {
	constructor(director, teacher = 'Максим') {
		this.director = director;
		this.teacher = teacher;
	}

	showMessage() {
		console.log(`Стартуем новый курс: "${nameCourse}". Владелец:  ${this.director}, преподаватель: ${this.teacher}. Всего уроков: ${lesson}. \nКоманда Академии: ${command}`);
		console.log(`Первое что изучим будет ${jsx}. Он очень похож на HTML!`);
		console.log('Технологии которые мы изучим: ');
		console.log(...react, ...add, 'и другие');
	}
}

const glo = new MakeBusiness('Артем')
glo.showMessage()
