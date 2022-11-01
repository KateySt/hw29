import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import type { RickMortyListState, AppDispatch } from '../storege/store'

export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RickMortyListState> = useSelector