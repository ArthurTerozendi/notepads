import React, { useState } from "react";
import { View, StyleSheet, TouchableHighlight, Text, Modal, TextInput } from "react-native";
import { Entypo } from '@expo/vector-icons';

export default function App(props) {
    const [visible, setVisibility] = useState(false);
    const [data, setData] = useState(`Olá! ${props.value}`)
    return (
        <View>
            <TouchableHighlight
                onPress={() => setVisibility(true)}
            >
                <View style={style.note}>
                    <Text style={{ color: 'black' }} > {data} </Text>
                </View>
            </TouchableHighlight>
            <Modal
                animationType="none"
                transparent={true}
                visible={visible}
            >
                <View style={style.modal}>
                    <TouchableHighlight
                        onPress={() => setVisibility(false)}
                    >
                        <View style={style.closeButton}>
                            <Entypo name="cross" size={24} color="black" />
                        </View>
                    </TouchableHighlight>
                    <Text> {props.value} </Text>
                    <TextInput
                        style={style.textArea}
                        value={data}
                        onChangeText={text => setData(text)}
                        autoCapitalize="sentences"
                        multiline={true} />
                </View>
            </Modal>
        </View>
    )
}

const style = StyleSheet.create({
    note: {
        backgroundColor: "#F6C90E",
        width: 150,
        height: 150,
        margin: 10
    },
    modal: {
        backgroundColor: "#F6C90E",
        width: '80%',
        height: '80%',
        padding: 10,
        margin: 40,
        alignSelf: "center",
    },
    closeButton: {
        alignItems: "flex-end"
    },
    textArea: {
        width: "100%",
        height: "90%",
        marginTop: 10,
        borderWidth: 1,
        borderColor: '#00000011',
        textAlignVertical: "top"
    }
})