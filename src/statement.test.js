const statement = require('./statement');

test('ステートメントが出力できることその１（本に載っているサンプル例）', () => {
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

