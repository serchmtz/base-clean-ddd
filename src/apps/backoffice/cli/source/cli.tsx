import { render } from "ink";
import { App } from "./App";

const { cleanup } = render(<App />);

cleanup();
