function sortCarByYearDescendingly(cars) {
  // Sangat dianjurkan untuk console.log semua hal hehe
  console.log(cars);

  // Clone array untuk menghindari side-effect
  // Apa itu side effect?
  let result = [...cars];

  // Tulis code-mu disini
  let division = 1;
  let counter = 1;

  while (counter <= 4) {
    const penampung = {
      9: [],
      8: [],
      7: [],
      6: [],
      5: [],
      4: [],
      3: [],
      2: [],
      1: [],
      0: [],
    };
    result.forEach((n) => {
      let digit = Math.floor((n.year / division) % 10);
      penampung[9 - digit].push(n);
    });
    division *= 10;
    counter++;

    result = [].concat(...Object.values(penampung));
  }
  // Rubah code ini dengan array hasil sorting secara descending
  return result;
}
