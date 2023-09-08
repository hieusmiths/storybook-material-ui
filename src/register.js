import React from 'react';
import {addons, types} from '@storybook/addons';
import AddonPanel from './UI/AddonPanel';
import { ADDON_ID, PANEL_ID } from './config';



addons.register(ADDON_ID, api => {
  addons.add(PANEL_ID, {
    type: types.PANEL,
    title: 'Material-UI',
    render: ({ active, key } = {}) => (
      <AddonPanel key={key} api={api} active={active} panel pointName="addon panel" />
    )
  });
});
