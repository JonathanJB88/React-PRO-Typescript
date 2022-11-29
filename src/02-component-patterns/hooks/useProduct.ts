import { useEffect, useRef, useState } from 'react';
import { OnChangeArgs, Product, InitialValues } from '../interfaces/interfaces';

interface useProductArgs {
  product: Product;
  onChange?: (args: OnChangeArgs) => void;
  value?: number;
  initialValues?: InitialValues;
}

export const useProduct = ({
  onChange,
  product,
  value = 0,
  initialValues,
}: useProductArgs) => {
  const [counter, setCounter] = useState<number>(initialValues?.count || value);

  const isMounted = useRef(false);

  const increaseBy = (value: number) => {
    let newValue = Math.max(counter + value, 0);
    initialValues?.maxCount &&
      (newValue = Math.min(newValue, initialValues.maxCount));
    setCounter(newValue);

    onChange && onChange({ count: newValue, product });
  };

  const reset = () => {
    setCounter(initialValues?.count || 0);
  };

  useEffect(() => {
    if (!isMounted.current) return;
    setCounter(value);
  }, [value]);

  // useEffect(() => {
  //   isMounted.current = true;
  // }, []);

  return {
    counter,
    maxCount: initialValues?.maxCount,
    isMaxCountReached:
      !!initialValues?.count && initialValues.maxCount === counter,
    increaseBy,
    reset,
  };
};
