import { MFooter } from "@/components/layout/MFooter";
import { Stack } from "expo-router";
import { Text } from 'react-native'

export default function RootLayout() {
  return (
    <>
      <Stack screenOptions={stackOptions}>
        <Stack.Screen name="index" />
        <Stack.Screen name="test" />
      </Stack>
      <MFooter />
    </>
  );
}

const stackOptions = {
  headerStyle: {
    backgroundColor: '#1D0B04',
  },
  headerTintColor: '#fff',
  headerTitleStyle: {
    fontWeight: "bold" as "bold",
  },
  contentStyle:{
    backgroundColor:'#FF7F50',
    padding: 10
  }
};
