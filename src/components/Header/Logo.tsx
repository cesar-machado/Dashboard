import { Text } from "@chakra-ui/react";

export function Logo() {
  return (
    <Text fontSize="3xl" fontWeight="bold" letterSpacing="tight">
      DashUp
      <Text as="span" color="pink.500">
        .
      </Text>
    </Text>
  );
}
