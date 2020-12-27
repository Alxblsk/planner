import * as React from 'react';
import { Add } from '../add';
import { IAdd } from '../service';

export function Header(props: IAdd) {
  const { callback } = props;
  return (
    <nav className="navbar navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          The Planner
        </a>
        <Add callback={callback} />
      </div>
    </nav>
  );
}
