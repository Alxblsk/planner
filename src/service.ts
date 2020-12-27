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
    create(title: string): ITodo,
    create(todo: ITodo): ITodo,
    complete(todo: ITodo): ITodo,
    archive(todo: ITodo): ITodo
}

export class TodoService implements IToDoService {
    id = 0;

    generateId(): number {
        return ++this.id;
    }

    constructor(private list: ITodo[]) { }

    get all(): ITodo[] {
        return this.list;
    }

    create(item: ITodo): ITodo;
    create(item: string): ITodo;
    create(item: any): ITodo {
        const status = TodoStatus.ACTIVE;
        let newItem;

        if (typeof item === 'string') {
            newItem = { status, title: item, id: this.generateId() };
        } else {
            newItem = { ...item, status };
        }

        this.list.push(newItem);
        return newItem;
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