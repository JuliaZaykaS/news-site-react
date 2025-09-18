import { AppDispatch } from '@/app/providers/StoreProvider';
import { useDispatch } from 'react-redux';

// типизация диспатча
// export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
