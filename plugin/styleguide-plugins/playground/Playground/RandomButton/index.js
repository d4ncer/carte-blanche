/**
 * RandomButton
 *
 * Shows a button with a dice
 */

import React from 'react';
import { Button } from 'belle';
import styles from './styles';

const RandomButton = (props) => (
  <Button {...props} style={styles.base}>
    <img
      role="presentation"
      src="https://openclipart.org/download/224998/1439410433.svg"
      height={20}
    />
  </Button>
);

export default RandomButton;
