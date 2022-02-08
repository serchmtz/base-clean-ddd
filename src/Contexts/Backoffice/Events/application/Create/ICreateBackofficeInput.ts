export type CreateBackofficeInputData = {
  readonly name: string;
  readonly duration: string;
}

export interface ICreateBackofficeInput {
  execute: (inputData: CreateBackofficeInputData) => void;
}
