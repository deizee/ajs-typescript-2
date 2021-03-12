import Book from '../domain/Book';
import MusicAlbum from '../domain/MusicAlbum';
import Cart from '../service/Cart';

test('new card should be empty', () => {
  const cart = new Cart();

  expect(cart.items.length).toBe(0);
});

test('должен корректно добавлять объект в корзину', () => {
  const cart = new Cart();
  cart.add(new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225));  

  expect(cart).toEqual({
    _items: [
      {
        id: 1001,
        name: 'War and Piece',
        author: 'Leo Tolstoy',
        price: 2000,
        pages: 1225
      }
    ]
  })
});

test('метод totalPrice должен корректно считать цену', () => {
  const cart = new Cart();
  cart.add(new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225));
  cart.add(new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900));
  
  expect(cart.totalPrice()).toBe(2900);
});

test('метод totalDiscountPrice должен корректно считать цену со скидкой', () => {
  const cart = new Cart();
  cart.add(new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225));
  cart.add(new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900));
  
  expect(cart.totalDiscountPrice(50)).toBe(1450);
});

test('метод deleteItemById должен удалять объект из массива по переданному id', () => {
  const cart = new Cart();
  cart.add(new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225));
  cart.add(new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900));
  cart.deleteItemById(1008);
  
  expect(cart).toEqual({
    _items: [
      {
        id: 1001,
        name: 'War and Piece',
        author: 'Leo Tolstoy',
        price: 2000,
        pages: 1225
      }
    ]
  });
});
