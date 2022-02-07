import { CreateBackofficeInputData } from "./CreateBackofficeInputData";

export interface ICreateBackofficeInput {
  execute: (inputData: CreateBackofficeInputData) => void;
}
