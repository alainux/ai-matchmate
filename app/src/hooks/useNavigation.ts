import { ParamListBase, useNavigation as rnUseNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../Layout/RootStack';
export const useNavigation = <T extends ParamListBase = RootStackParamList>() => {
  return rnUseNavigation<StackNavigationProp<T>>();
};
