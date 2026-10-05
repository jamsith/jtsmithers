import { Box, Container, Link, SimpleGrid, Stack, Text } from "@chakra-ui/react";

const skillGroups = [
  {
    label: "Frontend",
    items: "React, TypeScript, JavaScript, Remix, React Router, HTML, CSS/SASS, Tailwind, Material UI",
  },
  {
    label: "Testing",
    items: "Playwright, Cypress, React Testing Library, Jest",
  },
  {
    label: "Tooling",
    items: "Vite, Rollup, Git, GitHub Actions, LaunchDarkly",
  },
  {
    label: "Mobile",
    items: "Ionic Capacitor, iOS, Android",
  },
  {
    label: "Product",
    items: "Agile/Scrum, Jira, PostHog, Lighthouse, Datadog",
  },
];

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
            Frontend engineer focused on React and TypeScript, currently growing into
            full-stack work.
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
              I&apos;m a frontend engineer with 6+ years shipping user-facing products in React
              and TypeScript. Most recently at Sunstate Equipment, I rewrote a legacy
              Angular rental app into a Remix and Vite platform, and built shared UI used by
              both the web app and Ionic Capacitor mobile apps. Before that, I spent five years
              at Tracer delivering React features, mentoring engineers, and working with Product
              to turn requirements into usable interfaces. I&apos;m looking for a full-stack role
              where I can keep that product focus while building real backend skills.
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
              <Text>Clarity with Product and customers before clever implementation.</Text>
              <Text>Shared components so web and mobile feel like one product.</Text>
              <Text>Small releases, then proof from tests and real usage.</Text>
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
          <Text fontSize="xl" fontWeight="bold" mb={4}>
            Skills snapshot
          </Text>
          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap={{ base: 4, md: 6 }}>
            {skillGroups.map((group) => (
              <Stack key={group.label} gap={1}>
                <Text fontWeight="bold">{group.label}</Text>
                <Text color="fg.muted" lineHeight="tall">
                  {group.items}
                </Text>
              </Stack>
            ))}
          </SimpleGrid>
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
            <Text color="fg.muted" lineHeight="tall">
              Practicing full-stack development, and using agentic coding
              workflows to move faster without dropping quality.
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
            <Text color="fg.muted" lineHeight="tall">
              A frontend or full-stack software developer role on a product team, remote or in personin the US.
              Especially customer-facing web or mobile work in React and TypeScript, but open to other technologies.
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
            <Stack gap={1} lineHeight="tall">
              <Link href="mailto:jtsmithers@gmail.com" color="fg.muted">
                jtsmithers@gmail.com
              </Link>
              <Link
                href="https://www.linkedin.com/in/jason-smith-8734944b"
                target="_blank"
                rel="noopener noreferrer"
                color="fg.muted"
              >
                LinkedIn
              </Link>
            </Stack>
          </Box>
        </SimpleGrid>
      </Stack>
    </Container>
  );
}
