// taskHooks.js (create a new file)

import { useState } from 'react';
import { Alert } from 'react-native';

function useTask() {
  const [tasks, setTasks] = useState([]);
  const [taskTitle, setTaskTitle] = useState('');

  function handleAddTask(taskTitle) {
    if (taskTitle.trim() === '') {
      Alert.alert('Opa!', 'Você precisa digitar um título para a tarefa');
      return;
    }

    const newTask = {
      id: String(new Date().getTime()),
      title: taskTitle,
      finished: false
    };

    setTasks([newTask, ...tasks]);
    setTaskTitle('');
  }

  function handleToggleTaskFinished(taskId) {
    const updatedTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return {
          ...task,
          finished: !task.finished
        };
      }
      return task;
    });

    setTasks(updatedTasks);
  }

  function handleRemoveTask(taskId) {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);

    Alert.alert(
      'Remover item',
      'Tem certeza que você deseja remover este item?',
      [
        {
          text: 'Não',
          style: 'cancel'
        },
        {
          text: 'Sim',
          onPress: () => setTasks(updatedTasks)
        }
      ]
    );
  }

  return {
    tasks,
    taskTitle,
    setTaskTitle,
    handleAddTask,
    handleToggleTaskFinished,
    handleRemoveTask
  };
}

export default useTask;
