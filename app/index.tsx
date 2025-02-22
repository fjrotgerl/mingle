import { MEventItem } from "@/components/ui/MEventItem";
import { Text, View, StyleSheet } from "react-native";

export default function Index() {
    const data: any = [
        {
            id: 0,
            title: "🥳🥳 24/7 - Fiesta en salón",
            actualParticipants: 3,
            maxParticipants: 10,
            dateStart: "17:00 PM - 03/10/2025",
        },
        {
            id: 1,
            title: "Cena tranquila en la playa",
            actualParticipants: 1,
            maxParticipants: 2,
            dateStart: "20:00 PM - 13/11/2026",
        },
    ];

    return (
        <View
            style={{
                flex: 1,
                alignItems: "center",
            }}
        >
            <Text>Inicio</Text>

            <View style={style.eventsContainer}>
                {data.map((item: any) => {
                    return <MEventItem data={item} />;
                })}
            </View>
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
