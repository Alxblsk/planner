import { TodoService } from './service';

test('Should add an item to the list of Todos', () => {
  const service = new TodoService();

  const item = service.create('Hello New Item!');
  expect(item).toStrictEqual({
    id: 1,
    status: 1,
    title: 'Hello New Item!',
  });
});
