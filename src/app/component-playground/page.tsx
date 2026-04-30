import { Box, Container, Link, SimpleGrid, Stack, Text } from "@chakra-ui/react";

export default function ComponentPlaygroundPage() {
  return (
    <Container maxW="6xl" py={{ base: 10, md: 16 }}>
      <Stack gap={{ base: 8, md: 10 }}>
        <Stack gap={3}>
          <Link href="/" w="fit-content" color="fg.muted">
            ← Home
          </Link>
          <Text fontSize={{ base: "4xl", md: "5xl" }} fontWeight="bold">
            Component Playground
          </Text>
          <Text fontSize={{ base: "lg", md: "xl" }} color="fg.muted" maxW="80ch">
            A space to experiment with UI patterns, interaction, and accessibility. Keep changes
            small, test with keyboard, and prefer predictable behavior.
          </Text>
        </Stack>

        <SimpleGrid columns={{ base: 1, lg: 3 }} gap={{ base: 6, md: 8 }}>
          <Box
            gridColumn={{ base: "auto", lg: "span 2" }}
            bg="bg.emphasized"
            borderWidth="1px"
            borderColor="border"
            borderRadius="xl"
            p={{ base: 5, md: 6 }}
          >
            <Text fontSize="xl" fontWeight="bold" mb={2}>
              Live area
            </Text>
            <Text color="fg.muted" mb={4} maxW="80ch">
              Drop interactive components here. When you make your resume interactive, the
              patterns you build here can be reused (keyboard handling, focus rings, motion).
            </Text>
            <Box
              borderRadius="lg"
              borderWidth="2px"
              borderStyle="dashed"
              borderColor="border"
              minH={{ base: "220px", md: "320px" }}
              display="flex"
              alignItems="center"
              justifyContent="center"
              bg="bg"
            >
              <Text color="fg.muted">Playground surface (placeholder)</Text>
            </Box>
          </Box>

          <Box
            bg="bg.emphasized"
            borderWidth="1px"
            borderColor="border"
            borderRadius="xl"
            p={{ base: 5, md: 6 }}
          >
            <Text fontSize="xl" fontWeight="bold" mb={2}>
              Checklist
            </Text>
            <Stack gap={2} color="fg.muted" lineHeight="tall">
              <Text>Tab order makes sense.</Text>
              <Text>Visible focus on all controls.</Text>
              <Text>Hover has a non-hover equivalent.</Text>
              <Text>Motion is subtle and optional.</Text>
              <Text>Text stays readable at 200% zoom.</Text>
            </Stack>
          </Box>
        </SimpleGrid>

        <Box
          bg="bg.emphasized"
          borderWidth="1px"
          borderColor="border"
          borderRadius="xl"
          p={{ base: 5, md: 6 }}
        >
          <Text fontSize="xl" fontWeight="bold" mb={2}>
            Experiments
          </Text>
          <Text color="fg.muted" maxW="90ch" lineHeight="tall">
            Add small “cards” for each experiment (e.g. Button states, List patterns, Motion,
            Responsive typography). Keep each experiment goal-focused and measurable.
          </Text>
        </Box>
      </Stack>
    </Container>
  );
}

