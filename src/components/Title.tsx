import { useEffect, ReactNode } from "react";

interface TitleProps {
  title: string;
  children: ReactNode;
}

const Title: React.FC<TitleProps> = ({ title, children }) => {
  useEffect(() => {
    document.title = title;
  }, [title]);

  return <>{children}</>;
};

export default Title;
