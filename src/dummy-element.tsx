import React from 'react';
import { Theme } from '@material-ui/core';
import { makeStyles } from './make-styles';

const useStyles = makeStyles()((theme: Theme) => ({
  root: {
    backgroundColor: theme.palette.grey[100],
    width: '100px',
    height: '100px',
  },
}));

export const DummyElement = () => {
  const { classes, cx } = useStyles();
  return <div className={cx(classes.root)}>DUMMY</div>;
};
