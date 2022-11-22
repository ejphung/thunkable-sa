import React, { FC } from 'react';
import { Layout } from 'antd';

import images from '../config/images';

const { Header } = Layout;

const ThunkableHeader: FC = () => {
  return (
    <Layout>
      <Header
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'flex-start',
          padding: '12px 89px',
          background: '#F7F9FD',
          boxShadow: '0px -1px 4px rgba(0, 0, 0, 0.203436)',
          height: 'auto',
        }}
      >
        <img
          src={images.logos.thunkableBeaver}
          alt='thunkable-header-logo'
          style={{
            height: '32px',
            width: '32px',
            marginBottom: '49px',
          }}
        />
        <p
          style={{
            fontFamily: '"Source Sans Pro", helvetica',
            fontWeight: 600,
            fontSize: '16px',
            lineHeight: '36px',
            color: '#424242',
            margin: 0,
            padding: '0 12px',
          }}
        >
          MY PROJECTS
        </p>
      </Header>
    </Layout>
  )
}

export default ThunkableHeader;
