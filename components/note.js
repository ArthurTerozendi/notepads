import React, { useState } from "react";
import { View, StyleSheet, TouchableHighlight, Text, Modal } from "react-native";
import { Entypo } from '@expo/vector-icons';

export default function App(props) {
    const [visible, setVisibility] = useState(false);
    return (
        <View>
            <TouchableHighlight
                onPress={() => setVisibility(true)}
            >
                <View style={style.note}>
                    <Text style={{ color: 'black' }} > {props.value} </Text>
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
    }
})