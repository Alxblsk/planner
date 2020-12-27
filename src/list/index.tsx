import * as React from 'react';

import { ITodo } from '../service';
import { Item } from '../item';

interface TodoList {
  items: ITodo[];
}

export function List(props: TodoList) {
  return (
    <>
      <h5 className="mt-4">Todo items</h5>
      <ul className="list-group">
        {props.items.map((item) => (
          <Item {...item} key={item.id} />
        ))}
      </ul>
    </>
  );
}
