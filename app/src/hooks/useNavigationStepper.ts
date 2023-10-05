import { ParamListBase, useNavigationState, NavigationState } from "@react-navigation/native";
import { useNavigation } from "./useNavigation";

export const useNavigationStepper = <T extends ParamListBase>() => {
    const navigation = useNavigation<T>();
    const { routeNames, index } = useNavigationState<
      T,
      Pick<NavigationState<T>, 'routeNames' | 'index'>
    >(({ routeNames, index }) => ({ routeNames, index }));
  
    const canGoNext = index < routeNames.length - 1;
  
    function goNext() {
      const nextIndex = index + 1;
      if (nextIndex < routeNames.length) {
        navigation.navigate(routeNames[nextIndex] as any);
      }
    }
  
    const canGoBack = index > 0;
  
    function goBack() {
      const previousIndex = index - 1;
      if (previousIndex >= 0) {
        navigation.navigate(routeNames[previousIndex] as any);
      }
    }
  
    return {
      canGoNext,
      goNext,
      canGoBack,
      goBack,
    };
  };
  