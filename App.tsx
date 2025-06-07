import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import './global.css';

export default function App() {
  return (
    <View className='flex-1 items-center justify-center bg-accent dark:bg-blue-500'>
      <Text className='text-primary dark:text-white text-2xl font-bold border-2 border-primary p-4 rounded-md'>
        Hi Bijaya
      </Text>
      <StatusBar style='auto' />
    </View>
  );
}
