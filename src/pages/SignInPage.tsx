/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/ban-ts-comment */
import { Text, Box, Flex, CSSObject, MantineTheme, Image, useMantineTheme } from '@mantine/core';
// @ts-ignore
import { SignInForm } from 'marti-react-components';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { OperationOutcomeIssue } from '@medplum/fhirtypes';
import { toast } from 'react-toastify';

import { SuccessComponent } from '../components/SuccessComponent';

export function SignInPage(): JSX.Element {
  const navigate = useNavigate();
  const theme = useMantineTheme();
  const handleErrors = (errors: OperationOutcomeIssue[] | undefined) => {
    if (errors) {
      errors.forEach((error) => toast.error(error?.details?.text));
    }
  };

  return (
    <Box sx={containerStyle}>
      <Box sx={topLeftImageStyle}>
        <Image src="/images/top-left.png" alt="design pallets" />
      </Box>
      <Flex sx={flexContainerStyle} justify="center" align="center" className="sign-in-container">
        <SignInForm
          projectId={import.meta.env.VITE_MEDPLUM_PROJECT_ID}
          googleClientId={import.meta.env.VITE_MEDPLUM_GOOGLE_CLIENT_ID}
          onSuccess={() => navigate('/')}
          styles={formContainerStyle()}
          formStyles={formStyle(theme)}
          dividerColor={theme.colors.border[0]}
          linkColor={theme.colors.border[0]}
          onForgotPassword={() => navigate('/reset-password')}
          onRegister={() => navigate('/register')}
          onError={handleErrors}
          renderSuccess={() => <SuccessComponent text="Success" />}
          visibilityToggleIcon={({ reveal }: { reveal: boolean }) =>
            reveal ? <Image src="/images/hide.svg" alt="closed eye" /> : <Image src="/images/show.svg" alt="open eye" />
          }
        >
          <Box sx={{ width: '75px' }}>
            <Image src="/images/logo.png" alt="logo" />
          </Box>
          <Text size="lg" sx={heading} mb="37px">
            Sign in to Marti Health
          </Text>
        </SignInForm>
      </Flex>
      <Box sx={bottomRightImageStyle}>
        <Image src="/images/bottom-right.png" alt="design pallets" />
      </Box>
    </Box>
  );
}

const formContainerStyle = () => ({
  width: '100%',
  border: 'none',
  boxShadow: 'none',
});

const formStyle = (theme: MantineTheme) => ({
  background: theme.colors.brand[0],
  padding: '0 28px 28px',
  borderRadius: '28px',
});

const heading = (theme: MantineTheme) => ({
  color: theme.colors.primary,
});

const containerStyle = () => ({
  'min-height': '100vh',
  height: '100%',
});

const flexContainerStyle = () => ({
  height: '100%',
  width: '100%',
  margin: '0 auto',
});

const commonImageStyle = (): CSSObject => ({
  position: 'absolute',
  width: '100%',
  height: '100%',
});

const topLeftImageStyle = (): CSSObject => ({
  ...commonImageStyle(),
  top: 0,
  left: 0,
  'max-width': '389px',
  'max-height': '318px',
});

const bottomRightImageStyle = (): CSSObject => ({
  ...commonImageStyle(),
  bottom: -50,
  right: 0,
  'max-width': '303px',
  'max-height': '205px',
});
