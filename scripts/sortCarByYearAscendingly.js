function sortCarByYearAscendingly(cars) {
  // Sangat dianjurkan untuk console.log semua hal hehe
  console.log(cars);

  // Clone array untuk menghindari side-effect
  // Apa itu side effect?
  let result = [...cars];

  // Tulis code-mu disini
  // let angka = [
  //   2025, 2002, 2023, 2005, 2345, 1353, 2002, 1351, 3442, 2009, 1111,
  // ];

  let division = 1;
  let counter = 1;

  while (counter <= 4) {
    const penampung = {
      0: [],
      1: [],
      2: [],
      3: [],
      4: [],
      5: [],
      6: [],
      7: [],
      8: [],
      9: [],
    };
    result.forEach((n) => {
      let digit = Math.floor((n.year / division) % 10);
      penampung[digit].push(n);
    });
    division *= 10;
    counter++;
    result = [].concat(...Object.values(penampung));
  }

  // Rubah code ini dengan array hasil sorting secara ascending
  return result;
}
