import { useEffect, useState } from 'react';
import { Grid } from 'antd';

const { useBreakpoint: useAntdBreakpoint } = Grid;

const useBreakpoint = () => {
  const screens = useAntdBreakpoint();
  const { xs, sm, md, lg, xl, xxl } = screens;
  const [isMobile, setIsMobile] = useState<boolean>(false);
  
  useEffect(() => {
    if (xs || sm) setIsMobile(true)
  }, [xs, sm, md, lg, xl, xxl])

  return {
    isMobile,
    xs,
    sm,
    md,
    lg,
    xl,
    xxl,
  }
}

export default useBreakpoint;
