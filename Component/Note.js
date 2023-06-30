import { Text, View, StyleSheet, ScrollView, Button, Modal, TextInput, TouchableOpacity } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { addNote, clearNotes ,updateNote,deleteNote} from "./Redux/noteActions";

import * as Animatable from 'react-native-animatable';
import { useState, useCallback } from "react";
const Note = () => {
    const notes = useSelector((state) => state.notes.notes);
    const dispatch = useDispatch();

    const [listView, setListView] = useState(false);
    const [isNoteModalOpen, setNoteModalOpen] = useState(false);
    const [text, setText] = useState("");
    const [selectedIndex, setSelectedIndex] = useState(null);

    const onNotePress = (index) => {
        setSelectedIndex(index);
        setText(notes[index]);
        setNoteModalOpen(true);
    };

    const onSaveNote = useCallback(() => {
        if (!text) {
            return;
        }

        if (selectedIndex !== null) {
            dispatch(updateNote(selectedIndex, text));
        } else {
            dispatch(addNote(text));
        }

        setNoteModalOpen(false);
        setSelectedIndex(null);
    }, [text, notes, selectedIndex, dispatch]);
    const onDeleteNote = useCallback(() => {
        if (selectedIndex !== null) {
            dispatch(deleteNote(selectedIndex));
            setNoteModalOpen(false);
            setSelectedIndex(null);
        }
    }, [selectedIndex, dispatch]);

    let noteStyle = [styles.note];
    const textProps = listView ? { numberOfLines: 5 } : {};
    if (listView) {
        noteStyle = noteStyle.concat(styles.noteListView);
    }
    const clearAllNotes = () => {
        dispatch(clearNotes());
    };
    return (
        <Animatable.View animation="fadeInDown" style={styles.anime} duration={500} delay={500}>
            <View>
                <View style={styles.buttonChoice}>
                    <Button title={listView ? "Full View" : "List View"} onPress={() => setListView(!listView)} />

                    <Button title={'Clear note'} onPress={clearAllNotes} />

                    <Button  title="ADD NOTE" onPress={() => {
                        setText('');
                        setNoteModalOpen(true);
                    }} />

                </View>

                <ScrollView>
                    <View style={styles.noteContainer}>
                        {notes.map((note, index) => (
                            <TouchableOpacity key={index} onPress={() => onNotePress(index)}>
                                <View style={noteStyle}>
                                    <Text {...textProps}>{note}</Text>
                                </View>
                            </TouchableOpacity>
                        ))}
                    </View>

                </ScrollView>

                <Modal visible={isNoteModalOpen}>
                    <View style={styles.modalHeadingContainer}>
                        <Text style={styles.modalHeading}>Add a note here</Text>
                    </View>
                    <View>
                        <TextInput onChangeText={setText} value={text} multiline style={{ borderWidth: 1, padding: 10 }} />
                    </View>
                    <View style={[styles.actionbuttonContainer]}>
                        <View style={styles.modalButton}>
                            <Button title="Save" onPress={() => onSaveNote()} />
                        </View>

                        <View style={styles.modalButton}>
                            <Button color="red" title="Cancel" onPress={() => setNoteModalOpen(false)} />
                        </View>
                        <View  style={styles.modalButton}>
                            <Button color="red" title="Delete" onPress={() =>onDeleteNote(false)} />
                        </View>
                    </View>
                </Modal>
            </View>
        </Animatable.View>
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

    anime: {
        flex: 1
    },

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
        justifyContent:'space-between',
        alignItems: 'center',
        flexDirection: 'row',
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
        paddingTop: 25
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