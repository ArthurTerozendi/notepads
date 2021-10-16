import React, { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, ScrollView, TouchableHighlight } from 'react-native';
import { AntDesign } from '@expo/vector-icons'; 

import Note from "./components/note"

export default function App() {
  const [notes, setNotes] = useState([1, 2, 3])

  const addNote = () => {
    let length = notes.length;
    setNotes(notes => [...notes, length + 1])
  }

  return (
    <ScrollView style={{ flex: 1, backgroundColor: '#303841' }}>
      <SafeAreaView style={styles.container}>
        {
          notes.map(id => (<Note key={id} value={id} />))
        }
        <TouchableHighlight
          onPress={addNote}
        >
          <View style={styles.addNote}>
            <AntDesign name="plus" size={150} color="black" />
          </View>
        </TouchableHighlight>
      </SafeAreaView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#303841',
    paddingTop: 30,
    paddingLeft: 10,
    flexDirection: "row",
    flexWrap: "wrap",
  },
  addNote: {
    backgroundColor: "#F6C90E99",
    width: 150,
    height: 150,
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
