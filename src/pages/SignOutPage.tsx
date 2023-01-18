import { useMedplum } from 'marti-react-components';
import { useEffect } from 'react';

export function SignOutPage(): null {
  const medplum = useMedplum();

  useEffect(() => {
    medplum.signOut();
    window.location.href = '/';
  }, [medplum]);

  return null;
}
