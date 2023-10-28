import { useDispatch } from "react-redux";
import { AppDispatch } from "src/shared/config";

export const useAppDispatch = () => useDispatch<AppDispatch>();
