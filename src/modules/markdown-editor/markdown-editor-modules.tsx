import * as React from 'react';
import { useNavigation } from '@react-navigation/core';
import { Pressable, TextInput, View } from 'react-native';
import Markdown from 'react-native-markdown-display';
import Icon from 'react-native-vector-icons/Feather';
import { tailwind } from '@/tailwind';

const MarkdownEditorModules = () => {
  const navigation = useNavigation();

  const [isFocused, setIsFocused] = React.useState(false);
  const [markdown, setMarkdown] = React.useState('');

  const handleTextChange = (value: string) => setMarkdown(value);
  const handleEditorFocus = () => setIsFocused(true);
  const handleEditorSave = () => setIsFocused(false);

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
          <Pressable style={tailwind('p-4')} onPress={handleEditorSave}>
            <Icon name="save" size={20} color="#667EEA" />
          </Pressable>
        ),
    });
  }, [isFocused, navigation]);

  return (
    <View style={tailwind('flex-1 bg-gray-900')}>
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

export default MarkdownEditorModules;
