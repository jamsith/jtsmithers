import { Box, Container, Link, SimpleGrid, Stack, Text } from "@chakra-ui/react";

type Project = {
  title: string;
  description: string;
  tech: string;
  href?: string;
};

const projects: Project[] = [
  {
    title: "Project name",
    description:
      "One sentence: what it does + who it’s for. A second sentence can mention the main technical challenge.",
    tech: "Next.js • TypeScript • Chakra UI",
    href: "#",
  },
  {
    title: "Project name",
    description:
      "Keep descriptions short so the grid stays readable. Link out to a live demo or repo when ready.",
    tech: "React • Node • Postgres",
    href: "#",
  },
  {
    title: "Project name",
    description:
      "Highlight the outcome: speed, accessibility, UX improvement, or a measurable result.",
    tech: "Design systems • A11y • Performance",
    href: "#",
  },
];

export default function ProjectsPage() {
  return (
    <Container maxW="6xl" py={{ base: 10, md: 16 }}>
      <Stack gap={{ base: 8, md: 10 }}>
        <Stack gap={3}>
          <Link href="/" w="fit-content" color="fg.muted">
            ← Home
          </Link>
          <Text fontSize={{ base: "4xl", md: "5xl" }} fontWeight="bold">
            Projects
          </Text>
          <Text fontSize={{ base: "lg", md: "xl" }} color="fg.muted" maxW="80ch">
            A curated set of work with clear goals, constraints, and outcomes.
          </Text>
        </Stack>

        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap={{ base: 6, md: 8 }}>
          {projects.map((p) => (
            <Box
              key={p.title + p.tech}
              bg="bg.emphasized"
              borderWidth="1px"
              borderColor="border"
              borderRadius="xl"
              p={{ base: 5, md: 6 }}
              transition="transform 160ms ease, background-color 160ms ease, border-color 160ms ease"
              _hover={{ transform: "translateY(-2px)", borderColor: "fg.muted" }}
            >
              <Stack gap={3}>
                <Stack gap={1}>
                  <Text fontSize="xl" fontWeight="bold">
                    {p.title}
                  </Text>
                  <Text color="fg.muted">{p.tech}</Text>
                </Stack>
                <Text lineHeight="tall" color="fg.muted">
                  {p.description}
                </Text>
                <Box>
                  <Link
                    href={p.href ?? "#"}
                    fontWeight="bold"
                    textDecoration="underline"
                    _hover={{ textDecoration: "none" }}
                  >
                    View details
                  </Link>
                </Box>
              </Stack>
            </Box>
          ))}
        </SimpleGrid>

        <Box
          bg="bg.emphasized"
          borderWidth="1px"
          borderColor="border"
          borderRadius="xl"
          p={{ base: 5, md: 6 }}
        >
          <Text fontSize="xl" fontWeight="bold" mb={2}>
            How I present work
          </Text>
          <Stack gap={2} color="fg.muted" lineHeight="tall">
            <Text>Problem → constraints → approach → results.</Text>
            <Text>Prioritize screenshots, short demos, and concrete outcomes.</Text>
            <Text>Include “what I’d improve next” to show iteration mindset.</Text>
          </Stack>
        </Box>
      </Stack>
    </Container>
  );
}

