const statement = require('./statement');

test('ステートメントが出力できることその１（Webに載っているサンプル例）', () => {
  const customer = {
    'name': 'martin',
    'rentals': [
      {'movieID': 'F001', 'days': 3},
      {'movieID': 'F002', 'days': 1},
    ]
  };

  const movies = {
    'F001': {'title': 'Ran',                     'code': 'regular'},
    'F002': {'title': 'Trois Couleurs: Bleu',     'code': 'regular'},
    // etc
  };
  

  const expected =
`Rental Record for martin
  Ran  3.5
  Trois Couleurs: Bleu  2
Amount owed is 5.5
You earned 2 frequent renter points
`;
  const result = statement(customer, movies);
  console.log(result);
  expect(result).toEqual(expected);
});

test('ステートメントが出力できること_new', () => {
  const customer = {
    'name': 'fowler',
    'rentals': [
      {'movieID': 'F003', 'days': 2},
      {'movieID': 'F004', 'days': 3},
    ]
  };

  const movies = {
    'F003': {
      'title': 'Star Wars',
      'code': 'new'
    },
    'F004': {
      'title': 'Fantastic Beasts',
      'code': 'new'
    },
  };
  

  const expected =
`Rental Record for fowler
  Star Wars  6
  Fantastic Beasts  9
Amount owed is 15
You earned 3 frequent renter points
`;
  const result = statement(customer, movies);
  console.log(result);
  expect(result).toEqual(expected);
});

test('ステートメントが出力できること_childrens', () => {
  const customer = {
    'name': 'nobita',
    'rentals': [
      {'movieID': 'F005', 'days': 2},
      {'movieID': 'F006', 'days': 4},
    ]
  };

  const movies = {
    'F005': {
      'title': 'The Promised NeverLand',
      'code': 'childrens'
    },
    'F006': {
      'title': 'Demon Slayer',
      'code': 'childrens'
    },
  };
  

  const expected =
`Rental Record for nobita
  The Promised NeverLand  1.5
  Demon Slayer  3
Amount owed is 4.5
You earned 2 frequent renter points
`;
  const result = statement(customer, movies);
  console.log(result);
  expect(result).toEqual(expected);
});


test('ステートメントが出力できること_全種類', () => {
  const customer = {
    'name': 'zenitsu',
    'rentals': [
      {'movieID': 'F001', 'days': 3},
      {'movieID': 'F003', 'days': 1},
      {'movieID': 'F005', 'days': 2},
      {'movieID': 'F006', 'days': 5},
    ]
  };

  const movies = {
    'F001': {
      'title': 'Ran',
      'code': 'regular'
    },
    'F003': {
      'title': 'Star Wars',
      'code': 'new'
    },
    'F005': {
      'title': 'The Promised NeverLand',
      'code': 'childrens'
    },
    'F006': {
      'title': 'Demon Slayer',
      'code': 'childrens'
    },
  };
  

  const expected =
`Rental Record for zenitsu
  Ran  3.5
  Star Wars  3
  The Promised NeverLand  1.5
  Demon Slayer  4.5
Amount owed is 12.5
You earned 4 frequent renter points
`;
  const result = statement(customer, movies);
  console.log(result);
  expect(result).toEqual(expected);
});
