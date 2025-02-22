import { MEventItem } from "@/components/ui/MEventItem";
import { Text, View, StyleSheet } from "react-native";

export default function Index() {
    
    return (
        <View
        >
            <Text>Inicio</Text>
        </View>
    );
}

const style = StyleSheet.create({
    eventsContainer: {
        width: "100%",
        gap: 10,
        paddingBlock: 5,
    },
});
