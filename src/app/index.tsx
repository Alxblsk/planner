import * as React from 'react';
import { useCallback, useState } from 'react';

import { Header } from '../header';
import { List } from '../list';
import { ITodo, TodoService, TodoStatus } from '../service';

import './index.scss';

const itemsMock: ITodo[] = [
  {
    id: -1,
    title: 'abc',
    status: TodoStatus.ACTIVE,
  },
];

const service = new TodoService();

export function App() {
  const [state, setState] = useState(itemsMock);
  const add = useCallback((s) => setState((prev) => [...prev, service.create(s)]), [state]);

  return (
    <div className="container planner-root">
      <Header callback={add} />
      <div className="row">
        <div className="col mx-2">
          <List items={state} />
        </div>
      </div>
    </div>
  );
}
