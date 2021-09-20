import React from 'react';
import { render } from '@testing-library/react';
import { createTheme, ThemeProvider } from '@material-ui/core';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import { DummyElement } from '../dummy-element';

const dummyTheme = createTheme();

export const muiCache = createCache({
  key: 'mui',
  prepend: true,
});

it.only('test', () => {
  const { asFragment } = render(
      <CacheProvider value={muiCache}>
        <ThemeProvider theme={dummyTheme}>
          <DummyElement />
        </ThemeProvider>
      </CacheProvider>
  );
  expect(asFragment()).toMatchSnapshot();
});
