import React from 'react';
import { motion } from 'framer-motion';

const Buttons = ({
  position,
  btnsize,
  icon,
  type,
  onClick,
  disabled,
  location,
}) => {
  const buttonStyles = {
    '--scrim-background-color': 'rgb(66, 66, 66)',
    '--scrim-hover-background-color': '#37373a',
    '--scrim-active-background-color': '#2f2f32',
    '--icon-color': '#f7f7f7',
    '--icon-interaction-color': 'rgb(255, 255, 255)',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    height: `${btnsize}`,
    width: `${btnsize}`,
    outline: 'none',
    position: 'absolute',
    zIndex: 1,
    margin: 0,
    padding: 0,
    border: 0,
    justifyContent: 'center',
    cursor: 'pointer',
    transition: 'background-color 100ms linear, color 100ms linear',
    backgroundColor: 'var(--scrim-background-color)',
    color: 'var(--icon-color)',
  };
  const iconStyles = {
    fill: 'currentColor',
    pointerEvents: 'none',
  };

  return (
    <motion.button
      initial={{ opacity: 0, scale: 0 }}
      animate={{
        ...(disabled
          ? { opacity: 0.2, scale: 1 }
          : { opacity: 0.7, scale: 1, transition: { duration: 0.5 } }),
      }}
      exit={{ opacity: 0, scale: 0 }}
      transition={{ duration: 0.3 }}
      whileTap={{ ...(disabled ? {} : { scale: 0.9, opacity: 0.5 }) }}
      whileHover={{ ...(disabled ? {} : { scale: 1.1, opacity: 1 }) }}
      type='button'
      className={` ${
        location || 'absolute'
      } flex  ${position} z-50 drop-shadow-2xl ${
        disabled ? 'cursor-not-allowed' : 'cursor-pointer'
      }`}
      onClick={onClick}
      style={buttonStyles}
      disabled={disabled}
    >
      <div className='text-white px-4 py-2 rounded-full lg:scale-150'>
        <div className=''>
          <motion.span
            initial={{ rotate: 90 }}
            whileTap={{ scale: 0.9, opacity: 0.8, rotate: 270 }}
            className={` hover:opacity-100 opacity-70 drop-shadow-md shadow-xl  `}
            style={iconStyles}
          >
            {/* 剪头 */}
            {type == '>' && (
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='8 8 20 20'
                className={` ${icon}  text-white `}
              >
                <path d='M23.5587,16.916 C24.1447,17.4999987 24.1467,18.446 23.5647,19.034 L16.6077,26.056 C16.3147,26.352 15.9287,26.4999987 15.5427,26.4999987 C15.1607,26.4999987 14.7787,26.355 14.4867,26.065 C13.8977,25.482 13.8947,24.533 14.4777,23.944 L20.3818,17.984 L14.4408,12.062 C13.8548,11.478 13.8528,10.5279 14.4378,9.941 C15.0218,9.354 15.9738,9.353 16.5588,9.938 L23.5588,16.916 L23.5587,16.916 Z'></path>
              </svg>
            )}
            {/* 叉叉 */}
            {type == 'x' && (
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 20 20'
                className={` ${icon}  text-white `}
              >
                <path d='M12.12,10l4.07-4.06a1.5,1.5,0,1,0-2.11-2.12L10,7.88,5.94,3.81A1.5,1.5,0,1,0,3.82,5.93L7.88,10,3.81,14.06a1.5,1.5,0,0,0,0,2.12,1.51,1.51,0,0,0,2.13,0L10,12.12l4.06,4.07a1.45,1.45,0,0,0,1.06.44,1.5,1.5,0,0,0,1.06-2.56Z'></path>
              </svg>
            )}
            {/* 加号 */}
            {type == '+' && (
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 36 36'
                className={` ${icon}  text-white `}
              >
                <path
                  class='st1'
                  d='M25.5,16.5l-5.9,0l0-5.9C19.6,9.7,18.9,9,18,9c-0.9,0-1.5,0.7-1.5,1.5l0,5.9l-5.9,0h0 C9.7,16.4,9,17.1,9,18c0,0.9,0.7,1.5,1.5,1.5l5.9,0l0,5.9c0,0.9,0.7,1.5,1.5,1.5c0.9,0,1.5-0.7,1.5-1.5l0-5.9l5.9,0h0 c0.9,0,1.5-0.7,1.5-1.5C27,17.2,26.3,16.5,25.5,16.5L25.5,16.5z'
                ></path>
              </svg>
            )}
            {/* 放大 */}
            {type == 'zoomIn' && (
              <img
                className={` ${icon}  filter brightness-0 invert`}
                src='https://cdn-icons-png.flaticon.com/512/545/545651.png'
              />
            )}
            {/* 缩小 */}
            {type == 'zoomOut' && (
              <img
                className={` ${icon}  filter brightness-0 invert`}
                src='https://cdn-icons-png.flaticon.com/512/74/74158.png'
              />
            )}
            {/* 恢复100% */}
            {type == 'recovery' && <div className='text-sm'>1:1</div>}
          </motion.span>
        </div>
      </div>
    </motion.button>
  );
};

export default Buttons;
