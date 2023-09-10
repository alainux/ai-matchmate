import {TabsLayout} from './Tabs';

export const AuthenticatedLayout: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  return (
    <>
      {children}
      <TabsLayout />
    </>
  );
};
