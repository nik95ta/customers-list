import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCustomers, useGetCustomersQuery } from '../features/customers';
import { RootState } from '../app/store';

const useCustomerData = () => {
  const dispatch = useDispatch();
  const { data: fetchedCustomers, error, isLoading } = useGetCustomersQuery();
  const customers = useSelector((state: RootState) => state.customers.list);

  useEffect(() => {
    if (fetchedCustomers) {
      dispatch(setCustomers(fetchedCustomers));
    }
  }, [fetchedCustomers, dispatch]);

  return { customers, error, isLoading };
};

export default useCustomerData;
