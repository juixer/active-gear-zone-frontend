import { ReactNode } from "react";

const Container = ({ children }: { children: ReactNode }) => {
  return (
    // CONTAINER FOR 100VH HEIGHT AND MAX WIDTH
    <div className="max-w-screen-2xl min-h-screen mx-auto px-3 py-2 space-y-5">
      {children}
    </div>
  );
};
export default Container;
