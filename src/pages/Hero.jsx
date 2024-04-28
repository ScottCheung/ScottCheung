import { Fragment, useRef, useState, useEffect } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { ExclamationTriangleIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

const getRandomMessage = (count) => {
  const messages = [
    `感谢您第一次，访问我的个人网站。这是一个SPA网页，第一次缓存时间较长，可能存在临时数据丢失。有任何疑问，请通过邮箱联系我，我会尽快回复。感谢您的阅读，祝您生活愉快。接好运~。`,
    `你好，虽然我不知道你是谁，这是你第${count}次访问我的网页。最近过得还好吗？`,
    `朋友，你好！很高兴再次看到你。这是你第${count}次来看我，要多喝水哦~`,
    // 添加更多消息
  ];

  const randomIndex = Math.floor(Math.random() * messages.length);
  return messages[randomIndex];
};

export default function CustomModal() {
  const [open, setOpen] = useState(true);
  const cancelButtonRef = useRef(null);
  const [visitCount, setVisitCount] = useState(0);

  useEffect(() => {
    // Check and update visit count
    const storedCount = localStorage.getItem("visitCount");
    const count = storedCount ? parseInt(storedCount, 10) : 0;

    // If it's the first visit, show the modal
    if (count === 0) {
      setOpen(true);
    }

    // Increment the visit count
    setVisitCount(count + 1);

    // Update visit count in localStorage
    localStorage.setItem("visitCount", count + 1);
  }, []); // Empty dependency array ensures that this effect runs only once

  const closeModal = () => {
    setOpen(false);
  };

  const message = getRandomMessage(visitCount);

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as="div"
        className="fixed inset-0 z-50 overflow-y-auto "
        onClose={setOpen}
      >
        <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0 ">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterhref="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leavehref="opacity-0"
            className="flex justify-center items-center transform transition-all min-h-[70vh]"
          >
            <Dialog.Overlay className="fixed inset-0 bg-gray-900 bg-opacity-90 transition-opacity" />
          </Transition.Child>

          {/* <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">
            &#8203;
          </span> */}
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enterhref="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
            leavehref="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            className="flex justify-center items-center transform transition-all "
          >
            {/* // <!-- Extra Large Modal --> */}
            <div
              id="extralarge-modal"
              tabindex="-1"
              className="fixed top-0 left-0 right-0 z-50  w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full"
            >
              <div className="relative w-full max-w-9xl h-full">
                {/* <!-- Modal content --> */}
                <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                  {/* <!-- Modal header --> */}
                  <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                    <h3 className="text-xl font-medium text-gray-900 dark:text-white">
                      {/* Extra Large modal */}
                    </h3>
                    <button
                      type="button"
                      className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                      data-modal-hide="extralarge-modal"
                    >
                      <svg
                        className="w-3 h-3"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 14 14"
                      >
                        <path
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                        />
                      </svg>
                      <span className="sr-only">Close modal</span>
                    </button>
                  </div>
                  {/* <!-- Modal body --> */}
                  <div className="p-4 md:p-5 space-y-4">
                    <p className="text-[30px] leading-relaxed text-gray-500 dark:text-gray-400">
                      {message}
                    </p>
                  </div>
                  {/* <!-- Modal footer --> */}
                  <div className="flex items-center p-4 md:p-5 space-x-3 rtl:space-x-reverse border-t border-gray-200 rounded-b dark:border-gray-600">
                    <button
                      data-modal-hide="extralarge-modal"
                      type="button"
                      className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                      I accept
                    </button>
                    <button
                      data-modal-hide="extralarge-modal"
                      type="button"
                      className="ms-3 text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
                    >
                      Decline
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
