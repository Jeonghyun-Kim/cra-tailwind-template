import React from 'react';
import cn from 'classnames';

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  children?: React.ReactNode;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
}

const Button: React.FC<Props> = ({
  className,
  children,
  disabled,
  size = 'md',
}) => {
  return (
    <button
      type="button"
      className={cn(
        className,
        'inline-flex items-center border border-transparent font-medium shadow-sm',
        {
          'px-2.5 py-1.5 text-xs rounded ': size === 'xs',
          'px-3 py-2 text-sm leading-4 ounded-md': size === 'sm',
          'px-4 py-2 text-sm rounded-md': size === 'md',
          'px-4 py-2 text-base rounded-md': size === 'lg',
          'px-6 py-3 text-base rounded-md': size === 'xl',
          'text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500': !disabled,
          'text-gray-50 bg-gray-400 opacity-70 cursor-default': disabled,
        },
      )}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
