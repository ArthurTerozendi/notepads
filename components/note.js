import React, { useState } from "react";
import { View, StyleSheet, TouchableHighlight, TouchableWithoutFeedback, Text, Modal, TextInput } from "react-native";

import { Entypo } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';

export default function App(props) {
    const [visible, setVisibility] = useState(false);
    const [data, setData] = useState(`${props.value}`);
    const [remove, setRemove] = useState(false)


    const closeRemoveModal = () => setRemove(false)

    return (
        <View>
            <TouchableHighlight
                onLongPress={() => setRemove(true)}
                onPress={() => setVisibility(true)}
            >
                <View style={style.note}>
                    <Text style={style.noteText} > {props.name} </Text>
                </View>
            </TouchableHighlight>
            <Modal
                animationType="none"
                transparent={true}
                visible={visible}
            >
                <View style={style.modal}>
                    <TouchableWithoutFeedback
                        onPress={() => setVisibility(false)}
                    >
                        <View style={style.closeButton}>
                            <Entypo name="cross" size={24} color="black" />
                        </View>
                    </TouchableWithoutFeedback>
                    <Text style={style.noteText}> {props.name} </Text>
                    <TextInput
                        style={style.textArea}
                        value={data}
                        onChangeText={text => setData(text)}
                        autoCapitalize="sentences"
                        multiline={true} />
                </View>
            </Modal>

            <Modal
                transparent={true}
                visible={remove}
                animationType="slide"
                onRequestClose={() => setRemove(false)}
            >
                <View style={style.removeModal}>
                    <View style={style.remove}>
                        <View>
                            <TouchableWithoutFeedback
                                onPress={closeRemoveModal}
                                onPressOut={props.saveNote}
                            >
                                <View style={style.closeButton}>
                                    <Entypo name="cross" size={24} color="black" />
                                </View>
                            </TouchableWithoutFeedback>
                        </View>
                        <View style={style.removeButton}>
                            <TouchableHighlight
                                onPress={props.removeNote}
                                onPressOut={closeRemoveModal}
                            >
                                <FontAwesome5 name="trash" size={24} color="red" />
                            </TouchableHighlight>
                        </View>
                    </View>
                </View>
            </Modal >
        </View >
    )
}

const style = StyleSheet.create({
    note: {
        backgroundColor: "#F6C90E",
        width: 150,
        height: 150,
        margin: 10,
        padding: 20,
        alignItems: "center",
    },
    noteText: {
        color: 'black',
        fontSize: 20,
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
        borderColor: '#00000001',
        textAlignVertical: "top"
    },
    removeModal: {
        width: '100%',
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-end'
    },
    remove: {
        height: 60,
        backgroundColor: '#303841'
    },
    removeButton: {
        alignItems: 'center',
    }
})