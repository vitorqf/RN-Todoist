// taskHooks.js (create a new file)

import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect, useState } from 'react';
import { Alert } from 'react-native';

export interface ITask {
  id: string;
  title: string;
  finished: boolean;
  created_at: string;
}

function useTask() {
  const [tasks, setTasks] = useState<ITask[]>([]);
  const [taskTitle, setTaskTitle] = useState('');

  async function storeTasks(tasks: ITask[]) {
    try {
      await AsyncStorage.setItem('@tasks', JSON.stringify(tasks));
    } catch (e) {
      Alert.alert('Opa!', 'Não foi possível salvar as tarefas');
    }
  }

  async function loadTasks() {
    try {
      const tasks = await AsyncStorage.getItem('@tasks');
      if (tasks) {
        setTasks(JSON.parse(tasks));
      }
    } catch (e) {
      Alert.alert('Opa!', 'Não foi possível carregar as tarefas');
    }
  }

  function handleAddTask(taskTitle: string) {
    if (taskTitle.trim() === '') {
      Alert.alert('Opa!', 'Você precisa digitar um título para a tarefa');
      return;
    }

    const newTask = {
      id: String(new Date().getTime()),
      title: taskTitle,
      finished: false,
      created_at: new Date().toLocaleString('pt-BR')
    };

    setTasks([newTask, ...tasks]);
    setTaskTitle('');
  }

  function handleToggleTaskFinished(taskId: string) {
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

  function handleRemoveTask(taskId: string) {
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

  useEffect(() => {
    loadTasks();
  }, []);

  useEffect(() => {
    storeTasks(tasks);
  }, [tasks]);

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
