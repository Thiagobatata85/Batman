import React from 'react';
import { TextInput } from 'react-native';

import { styles } from './BatTextinputStyles';

interface BatTextinputProps{
  pass:string

}
export function BatTextinput(props : BatTextinputProps) {
  return (
        <TextInput
            style={styles.inputer}
            placeholder='pass'
           value={props.pass}
        />
        );
}