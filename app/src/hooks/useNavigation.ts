import { useNavigation as rnUseNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../Layout/RootStack';
export const useNavigation = () => {
  return rnUseNavigation<StackNavigationProp<RootStackParamList>>();
};
