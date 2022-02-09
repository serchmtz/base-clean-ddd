import { Text, Box, useApp, useInput, Newline } from "ink";
import { EventView } from "./EventView";

export const App = () => {
  const { exit } = useApp();

  useInput((input, _key) => {
    if (input === "q") {
      exit();
    }
    if (input === "1") {
    }
  });

  return (
    <Box padding={2} borderStyle="single">
      <Box flexDirection="column">
        <EventView />
        <Newline />
        <Text>q. Exit</Text>
      </Box>
    </Box>
  );
};
