import React from 'react';
import { Switch } from '@headlessui/react';
import cn from 'classnames';

interface Props {
  srLabel?: string;
}

interface ControledProps extends Props {
  enabled: boolean;
  onChange: (enabled: boolean) => void;
}

const ControledToggle: React.FC<ControledProps> = ({
  srLabel,
  enabled,
  onChange,
}) => {
  return (
    <Switch
      className={cn(
        enabled ? 'bg-indigo-500' : 'bg-gray-200',
        'relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full transition-colors ease-in-out duration-200',
      )}
      checked={enabled}
      onChange={onChange}
    >
      {srLabel && <span className="sr-only">{srLabel}</span>}
      <span
        aria-hidden="true"
        className={cn(
          enabled ? 'translate-x-5' : 'translate-x-0',
          'pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200',
        )}
      />
    </Switch>
  );
};

export default ControledToggle;
