import { Box, Container, Link, SimpleGrid, Stack, Text } from "@chakra-ui/react";

export default function AboutPage() {
  return (
    <Container maxW="5xl" py={{ base: 10, md: 16 }}>
      <Stack gap={{ base: 8, md: 10 }}>
        <Stack gap={3}>
          <Link href="/" w="fit-content" color="fg.muted">
            ← Home
          </Link>
          <Text fontSize={{ base: "4xl", md: "5xl" }} fontWeight="bold">
            About
          </Text>
          <Text fontSize={{ base: "lg", md: "xl" }} color="fg.muted" maxW="72ch">
            A quick overview of who I am, what I care about, and how I like to work.
          </Text>
        </Stack>

        <SimpleGrid columns={{ base: 1, md: 2 }} gap={{ base: 6, md: 8 }}>
          <Box
            bg="bg.emphasized"
            borderWidth="1px"
            borderColor="border"
            borderRadius="xl"
            p={{ base: 5, md: 6 }}
          >
            <Text fontSize="xl" fontWeight="bold" mb={2}>
              Bio
            </Text>
            <Text color="fg.muted" lineHeight="tall">
              Replace this with a short paragraph that’s easy to skim. Aim for 3–5 sentences,
              start with your current focus, and end with what you’re looking for next.
            </Text>
          </Box>

          <Box
            bg="bg.emphasized"
            borderWidth="1px"
            borderColor="border"
            borderRadius="xl"
            p={{ base: 5, md: 6 }}
          >
            <Text fontSize="xl" fontWeight="bold" mb={2}>
              What I value
            </Text>
            <Stack gap={2} color="fg.muted" lineHeight="tall">
              <Text>Clarity over cleverness.</Text>
              <Text>Accessible, user-first interfaces.</Text>
              <Text>Small iterations and fast feedback.</Text>
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
            Skills snapshot
          </Text>
          <Text color="fg.muted" maxW="90ch" lineHeight="tall">
            Add a quick, grouped list (e.g. Frontend, Backend, Tooling). Keep it scannable and
            avoid long paragraphs—people skim first and read later.
          </Text>
        </Box>

        <SimpleGrid columns={{ base: 1, md: 3 }} gap={{ base: 6, md: 8 }}>
          <Box
            bg="bg.emphasized"
            borderWidth="1px"
            borderColor="border"
            borderRadius="xl"
            p={{ base: 5, md: 6 }}
          >
            <Text fontSize="lg" fontWeight="bold" mb={1}>
              Now
            </Text>
            <Text color="fg.muted">
              What you’re learning/building this month.
            </Text>
          </Box>
          <Box
            bg="bg.emphasized"
            borderWidth="1px"
            borderColor="border"
            borderRadius="xl"
            p={{ base: 5, md: 6 }}
          >
            <Text fontSize="lg" fontWeight="bold" mb={1}>
              Looking for
            </Text>
            <Text color="fg.muted">
              Roles, collaborations, or project types you’re excited about.
            </Text>
          </Box>
          <Box
            bg="bg.emphasized"
            borderWidth="1px"
            borderColor="border"
            borderRadius="xl"
            p={{ base: 5, md: 6 }}
          >
            <Text fontSize="lg" fontWeight="bold" mb={1}>
              Contact
            </Text>
            <Text color="fg.muted">
              Add email / socials here (keep it minimal and easy to copy).
            </Text>
          </Box>
        </SimpleGrid>
      </Stack>
    </Container>
  );
}

