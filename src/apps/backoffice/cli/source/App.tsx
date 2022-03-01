import { Text, Box, useApp, useInput, Newline } from "ink";
import { EventView } from "./EventView";

export const App = () => {
  const { exit } = useApp();

  useInput((input, key) => {
    if (key.ctrl && input === "q") {
      exit();
    }
  });

  return (
    <Box padding={2} borderStyle="single">
      <Box flexDirection="column">
        <EventView />
        <Newline />
        <Text>{"Ctrl-q: Exit"}</Text>
      </Box>
    </Box>
  );
};
