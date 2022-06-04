import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import React, { useState, useEffect } from "react";
import Template from "../components/Template";

import { saveTask, obtenerTarea, updateTask } from "../api";

const TaskFormScreen = ({ navigation, route }) => {
  const [task, setTask] = useState({
    title: "",
    descripcion: "",
  });
  const [editing, setEditing] = useState(false);

  const handleChange = (name, value) => setTask({ ...task, [name]: value });

  const handleSubmit = async () => {
    if (!editing) {
      saveTask(task);
    } else {
      await updateTask(route.params.id, task);
    }
    navigation.navigate("HomeScreen");
  };

  useEffect(() => {
    if (route.params && route.params.id) {
      navigation.setOptions({ headerTitle: "Actualizar tarea" });
      setEditing(true);
      (async () => {
        const res = await obtenerTarea(route.params.id);
        setTask({ title: res.title, descripcion: res.descripcion });
      })();
    }
  }, []);

  return (
    <Template>
      <TextInput
        style={styles.input}
        placeholder="Tarea"
        placeholderTextColor="#546574"
        onChangeText={(text) => handleChange("title", text)}
        value={task.title}
      />
      <TextInput
        style={styles.input}
        placeholder="Descripción"
        placeholderTextColor="#546574"
        onChangeText={(text) => handleChange("descripcion", text)}
        value={task.descripcion}
      />

      {!editing ? (
        <TouchableOpacity style={styles.buttonSave} onPress={handleSubmit}>
          <Text style={styles.buttonText}>Guardar tarea</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity style={styles.buttonUpdate} onPress={handleSubmit}>
          <Text style={styles.buttonText}>Editar tarea</Text>
        </TouchableOpacity>
      )}
    </Template>
  );
};

const styles = StyleSheet.create({
  input: {
    width: "90%",
    marginBottom: 7,
    borderWidth: 1,
    borderColor: "#A4B9D1",
    fontSize: 18,
    height: 35,
    color: "white",
    paddingLeft: 10,
    borderRadius: 4,
    textAlign: "center",
  },
  buttonSave: {
    paddingTop: 10,
    paddingBottom: 10,
    paddingHorizontal: 8,
    borderRadius: 4,
    marginVertical: 10,
    backgroundColor: "#A4B9D1",
  },
  buttonText: {
    color: "white",
    textAlign: "center",
  },
  buttonUpdate: {
    paddingTop: 10,
    paddingBottom: 10,
    paddingHorizontal: 8,
    borderRadius: 4,
    marginVertical: 10,
    backgroundColor: "#e58e26",
  },
});

export default TaskFormScreen;
