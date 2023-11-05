import { ReactNode } from "react";
import Navbar from "./Navbar";

type ChildrenProps = {
  children: string | JSX.Element | JSX.Element[] | ReactNode;
};

const Layout = ({ children }: ChildrenProps) => {
  return (
    <div>
      <Navbar />
      {children}
    </div>
  );
};

export default Layout;
