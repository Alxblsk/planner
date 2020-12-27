import { TodoService } from './service';

test('Should add an item to the list of Todos', () => {
    const service = new TodoService([]);
    expect(service.all).toStrictEqual([]);

    service.create('Hello New Item!');
    expect(service.all.length).toEqual(1);
    expect(service.all[0]).toStrictEqual({
        "id": 1,
        "status": 1,
        "title": "Hello New Item!",
    })
})