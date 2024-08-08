import React from 'react';
import funngroInfo from '../Constant';

function Dock() {
  return (
    <div className='Dock-Container'>
      <div className='Dock'>
        {funngroInfo.stats.map((element) => {
          const IconComponent = element.icon;
          return (
            <div key={element.id} className='stat-item'>
              <div className='icon'>
                <IconComponent />
              </div>
              <div className='stat-item-text'>
                <span className='stat-value'>{element.value}</span>
                <span className='stat-label'>{element.label}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Dock;
