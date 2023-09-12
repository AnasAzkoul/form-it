import React from 'react';
import MainCategory from '../MainCategory';
import {widgetMenuItems} from './constants';
import DraggableWidget from './DraggableWidget';

const WidgetsMenu = () => {
  return (
    <div>
      <MainCategory>Drag a component</MainCategory>
      <ul>
        {widgetMenuItems.map((widget, index) => (
          <li key={index}>
            <DraggableWidget widget={widget} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default WidgetsMenu;
