export type CreateOutputData = {
  readonly id: string;
  readonly name: string;
  readonly duration: string;
}

export interface ICreateOutput {
  present: (outputData: CreateOutputData)=> void;
}
