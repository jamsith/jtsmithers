import { Box, Container, Link, SimpleGrid, Stack, Text } from "@chakra-ui/react";

type Post = {
  title: string;
  date: string;
  excerpt: string;
  href?: string;
};

const posts: Post[] = [
  {
    title: "Post title (placeholder)",
    date: "2026-04-30",
    excerpt:
      "Write a 1–2 sentence summary that helps people decide if they should click. Keep it concrete and outcome-focused.",
    href: "#",
  },
  {
    title: "Post title (placeholder)",
    date: "2026-04-15",
    excerpt:
      "Good blog lists optimize for scanning: strong titles, dates, short excerpts, and consistent spacing.",
    href: "#",
  },
];

export default function BlogPage() {
  return (
    <Container maxW="6xl" py={{ base: 10, md: 16 }}>
      <Stack gap={{ base: 8, md: 10 }}>
        <Stack gap={3}>
          <Link href="/" w="fit-content" color="fg.muted">
            ← Home
          </Link>
          <Text fontSize={{ base: "4xl", md: "5xl" }} fontWeight="bold">
            Blog
          </Text>
          <Text fontSize={{ base: "lg", md: "xl" }} color="fg.muted" maxW="80ch">
            Notes on building, learning, and design decisions—written to be skimmable first, deep second.
          </Text>
        </Stack>

        <SimpleGrid columns={{ base: 1, lg: 3 }} gap={{ base: 6, md: 8 }}>
          <Stack
            gridColumn={{ base: "auto", lg: "span 2" }}
            gap={4}
          >
            {posts.map((post) => (
              <Box
                key={post.title + post.date}
                as="article"
                bg="bg.emphasized"
                borderWidth="1px"
                borderColor="border"
                borderRadius="xl"
                p={{ base: 5, md: 6 }}
                transition="border-color 160ms ease, background-color 160ms ease"
                _hover={{ borderColor: "fg.muted" }}
              >
                <Stack gap={2}>
                  <Stack gap={1}>
                    <Text fontSize="xl" fontWeight="bold">
                      {post.title}
                    </Text>
                    <Text fontSize="sm" color="fg.muted">
                      {post.date}
                    </Text>
                  </Stack>
                  <Text color="fg.muted" lineHeight="tall">
                    {post.excerpt}
                  </Text>
                  <Link
                    href={post.href ?? "#"}
                    fontWeight="bold"
                    textDecoration="underline"
                    _hover={{ textDecoration: "none" }}
                  >
                    Read more
                  </Link>
                </Stack>
              </Box>
            ))}
          </Stack>

          <Stack gap={6}>
            <Box
              bg="bg.emphasized"
              borderWidth="1px"
              borderColor="border"
              borderRadius="xl"
              p={{ base: 5, md: 6 }}
            >
              <Text fontSize="lg" fontWeight="bold" mb={2}>
                Topics
              </Text>
              <Text color="fg.muted" lineHeight="tall">
                Add a short list of tags/categories here when you have a few posts. Keep it small
                so it doesn’t compete with the main list.
              </Text>
            </Box>

            <Box
              bg="bg.emphasized"
              borderWidth="1px"
              borderColor="border"
              borderRadius="xl"
              p={{ base: 5, md: 6 }}
            >
              <Text fontSize="lg" fontWeight="bold" mb={2}>
                Subscribe
              </Text>
              <Text color="fg.muted" mb={3} lineHeight="tall">
                When you add RSS, link it here. Make the call-to-action obvious and low-friction.
              </Text>
              <Link href="#" fontWeight="bold" textDecoration="underline" _hover={{ textDecoration: "none" }}>
                RSS feed (placeholder)
              </Link>
            </Box>
          </Stack>
        </SimpleGrid>
      </Stack>
    </Container>
  );
}

