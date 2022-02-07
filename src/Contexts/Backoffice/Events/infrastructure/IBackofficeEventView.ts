export type BackofficeEventViewModel = { name: string; duration: string };

export interface IBackofficeEventView {
  show: (viewModel: BackofficeEventViewModel) => void;
}
