import { styles } from "./styles"
import { View, Text, TouchableOpacity } from "react-native"

type Props = {
    name: string,
    onRemove: () => void;
}

export const Participant = ({ name, onRemove }: Props) => {
    return(
        <View style={styles.container}>
            <Text style={styles.nameText}>{name}</Text>
            <TouchableOpacity style={styles.remove} onPress={onRemove}>
                <Text style={styles.removeText}>-</Text>
            </TouchableOpacity>
        </View>
    )
}