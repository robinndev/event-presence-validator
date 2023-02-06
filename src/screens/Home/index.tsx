import { Text, View, TextInput, TouchableOpacity, ScrollView, FlatList, Alert } from 'react-native';
import { useState, useEffect } from "react"

import { Participant } from './components/Participant';

import { styles } from './styles';

type newParticipant = {
    name: string,
    id: string
}

export const Home = () => {

    const uuid = Math.round(Date.now() * 10000 / 100000).toString();

    const [newParticipant, setNewParticipant] = useState<newParticipant[]>([])
    const [participantText, setParticipantText] = useState("")

    function handleRemoveParticipantName(participant: newParticipant) {
        Alert.alert("Remover", `Deseja remover o participante ${participant.name}?`, [
            {
                text: "Sim",
                onPress: () => {
                    const ParticipantsRemoved = newParticipant.filter((remove) => remove.id !== participant.id)
                    setNewParticipant(ParticipantsRemoved)
                    Alert.alert("Deletado",`Usuário ${participant.name} removido com sucesso!`)
                },
                style: "destructive"
            },
            {
                text: "Não",
                style: 'cancel'
            }
        ])
    }

    function handleAddParticipant() {
        const verifyParticipantDuplicate = newParticipant.some(ele => ele.name === participantText)

        if (participantText !== "" && !verifyParticipantDuplicate) {
            setNewParticipant(oldValue => [...oldValue, { name: participantText, id: uuid }])
            setParticipantText("") // Para limpar o camp o
        } else {
            return Alert.alert("Partipante", "Já existe um participante com esse nome ou o campo está vazio.")
        }
    }

    return (
        <View style={styles.container}>
            <Text style={styles.eventName}>Nome do evento</Text>
            <Text style={styles.EventDate}>Sexta, 4 de novembro de 2023</Text>

            <View style={styles.containerInput}>
                <TextInput
                    style={styles.input}
                    placeholder="Nome do participante"
                    placeholderTextColor="#6b6b6b"
                    onChangeText={(e) => setParticipantText(e)}
                    value={participantText}
                />
                <TouchableOpacity style={styles.addingPart} onPress={handleAddParticipant}>
                    <Text style={styles.TextButton}>+</Text>
                </TouchableOpacity>
            </View>

            <FlatList
                data={newParticipant}
                keyExtractor={(item: newParticipant) => item.id}
                renderItem={({ item }) => (
                    <Participant
                        name={item.name} key={item.id} onRemove={() => handleRemoveParticipantName(item)} />
                )}
                showsHorizontalScrollIndicator={false}
                ListEmptyComponent={() => (
                    <Text style={styles.emptyParticipantsText}>Adicione participantes a sua lista de presença...</Text>
                )}
            />

        </View>
    )
}