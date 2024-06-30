import { createContext } from 'react';
import { ContextProps } from '../Models/ContextProps.Interface';

export const FilmsContext = createContext<ContextProps>({} as ContextProps);
