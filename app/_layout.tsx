import { MFooter } from "@/components/layout/MFooter";
import { Stack } from "expo-router";


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
    {
        name: "new-event/index",
        title: "Crear evento",
    },
];

const stackOptions = {
    headerStyle: {
        backgroundColor: "#FF7F50",
    },
    headerTintColor: "#fff",
    headerTitleStyle: {
        fontWeight: "bold" as "bold",
    },
    contentStyle: {
        backgroundColor: "#fff",
        paddingInline: 10,
        paddingBottom: 10,
    },
};
