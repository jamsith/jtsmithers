import { Box, Container, Link, SimpleGrid, Stack, Text } from "@chakra-ui/react";
import Image from "next/image";

type ProjectImage = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

type Project = {
  title: string;
  description: string;
  tech: string;
  href?: string;
  images?: ProjectImage[];
};

const projects: Project[] = [
  {
    title: "Bracketses",
    description:
      "A live bracket battle for virtual team building and team parties. Share a session, vote on a matchup, and the leader closes the round so the winner advances.",
    tech: "React • Material UI • PartyKit",
    href: "https://bracketses.fly.dev/",
    images: [
      {
        src: "/projects/bracketses-bracket.jpg",
        alt: "A snack tournament bracket with later rounds still to be decided",
        width: 1024,
        height: 694,
      },
      {
        src: "/projects/bracketses-vote.jpg",
        alt: "A vote modal choosing between Popcorn and Apple Slices in a Snacks bracket",
        width: 1024,
        height: 713,
      },
    ],
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
            Free time endeavors.
          </Text>
        </Stack>

        <Stack gap={{ base: 6, md: 8 }}>
          {projects
            .filter((p) => p.images?.length)
            .map((p) => (
              <Box
                key={p.title + p.tech}
                bg="bg.emphasized"
                borderWidth="1px"
                borderColor="border"
                borderRadius="xl"
                p={{ base: 5, md: 6 }}
              >
                <Stack gap={5}>
                  <Stack gap={3}>
                    <Stack gap={1}>
                      <Text fontSize={{ base: "2xl", md: "3xl" }} fontWeight="bold">
                        {p.title}
                      </Text>
                      <Text color="fg.muted">{p.tech}</Text>
                    </Stack>
                    <Text lineHeight="tall" color="fg.muted" maxW="72ch">
                      {p.description}
                    </Text>
                    <Link
                      href={p.href ?? "#"}
                      target="_blank"
                      rel="noopener noreferrer"
                      w="fit-content"
                      fontWeight="bold"
                      textDecoration="underline"
                      _hover={{ textDecoration: "none" }}
                    >
                      Open the app
                    </Link>
                  </Stack>
                  <SimpleGrid columns={{ base: 1, md: 2 }} gap={{ base: 4, md: 5 }}>
                    {p.images?.map((image) => (
                      <Box
                        key={image.src}
                        minW={0}
                        overflow="hidden"
                        borderRadius="lg"
                        borderWidth="1px"
                        borderColor="border"
                        lineHeight="0"
                      >
                        <Image
                          src={image.src}
                          alt={image.alt}
                          width={image.width}
                          height={image.height}
                          sizes="(max-width: 768px) 100vw, 50vw"
                          style={{ width: "100%", height: "auto", display: "block" }}
                        />
                      </Box>
                    ))}
                  </SimpleGrid>
                </Stack>
              </Box>
            ))}
        </Stack>

        {/* <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap={{ base: 6, md: 8 }}>
          {projects
            .filter((p) => !p.images?.length)
            .map((p) => (
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
        </SimpleGrid> */}

        {/* <Box
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
        </Box> */}
      </Stack>
    </Container>
  );
}

