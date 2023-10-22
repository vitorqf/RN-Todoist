import { ITask } from '../hooks/useTask';

export type RootStackParamList = {
  Home: undefined;
  Details: { task: ITask } | undefined;
};
