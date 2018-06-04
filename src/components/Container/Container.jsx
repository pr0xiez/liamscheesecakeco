import React from 'react';
import cx from 'classnames';
import { Fade } from 'react-reveal';
import styles from './Container.module.scss';

const Container = props => {
  const { children } = props;
  const classes = cx(styles.container, { [styles.text]: props.text });
  return (
    <Fade up duration={1250} delay={500}>
      <div className={classes}>{children}</div>
    </Fade>
  );
};

export default Container;
