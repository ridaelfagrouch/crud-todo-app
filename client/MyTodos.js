import { Modal } from 'react-native';
import React, { useEffect, useState } from 'react';
import styles from './styles';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { UseGetAllTodos } from './getMyTodos';
import axios from 'axios';

import {
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  FlatList,
} from 'react-native';
const COLORS = { primary: '#000', secondary: '#fff' };

const MyTodos = () => {

    const [updatId, setUpdateId] = useState(-1);
    const [modalVisible, setModalVisible] = useState(false);
    const [textInput, setTextInput] = useState('');
    const [todos, setTodos] = useState([]); 

    const [isLoading, setLoading] = useState(true);
  

    useEffect(() => {
      axios.get('http://10.30.159.33:4000/test')
        .then((response) => {
              setTodos(response.data);
              setLoading(false);
        }).catch((error) =>  console.log(JSON.stringify(error))
        );
    }, []);

    // if (isLoading) {
    //   return (
    //     <View>
    //       <Text>
    //         Loading...
    //       </Text>
    //     </View>);
    // }


  const ListItem = ({ todo }) => {
    return (
      <View style={[styles.ListItem, { borderColor: todo.completed === 1 ? "green" : "red" }]}>
        <View style={{ flex: 1 }}>
          <Text style={{
            fontWeight: 'bold',
            fontSize: 15,
            color: COLORS.tertiary,
            textDecorationLine: todo?.completed ? 'line-through' : 'none',
          }}>{todo.text}
          </Text>
        </View>
        {!todo.completed && (
          <TouchableOpacity style={[styles.actionIcon, { marginRight: 5 }, { borderColor: 'green' }]} onPress={() => markTodo(todo?.id)}>
            <Icon name='done' size={20} color='green' />
          </TouchableOpacity>
        )}
        {todo.completed === 0 && (
          <TouchableOpacity style={[styles.actionIcon, { marginRight: 5 }]} onPress={() => handleButtonPress(todo?.id)}>
            <Icon name='build' size={20} color={COLORS.primary} />
          </TouchableOpacity>
        )}
        <TouchableOpacity style={[styles.actionIcon, { borderColor: 'red' }]} onPress={() => deleteTodo(todo?.id)}>
          <Icon name='delete' size={20} color='red' />
        </TouchableOpacity>
      </View>
    )
  };

  const handleButtonPress = (todoId) => {
    setUpdateId(todoId);
    setModalVisible(true);
  };

  const markTodo = (todoId) => {
    const newTodos = todos.map((item) => {
      if (item.id === todoId)
        return { ...item, completed: 1 };
      return item;
    });
    setTodos(newTodos);
  };

  const updateTodo = () => {
    if (!textInput) return alert('empty todo');
    const newTodos = todos.map((item) => {
      if (item.id === updatId)
        item.text = textInput;
      return item;
    });
    setTodos(newTodos);
    setModalVisible(false);
    setTextInput('');
  };

  const deleteTodo = (todoId) => {
    const newTodos = todos.filter((item) => item.id !== todoId);
    setTodos(newTodos);
  };

  const deleteAll = () => {
    const newTodos = todos.filter((item) => item.completed === 0);
    if (newTodos.length === todos.length) return alert('No completed todos to delete');
    setTodos(newTodos);
  };

  const addTodo = () => {
    if (!textInput) return alert('Please enter a todo');
    else {
      const newTodo = { text: textInput, id: Math.random().toString(), completed: 0 };
      setTodos([...todos, newTodo]);
      setTextInput('');
    }
  };

    return (
        <SafeAreaView style={styles.SafeArea}>
        <Modal
          visible={modalVisible}
          transparent={true}
          animationType='fade'
        >
          <View style={styles.modal}>
            <View style={styles.modalContent}>
              <TextInput
                placeholder='update Todo'
                autoFocus={true}
                value={textInput}
                onChangeText={text => setTextInput(text)}
              />
            </View>
            <TouchableOpacity onPress={updateTodo}>
              <View style={[styles.IconContainer, { backgroundColor: COLORS.secondary }, { borderWidth: 2 }, { borderColor: COLORS.primary }]}>
                <Icon name='build' size={30} color={COLORS.primary} />
              </View>
            </TouchableOpacity>
          </View>
        </Modal>
        <View style={styles.header}>
          <Text style={{
            fontWeight: 'bold',
            fontSize: 25,
            color: COLORS.primary,
          }}>Todo App</Text>
          <TouchableOpacity onPress={deleteAll}>
            <Icon name='delete-forever' size={45} color="red" />
          </TouchableOpacity>
        </View>
        <FlatList
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ padding: 20, paddingBottom: 100 }}
          data={todos}
          renderItem={({ item }) => <ListItem todo={item} />}
        />
        <View style={styles.footer}>
          {
            modalVisible == false &&
            (<View style={styles.inputContainer}>
              <TextInput
                placeholder='Add Todo'
                value={textInput}
                onChangeText={text => setTextInput(text)}
              />
            </View>)}
          {modalVisible == false && (
            <TouchableOpacity onPress={addTodo}>
              <View style={styles.IconContainer}>
                <Icon name='add' size={30} color={COLORS.primary} />
              </View>
            </TouchableOpacity>)}
        </View>
      </SafeAreaView>
    );
}
 
export default MyTodos;