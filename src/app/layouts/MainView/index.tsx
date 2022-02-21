import React, { memo, useEffect } from 'react';
import { ContainerWrap } from '../components/ContainerWrap/ContainerWrap';
import { Sidebar } from '../components/Sidebar';
import { Topbar } from '../components/Topbar';
import { Footer } from '../components/Footer';
import { useLocation } from 'react-router-dom';

interface Props {
  children: React.ReactNode;
}

export const MainView = memo((props: Props) => {
  // Scroll to the top
  const routePath = useLocation();
  const onTop = () => {
    window.scrollTo(0, 0);
  };
  useEffect(() => {
    onTop();
  }, [routePath]);
  return (
    <div>
      <div className="layout">
        <Sidebar />
        <Topbar />
      </div>
      <ContainerWrap className="container_wrap">{props.children}</ContainerWrap>
      <Footer />
    </div>
  );
});
