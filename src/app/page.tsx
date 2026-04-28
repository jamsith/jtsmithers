import { ColorModeButton } from "@/components/ui/color-mode";
import { Box, Stack, Text } from "@chakra-ui/react"

export default function Home() {
  return (
    <Stack bg="bg.emphasized" height="100vh">
      <Box h="100%" bg="bg.subtle" p={2} m={4} borderRadius="md" boxShadow="sm">
        <Stack bg="bg.info" direction="row" justify="space-around" align="center" p={4}>
          <Text fontSize="4xl" fontWeight="bold" color="fg.muted">Jason Smith</Text>
        </Stack>
        <Stack direction="row" justify="space-around" align="center" p={4}><ColorModeButton /></Stack>
      </Box>
    </Stack>

  );
}
