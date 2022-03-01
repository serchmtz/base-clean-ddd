export type EventViewModel = {
  readonly id: string;
  readonly name: string;
  readonly duration: string;
};

export interface IEventView {
  show: (viewModel: EventViewModel) => void;
  showAll: (viewModel: EventViewModel[]) => void;
}
