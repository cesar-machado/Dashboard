import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

export function Profile() {
  return (
    <Flex align="center">
      <Box mr="4" textAlign="right">
        <Text>César</Text>
        <Text color="gray.300" fontSize="small">
          Cesar@test
        </Text>
      </Box>

      <Avatar
        size="md"
        name="César Machado"
        src="https://github.com/cesar-machado.png"
      />
    </Flex>
  );
}
