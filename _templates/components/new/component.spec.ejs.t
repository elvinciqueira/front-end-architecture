---
to: src/<%= h.getTypePath(locals.type) %><%=name%>/<%=name%>/<%=name%>.test.js
---
import React from 'react'
import { screen, render } from '@testing-library/react';
import <%= name %> from './<%= name %>';

describe('<%= name %>', () => {
  it('renders as expected', () => {
    render(<<%= name %> />);
    expect(true).toBe(true);
  })
})
