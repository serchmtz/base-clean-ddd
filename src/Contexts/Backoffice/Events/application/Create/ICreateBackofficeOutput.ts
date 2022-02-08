export type CreateBackofficeOutputData = {
  readonly id: string;
  readonly name: string;
  readonly duration: string;
}

export interface ICreateBackofficeOutput {
  present: (outputData: CreateBackofficeOutputData)=> void;
}
