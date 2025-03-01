import { MInput } from "@/components/ui/form/MInput";
import { useState } from "react";
import { View, StyleSheet } from "react-native";

export const MCreateEventForm = () => {
    const [eventName, setEventName] = useState("")
    const [dateFrom, setDateFrom] = useState("")
    const [dateTo, setDateTo] = useState("")

    return (
        <View style={styles.container}>
            <MInput
                label="Nombre del evento"
                value={eventName}
                onChangeValue={setEventName}
            />
            <View style={styles.datesContainer}>
                <MInput
                    label="Desde"
                    value={dateFrom}
                    onChangeValue={setDateFrom}
                />
                <MInput
                    label="Hasta"
                    value={dateTo}
                    onChangeValue={setDateTo}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        gap: 5,
        flex: 1
    },
    datesContainer: {
        flex: 1,
        flexDirection: 'row',
        width: "100%",
        gap: 10
    }
})