import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "./index";
import { RootState } from "@reduxjs/toolkit/query";

export const useAppDispatch : ()=> AppDispatch = useDispatch;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;