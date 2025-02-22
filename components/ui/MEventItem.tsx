import { View, Text, StyleSheet } from "react-native";
import { MButton } from "./MButton";
import { MGroupIcon } from "../misc/icons/MGroupIcon";
import { MCalendarIcon } from "../misc/icons/MCalendarIcon";

interface MEventItemProps {
    data: {
        id: number;
        title: string;
        actualParticipants: number;
        maxParticipants: number;
        dateStart: string;
    };
}

export const MEventItem: React.FC<MEventItemProps> = ({ data }) => {
    return (
        <View style={style.container}>
            {/* Header */}
            <View style={style.header}>
                <Text style={style.title}>{data.title}</Text>
            </View>

            {/* Body */}
            <View style={style.body}>
                <View style={style.rows}>
                    {/* Usuarios unidos */}
                    <View style={style.row}>
                        <View style={style.icon}>
                            <MGroupIcon width={25} height={25} />
                        </View>
                        <Text style={style.text}>
                            {data.actualParticipants} / {data.maxParticipants}
                        </Text>
                    </View>

                    {/* Fecha */}
                    <View style={style.row}>
                        <View style={style.icon}>
                            <MCalendarIcon width={20} height={20} />
                        </View>
                        <Text style={style.text}>{data.dateStart}</Text>
                    </View>
                </View>

                <MButton
                    text="Unirme"
                    onPress={() => alert("Te has unido correctamente")}
                />
            </View>
        </View>
    );
};

const style = StyleSheet.create({
    container: {
        backgroundColor: "#3A150799",
        width: "100%",
        borderRadius: 10,
    },
    header: {
        backgroundColor: "#1D0B04",
        width: "100%",
        paddingBlock: 15,
        borderTopStartRadius: 10,
        borderTopEndRadius: 10,
    },
    title: {
        color: "white",
        textAlign: "center",
        fontWeight: "700",
        fontSize: 16,
    },
    /* Body */
    body: {
        padding: 10,
        gap: 15,
    },
    rows: {
        gap: 3
    },
    row: {
        flexDirection: "row",
        alignItems: "center",
        gap: 7,
    },
    icon: {
        width: 30,
        alignItems: 'center'
    },
    text: {
        color: "white",
        fontWeight: "600",
        fontSize: 15,
    },
});
