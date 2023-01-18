import React from 'react';
import { Flex, MantineTheme, CSSObject, Image, Text, Box } from '@mantine/core';

export function SuccessComponent({ text }: { text: string }): JSX.Element {
  return (
    <Flex direction="column" sx={successContainer} justify="center" align="center">
      <Box sx={imageStyle}>
        <Image src="/images/check.svg" alt="success" />
      </Box>
      <Text sx={successText}>{text}</Text>
    </Flex>
  );
}

const successContainer = (theme: MantineTheme): CSSObject => ({
  width: '100%',
  height: 197,
  borderRadius: 30,
  backgroundColor: theme.colors.brand[0],
});

const successText = (theme: MantineTheme): CSSObject => ({
  fontWeight: 500,
  fontSize: 33,
  lineHeight: '40px',
  color: theme.colors.primary[0],
});

const imageStyle: CSSObject = {
  width: 60,
};
