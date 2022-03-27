const employers = ['АртеМ', 'максим', 'Владимир', 'сергей', 'НикиТа', 'евГений', ' Дарья', ' ', 'виктория ', 'ЕкаТерина', '', ' Андрей ', 'КИРИЛЛ'];
const nameCourse = 'Базовый React';

const command = employers.filter(name => name.trim().length)
.map(name => name.trim().charAt(0).toUpperCase() + name.trim().substr(1).toLowerCase());

const data = {
	cash: [3, 8, 3],
	react: ['JSX', 'components', 'props', 'state', 'hooks'],
	add: ['styled-components', 'firebase']
};

const calcCash = everyCash => everyCash.reduce((prev, curr) => prev + curr);

const { cash, react, react: [jsx], add } = data;

const lesson = calcCash(cash);

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
