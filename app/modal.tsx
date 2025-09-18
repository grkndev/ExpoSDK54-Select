import { StyleSheet, Text, View } from 'react-native';

export default function ModalScreen() {
  return (
    <View className='flex-1 justify-center items-center'>
      <Text>This is a modal</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  link: {
    marginTop: 15,
    paddingVertical: 15,
  },
});
