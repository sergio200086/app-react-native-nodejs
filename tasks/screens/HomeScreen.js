import { StyleSheet } from "react-native";
import React from "react";

import Template from "../components/Template";
import TaskList from "../components/TaskList";

const HomeScreen = () => {
  return (
    <Template>
      <TaskList />
    </Template>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#222f3e",
  },
});

export default HomeScreen;
