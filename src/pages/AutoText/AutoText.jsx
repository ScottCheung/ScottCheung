import React, { useState, useEffect, useRef } from 'react';
import RawData from './RawData';
import Toast from './Toast';

const AutoText = () => {
  const theadRef = useRef(null);
  const tbodyRef = useRef(null);
  const [theadWidth, setTheadWidth] = useState('auto');
  const [toast, setToast] = useState(['', 0]);

  useEffect(() => {
    if (tbodyRef.current) {
      const tbodyWidth = tbodyRef.current.scrollWidth;
      setTheadWidth(tbodyWidth + 'px');
    }
  }, [RawData]);

  const handleRowClick = (index, item) => {
    const emailContent = generateEmail(item);
    navigator.clipboard.writeText(emailContent).then(() => {
      setToast(['复制成功', 700]);
      setTimeout(() => {
        setToast(['', 0]);
      }, 3000);
    });

    const checkbox = document.getElementById(`checkbox-table-search-${index}`);
    if (checkbox) {
      checkbox.checked = !checkbox.checked;
    }
  };

  const generateEmail = (item) => {
    return `
Hello ${item.Agent},

My name is ${item.Sender} and I have just graduated from the University of New South Wales. 
My friend and I are interested in renting the property at ${item['property address']} 
and would like to enquire about some specifics to see if the property meets my needs.
    
  - What is the earliest time I can view the property?
  - I would like to enter into a one year contract. 
    We would like to know the maximum length of the contract.
  - I see that the rent is ${item.Rent.trim()} per week. 
    Are there any additional costs that are not included in this amount? Also, 
    if we sign a long term lease, will we get a discount?
    
Thank you for your time and help. I am very interested in this property and look forward to 
hearing from you so we can proceed further.

Kind regards,
${item.Sender}
    `;
  };

  return (
    <div className='relative w-full overflow-x-auto shadow-md sm:rounded-lg'>
      <p className='flex justify-center w-full px-6 py-3 text-xl text-center'>
        欢迎访问受保护的页面
      </p>
      <table className='relative w-full text-left text-gray-500 rtl:text-right dark:text-gray-400'>
        <thead
          ref={theadRef}
          className='text-[20px] bg-sky-700 text-sky-100 uppercase dark:bg-gray-700 dark:text-gray-400 fixed top-0 z-10 w-full'
        >
          <tr className=''>
            <th scope='col' className='p-4 w-[3%]'>
              <div className='flex items-center'>
                <input
                  id='checkbox-all-search'
                  type='checkbox'
                  className='w-8 h-8 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600'
                />
                <label htmlFor='checkbox-all-search' className='sr-only'>
                  checkbox
                </label>
              </div>
            </th>
            <th scope='col' className='px-6 py-3 text-center w-[7%]'>
              Index
            </th>
            <th scope='col' className='px-6 py-3 text-center w-[20%]'>
              Property Address
            </th>
            <th scope='col' className='px-6 py-3 text-center flex-1 w-[70%]'>
              Message
            </th>
          </tr>
        </thead>

        <tbody ref={tbodyRef}>
          {RawData.map((item, index) => (
            <tr
              key={index}
              onClick={() => handleRowClick(index, item)}
              className=' border-b text-[20px] dark:bg-gray-800 dark:border-gray-700 hover:bg-sky-50 dark:hover:bg-gray-600 w-[1%]'
            >
              <td className='p-4'>
                <div className='flex items-center'>
                  <input
                    id={`checkbox-table-search-${index}`}
                    type='checkbox'
                    className='w-8 h-8 text-blue-600 bg-gray-100 border-gray-300 rounded-full dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600'
                  />
                </div>
              </td>
              <td className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white text-center w-[7%]'>
                {index + 1}
              </td>
              <td className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white w-[7%]'>
                <a
                  href={item['Oringinal Link']}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-blue-600 dark:text-blue-400'
                >
                  {item['property address']}
                </a>
              </td>
              <td className='px-6 py-4 text-left text-base w-[70%]'>
                <pre>{generateEmail(item)}</pre>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Toast message={toast[0]} duration={toast[1]} />
    </div>
  );
};

export default AutoText;
