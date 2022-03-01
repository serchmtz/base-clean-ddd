export type CreateInputData = {
  readonly name: string;
  readonly duration: string;
}

export interface ICreateInput {
  execute: (inputData: CreateInputData) => void;
}
