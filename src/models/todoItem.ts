export class TodoItem<T> {
  private static _counter = 0;
  private _id: number;
  private _content: T;
  private _title: string;
  private _date: Date | null;

  constructor(content: T, title: string, date: Date | null = null) {
    this._id = TodoItem._counter++;
    this._content = content;
    this._title = title;
    this._date = date;
  }

  get id(): number {
    return this._id;
  }

  get content(): T {
    return this._content;
  }

  get title(): string {
    return this._title;
  }

  get date(): Date | null {
    return this._date;
  }
}
  
export namespace Models {
  export interface TodoItem<T> {
    id: number;
    content: T;
    title: string;
  } 
}