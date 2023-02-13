import { Options } from "../types/selectProps";

export default class Activity {
  public _id: number;
  public _description: string;
  public _deadline: string;
  public _priority: Options;
  public _isCompleted: boolean;

  constructor(description: string, deadline: string, priority: Options) {
    this._description = description;
    this._deadline = deadline;
    this._priority = priority;
    this._isCompleted = false;
    this._id = Math.floor(Math.random() * 10000);
  }

  get description(): string {
    return this._description;
  }

  get deadline(): string {
    return this._deadline;
  }

  get priority(): Options {
    return this._priority;
  }

  get isCompleted(): boolean {
    return this._isCompleted;
  }

  get id(): number {
    return this._id;
  }
}
