import { CreateBackofficeOutputData } from "./CreateBackofficeOutputData";

export interface ICreateBackofficeOutput {
  present: (outputData: CreateBackofficeOutputData)=> void;
}
