import { Color } from 'styles/interfaces';
import { TagTypes } from './interfaces';

export const convertTypeInColor = (type: TagTypes): Color => {
  switch (type) {
    case 'primary': {
      return 'primaryMain';
    }

    case 'success': {
      return 'successMain';
    }

    case 'warning': {
      return 'warningMain';
    }

    case 'danger': {
      return 'dangerMain';
    }

    case 'info': {
      return 'infoMain';
    }

    default: {
      return 'neutral90';
    }
  }
};

export const getDynamicVariantTypeProperties = (type: TagTypes) => {
  if (type === 'disabled') {
    return {
      backgroundColor: 'neutral20',
      color: 'neutral100',
      borderColor: 'neutral50',
    };
  }

  return {
    backgroundColor: `$${type}BgColor`,
    color: `$${type}Main`,
    borderColor: `$${type}Border`,
  };
};
