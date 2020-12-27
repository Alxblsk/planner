enum TodoStatus {
    ACTIVE = 1,
    COMPLETED,
    ARCHIVED
}

interface ITodo {
    id: number,
    title: string,
    status: TodoStatus
}

interface IToDoService {
    activate(title: string): ITodo,
    activate(todo: ITodo): ITodo,
    complete(todo: ITodo): ITodo,
    archive(todo: ITodo): ITodo
}

export class TodoService implements IToDoService {
    constructor(public list: ITodo[]) { }

    activate(item: ITodo): ITodo;
    activate(item: string): ITodo;
    activate(item: any): ITodo {
        const newTodo: ITodo = {
            id: 1,
            title: '',
            status: TodoStatus.ACTIVE
        }

        newTodo.title = typeof item === 'string' ? item : item.title;

        this.list.push(newTodo);

        return newTodo;
    }

    complete(item: ITodo): ITodo {
        item.status = TodoStatus.COMPLETED;
        return item;
    }

    archive(item: ITodo): ITodo {
        item.status = TodoStatus.ARCHIVED;
        return item;
    }
}