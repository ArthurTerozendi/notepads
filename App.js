import React, { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, ScrollView, TouchableHighlight, Alert } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

import Note from "./components/note"

export default function App() {
  const [notes, setNotes] = useState([])
  const [count, setCount] = useState(1);
  const addNote = () => {
    setCount(count + 1);
    setNotes(notes => [...notes, { id: count, name: `Nota ${count}`, value: "" }])
  }

  const setRemoveItem = id => {
    removeItem(id);
  }

  const removeItem = id => {
    let note = notes.find(note => note.id == id);
    let index = notes.indexOf(note);
    if (index != -1) {
      notes.splice(index, 1);
      setNotes(notes => [...notes]);
    }
  }

  return (
    <ScrollView style={{ flex: 1, backgroundColor: '#303841' }}>
      <SafeAreaView style={styles.container}>
        {
          notes.map(note => (<Note key={note.id} value={note.value} name={note.name} removeNote={() => setRemoveItem(note.id)} />))
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
  },
});
