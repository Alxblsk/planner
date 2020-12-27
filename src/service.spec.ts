import { TodoService } from './service';

test('Should add an item to the list of Todos', () => {
    const service = new TodoService([]);
    expect(service.list).toStrictEqual([]);

    service.activate('Hello New Item!');
    expect(service.list.length).toEqual(1);
    expect(service.list[0]).toStrictEqual({
        "id": 1,
        "status": 1,
        "title": "Hello New Item!",
    })
})