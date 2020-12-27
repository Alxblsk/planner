import * as React from 'react';
import { IAdd } from '../service';

const getValue = (e: React.ChangeEvent<HTMLInputElement>) => e?.target?.value || '';

export function Add(props: IAdd) {
  const { callback } =  props;
  const [value, setValue] = React.useState('');

  const onSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
      e.preventDefault();
      callback(value);
  }

  return (
    <form className="d-flex" onSubmit={onSubmit}>
      <input
        className="form-control me-2"
        type="search"
        placeholder=""
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setValue(getValue(e))}
      />
      <button className="btn btn-primary" type="submit" id="add">
        Add
      </button>
    </form>
  );
}
