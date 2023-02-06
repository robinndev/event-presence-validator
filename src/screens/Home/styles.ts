import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#131016',
        padding: 20
    },

    eventName: {
        color: 'white',
        fontSize: 24,
        fontWeight: "bold",
        marginTop: 64,
    },

    EventDate: {
        color: "#6b6b6b",
        fontSize: 16,
        marginTop: 4,
    },

    containerInput: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 42,
        marginTop: 20
    },

    input: {
        backgroundColor: "#1F1E25",
        height: 48,
        borderRadius: 5,
        flex: 1,
        marginRight: 10,

        color: "#FFFFFF",
        paddingHorizontal: 20,
        fontSize: 16,
    },

    addingPart: {
        backgroundColor: "#6757C2",
        borderRadius: 4,
        justifyContent: "center",
        paddingHorizontal: 18,
    },

    TextButton: {
        color: "#FFFFFF",
    },

    emptyParticipantsText: {
        color: "#6b6b6b"
    }
});
