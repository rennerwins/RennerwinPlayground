import * as React from 'react';
import { useNavigation } from '@react-navigation/core';
import {
  Pressable,
  StyleSheet,
  TextInput,
  View,
  StatusBar,
} from 'react-native';
import Markdown from 'react-native-markdown-display';
import Icon from 'react-native-vector-icons/Feather';
import { tailwind } from '@/tailwind';

const MarkdownEditorModules = () => {
  const navigation = useNavigation();

  const [isFocused, setIsFocused] = React.useState(false);
  const [markdown, setMarkdown] = React.useState('');

  React.useEffect(() => {
    navigation.setOptions({
      title: '',
      headerStyle: {
        backgroundColor: '#111827',
        elevation: 0,
      },
      headerTintColor: '#667EEA',
      headerRight: () =>
        isFocused && (
          <Pressable
            style={tailwind('p-4')}
            onPress={() => setIsFocused(false)}>
            <Icon name="save" size={20} color="#667EEA" />
          </Pressable>
        ),
    });
  }, [isFocused, navigation]);

  const handleTextChange = (value: string) => setMarkdown(value);
  const handleEditorFocus = () => {
    setIsFocused(true);
  };

  return (
    <View style={styles.background}>
      <StatusBar backgroundColor="#111827" />
      <View>
        {isFocused ? (
          <TextInput
            style={tailwind('h-full px-4 text-sm text-white')}
            value={markdown}
            onChangeText={handleTextChange}
            textAlignVertical="top"
            placeholder="Start typing..."
            editable
            multiline
            autoFocus
          />
        ) : (
          <View style={tailwind('h-full')}>
            <Pressable style={tailwind('flex-1')} onPress={handleEditorFocus}>
              <Markdown
                style={{
                  body: tailwind('px-4 text-primary w-full'),
                  heading1: tailwind('text-primary w-full'),
                }}>
                {markdown}
              </Markdown>
            </Pressable>
          </View>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    backgroundColor: '#111827',
    flex: 1,
  },
  textEditor: {
    fontSize: 14,
    paddingHorizontal: 16,
    color: '#FFFFFF',
    height: '100%',
  },
});

export default MarkdownEditorModules;
