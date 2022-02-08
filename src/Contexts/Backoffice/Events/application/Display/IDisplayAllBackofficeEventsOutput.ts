export type BackofficeEventOutputData = {
  readonly id: string;
  readonly name: string;
  readonly duration: string;
};
export type DisplayAllBackofficeEventsOutputData = {
  events: BackofficeEventOutputData[];
};
export interface IDisplayAllBackofficeEventsOutput {
  present: (outputData: DisplayAllBackofficeEventsOutputData) => void;
}
