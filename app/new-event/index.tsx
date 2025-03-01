
import { MInput } from "@/components/ui/form/MInput";
import { MTitle } from "@/components/ui/text/MTItle";
import { useState } from "react";
import { StyleSheet, View } from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";

export default function HomePage() {
    const [value, setValue] = useState("Fiesta en mi casa")

    return (
        <SafeAreaProvider>
            <SafeAreaView style={styles.container}>
                <MTitle title="Crear un evento" subtitle="Lore ipsum lore ipsum lore ipsum" />

                {/* Formulario de creación de evento */}
                <View>
                    <MInput label="Nombre del evento" value={value} onChangeValue={setValue}/>
                </View>
            </SafeAreaView>
        </SafeAreaProvider>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    eventsContainer: {
        width: "100%",
        marginTop: 8,
    },
    addAndFilterContainer: {
        flexDirection: "row",
        gap: 20,
        flex: 1,
        justifyContent: "center",
        alignContent: "center",
    },
    fullWidth: {
        flex: 1,
    },
});
