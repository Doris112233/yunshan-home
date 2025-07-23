import React from 'react';
import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import './LoadingSpinner.less';

interface LoadingSpinnerProps {
  visible: boolean;
  size?: 'small' | 'default' | 'large';
  tip?: string;
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({
  visible,
  size = 'large',
  tip = '页面加载中...',
}) => {
  if (!visible) return null;

  return (
    <div className="loading-overlay">
      <div className="loading-content">
        <Spin
          size={size}
          tip={tip}
          indicator={<LoadingOutlined style={{ fontSize: 24 }} spin />}
        />
      </div>
    </div>
  );
};

export default LoadingSpinner;
