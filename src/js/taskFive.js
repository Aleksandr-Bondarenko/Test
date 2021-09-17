const person = {
  firstName: "bob",
  showName() {
    console.log(this.firstName); // Контекст задается в момент вызова функции, а не в момент создания!
  },
};

const foo = function (callback) {
  callback();
};

foo(person.showName.bind(person)); // Указывается в каком контектсе будет вызван колбэк функция
foo(person.showName); // Колбэк не сохраняет контекст вызываемой функции
