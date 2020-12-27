import * as React from 'react';

import { ITodo, TodoStatus } from '../service';

export function Item(props: ITodo) {
  return (
    <li className="list-group-item">
      <input
        className="form-check-input me-1"
        type="checkbox"
        value=""
        defaultChecked={props.status == TodoStatus.COMPLETED}
      />
      <span>{props.title}</span>
    </li>
  );
}
