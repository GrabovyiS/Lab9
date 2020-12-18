let student = {
group: 201,
last_name: "Пётров",
first_name: "Пётр"
};
console.log('Список свойств: ' + Object.keys(student));
console.log(`Студент ${student.last_name} ${student.first_name} учится в группе ${student.group}`);