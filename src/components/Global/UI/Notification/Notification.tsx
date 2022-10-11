import { createPortal } from "react-dom";

import { useAppSelector, useAppDispatch } from "@/app/hooks";
import { remove } from "@/features/alert/alertSlice";

const Notification = () => {
  const { show, type, message } = useAppSelector((state) => state.alert);
  const dispatch = useAppDispatch();

  const closeNotification = () => {
    dispatch(remove());
  };

  const notificationBorder = (type: string) => {
    switch (type) {
      case "success":
        return "border-green-600";
        break;
      case "error":
        return "border-red-600";
        break;
      default:
        return "border-cyan-500";
    }
  };

  const notificationIcon = (type: string) => {
    switch (type) {
      case "success":
        return "text-green-600 bg-green-100";
        break;
      case "error":
        return "text-red-600 bg-red-100";
        break;
      default:
        return "text-cyan-600 bg-cyan-100";
    }
  };
  return createPortal(
    show ? (
      <div
        id={`toast-${type}`}
        className={`absolute top-2.5 right-2.5 flex items-center p-4 mb-4 w-full max-w-xs text-gray-500 bg-white shadow border-b-2 ${notificationBorder(
          type
        )}`}
        role="alert"
      >
        <div
          className={`inline-flex flex-shrink-0 justify-center items-center w-8 h-8 rounded-lg ${notificationIcon(
            type
          )}`}
        >
          <svg
            aria-hidden="true"
            className="w-5 h-5"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
              clipRule="evenodd"
            ></path>
          </svg>
          <span className="sr-only">Check icon</span>
        </div>
        <div className="ml-3 text-sm font-normal">{message}</div>
        <button
          type="button"
          className="ml-auto -mx-1.5 -my-1.5 bg-white text-gray-400 p-1.5 inline-flex h-8 w-8"
          data-dismiss-target="#toast-success"
          aria-label="Close"
          onClick={closeNotification}
        >
          <span className="sr-only">Close</span>
          <svg
            aria-hidden="true"
            className="w-5 h-5"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>
      </div>
    ) : null,
    document.body
  );
};

export default Notification;
