import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

interface ProfileProps {
  showProfileData?: boolean;
}

export function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>César</Text>
          <Text color="gray.300" fontSize="small">
            Cesar@test
          </Text>
        </Box>
      )}

      <Avatar
        size="md"
        name="César Machado"
        src="https://github.com/cesar-machado.png"
      />
    </Flex>
  );
}
