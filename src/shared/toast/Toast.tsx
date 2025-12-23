import React, { createContext, useContext } from "react";
import { message } from "antd";

const ToastContext = createContext<any>(null);

export const ToastProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [messageApi, contextHolder] = message.useMessage();

  return (
    <ToastContext.Provider value={messageApi}>
      {contextHolder}
      {children}
    </ToastContext.Provider>
  );
};

export const useToast = () => {
  const api = useContext(ToastContext);
  return api || message;
};
