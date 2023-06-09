import { useState, useCallback } from "react";
import { Text, View, StyleSheet, ScrollView, Button, Modal, TextInput, TouchableOpacity } from "react-native";



const Note = () => {
    const [notes, setNotes] = useState([])
    const [listView, setListView] = useState(false)
    const [isNoteModalOpen, setNoteModalOpen] = useState(false)
    const [text, setText] = useState('')
    const [SelectedIndex,setSelectedIndex] = useState(null)



    const onNotePress = (index) => {
        setSelectedIndex(index)
        setText(notes[index])
        setNoteModalOpen(true)
    }
    const onSaveNote = useCallback(() => {
        if (!text) {
            return;
        }
        let copyNotes = [...notes]
        if (SelectedIndex !== null)
        {
            copyNotes[SelectedIndex]= text
        }
        else {copyNotes=copyNotes.concat(text)}

        setNotes(copyNotes)
        setNoteModalOpen(false)
        setSelectedIndex(null)
    }, [text, notes, setNotes])


    let noteStyle = [styles.note]
    const textProps = listView ? { numberOfLines: 3 } : {}
    if (listView) {
        noteStyle = noteStyle.concat(styles.noteListView)
    }

    return (
        <View style={{flex:1}}>
            <View style={styles.buttonChoice}>
                <Button title={listView ? "FullView" : "List View"} onPress={() => setListView(!listView)}></Button>
            </View>

            <ScrollView>
                <View style={styles.noteContainer}>
                    {
                        notes.map(
                            (note, index) => (
                               <TouchableOpacity key={index} onPress={() => onNotePress(index)}>
                                    <View  style={noteStyle}>
                                        <Text {...textProps}>{note}</Text>
                                    </View>
                               </TouchableOpacity>
                            )
                        )
                    }



                </View>
                <View style={{ padding: 10, alignItems: 'flex-end' }}>
                    <Button style={[{ justifyContent: 'flex-end', alignItems: 'flex-end' }]} title="ADD NOTE" onPress={() => {
                        setText('')
                        setNoteModalOpen(true)
                    }}></Button>
                </View>
            </ScrollView>

            <Modal visible={isNoteModalOpen}>
                <View style={styles.modalHeadingContainer}>
                    <Text style={styles.modalHeading}>Add a note here</Text>
                </View>
                <View>
                    <TextInput onChangeText={setText} value={text} multiline style={{borderWidth:1 ,padding:10}} >

                    </TextInput>
                </View>
                <View style={[styles.actionbuttonContainer]}>
                    <View style={styles.modalButton}>
                        <Button title='Save' onPress={() => onSaveNote()}></Button>
                    </View>

                    <View style={styles.modalButton}>
                        <Button color='red' title='Cancel' onPress={() => setNoteModalOpen(false)}></Button>
                    </View>

                </View>
            </Modal>

        </View>

    );
}


const styles = StyleSheet.create({
    fab: {
        alignItems: 'flex-end'
        // Add any necessary styles for your app content
    },
    // container:{
    //     justifyContent:'flex-end'
    // }


    noteContainer: {
        padding: 10,
        paddingRight: 20,

    },
    note: {
        borderWidth: 2,
        borderColor: '#ddd',
        marginBottom: 10,
        borderRadius: 5,
    },
    noteListView: {
        height: 70
    },
    buttonChoice: {
        alignItems: 'flex-end',
        padding: 10,

    },
    addNoteContainer: {

    },
    actionbuttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-evenly'
    },
    modalButton: {
        flex: 1,
        padding: 10,
        paddingTop:25
    },
    modalHeading: {
        fontSize: 30,
        fontWeight: "bold"
    },
    modalHeadingContainer: {
        alignItems: 'center'
    }
});

export default Note;