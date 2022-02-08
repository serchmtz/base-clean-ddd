export type BackofficeEventViewModel = {
  readonly id: string;
  readonly name: string;
  readonly duration: string;
};

export interface IBackofficeEventView {
  show: (viewModel: BackofficeEventViewModel) => void;
  showAll: (viewModel: BackofficeEventViewModel[]) => void;
}
