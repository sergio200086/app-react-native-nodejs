import { FlatList, RefreshControl } from "react-native";
import React, { useState, useEffect, useCallback } from "react";
import { useIsFocused } from "@react-navigation/native";

import { getTask, deleteTask } from "../api";

import TaskItem from "./TaskItem";

const TaskList = () => {
  const [tasks, setTask] = useState([]);
  const [refreshing, setRefreshing] = useState(false);

  const isFocused = useIsFocused();

  const loadTask = async () => {
    const datos = await getTask();
    setTask(datos);
  };

  useEffect(() => {
    console.log(isFocused);
    loadTask();
  }, [isFocused]);

  const handleDeleteTask = async (id) => {
    await deleteTask(id);
    await loadTask();
  };

  const renderItem = ({ item }) => {
    return <TaskItem task={item} handleDeleteTask={handleDeleteTask} />;
  };

  const onRefresh = React.useCallback(async () => {
    setRefreshing(true);
    await loadTask();
    setRefreshing(false);
  });

  return (
    <FlatList
      style={{ width: "100%" }}
      data={tasks}
      keyExtractor={(item) => item.id + ""}
      renderItem={renderItem}
      refreshControl={
        <RefreshControl
          refreshing={refreshing}
          colors={["#78e08f"]}
          onRefresh={onRefresh}
          progressBackgroundColor="#0a3d62"
        />
      }
    />
  );
};

export default TaskList;
