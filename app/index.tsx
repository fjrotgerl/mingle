import { MEventItem } from "@/components/ui/MEventItem";
import { MFilter } from "@/components/ui/MFilter";
import { StyleSheet, FlatList } from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";

export default function HomePage() {
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
        {
            id: 2,
            title: "Cena tranquila en la playa",
            actualParticipants: 1,
            maxParticipants: 2,
            dateStart: "20:00 PM - 13/11/2026",
        },
        {
            id: 3,
            title: "Cena tranquila en la playa",
            actualParticipants: 1,
            maxParticipants: 2,
            dateStart: "20:00 PM - 13/11/2026",
        },
        {
            id: 4,
            title: "Cena tranquila en la playa",
            actualParticipants: 1,
            maxParticipants: 2,
            dateStart: "20:00 PM - 13/11/2026",
        },
    ];

    return (
        <SafeAreaProvider>
            <SafeAreaView style={styles.container}>
                {/* Filtro */}
                <MFilter />

                {/* Eventos */}
                <FlatList 
                    data={data}
                    renderItem={({item}) => <MEventItem key={item.id} data={item} />}
                    keyExtractor={item => item.id}
                    style={styles.eventsContainer}
                />
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
    },
});
