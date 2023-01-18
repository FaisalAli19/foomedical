import { useMedplum } from 'marti-react-components';
import Router from './Router';

export function App(): JSX.Element | null {
  const medplum = useMedplum();

  if (medplum.isLoading()) {
    return null;
  }
  return <Router />;
}
