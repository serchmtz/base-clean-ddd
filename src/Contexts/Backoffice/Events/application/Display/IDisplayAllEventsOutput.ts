export type EventOutputData = {
  readonly id: string;
  readonly name: string;
  readonly duration: string;
};
export type DisplayAllEventsOutputData = {
  events: EventOutputData[];
};
export interface IDisplayAllEventsOutput {
  present: (outputData: DisplayAllEventsOutputData) => void;
}
