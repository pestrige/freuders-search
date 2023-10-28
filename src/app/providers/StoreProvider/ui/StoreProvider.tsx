import { ReactElement, ReactNode } from "react";
import { Provider } from "react-redux";

import { createReduxStore, StoreSchema } from "src/shared/config";

interface Props {
  children: ReactNode;
  initialState?: Partial<StoreSchema>;
}

/**
 * Store Provider.
 * initialState is optional, and is used for testing for example.
 */

export const StoreProvider = ({ children }: Props): ReactElement => {
  const store = createReduxStore();

  return <Provider store={store}>{children}</Provider>;
};
