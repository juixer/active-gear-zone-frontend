import { ReactNode } from "react";

const Container = ({ children }: { children: ReactNode }) => {
  return (
    <div className="max-w-screen-2xl min-h-screen mx-auto px-3 py-2">
      {children}
    </div>
  );
};
export default Container;
