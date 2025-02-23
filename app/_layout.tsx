import { MFooter } from "@/components/layout/MFooter";
import { Stack } from "expo-router";
import { Text } from "react-native";

export default function RootLayout() {
    return (
        <>
            <Stack screenOptions={stackOptions}>
                {stackScreenData.map((stack) => {
                    return (
                        <Stack.Screen
                            name={stack.name}
                            options={{ headerTitle: stack.title }}
                            key={stack.name}
                        />
                    );
                })}
            </Stack>
            <MFooter />
        </>
    );
}

const stackScreenData = [
    {
        name: "index",
        title: "Inicio",
    },
    {
        name: "(tabs)/profile/index",
        title: "Perfil",
    },
    {
        name: "(tabs)/user-settings/index",
        title: "Opciones",
    },
];

const stackOptions = {
    headerStyle: {
        backgroundColor: "#1D0B04",
    },
    headerTintColor: "#fff",
    headerTitleStyle: {
        fontWeight: "bold" as "bold",
    },
    contentStyle: {
        backgroundColor: "#FF7F50",
        paddingTop: 10,
        paddingInline: 10,
    },
};
