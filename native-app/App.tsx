import { useFonts } from "expo-font";
import { StatusBar } from "expo-status-bar";

import { Text } from "react-native";
import { styled, ThemeProvider } from "./styled";
import { useLocation } from "./utils";

export default function App() {
  const initialLocation = useLocation();

  const [fontsLoaded] = useFonts({
    Jomhuria: require("./assets/fonts/Jomhuria-Regular.ttf"),
    Offside: require("./assets/fonts/Offside-Regular.ttf"),
  });

  if (!fontsLoaded || !initialLocation) {
    return null;
  }

  return (
    <ThemeProvider>
      <Wrapper>
        <WelcomeText>Welcome to our new game!</WelcomeText>
        <Text>Initial location: {JSON.stringify(initialLocation)}</Text>
        <StatusBar style="auto" />
      </Wrapper>
    </ThemeProvider>
  );
}

const Wrapper = styled("View", {
  flex: 1,
  backgroundColor: "#fff",
  alignItems: "center",
  justifyContent: "center",
});

const WelcomeText = styled("Text", {
  fontFamily: "$playful",
  fontSize: 50,
});
