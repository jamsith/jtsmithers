import { Box, Link, List, Stack, Text } from "@chakra-ui/react"

export default function Home() {

  const navItems = [
    { href: "/about", label: "About" },
    // { href: "/blog", label: "Blog" },
    { href: "/hobbies", label: "Hobbies" },
    // { href: "/component-playground", label: "Components" },
    { href: "/projects", label: "Projects" },
  ];

  const roman = ["i", "ii", "iii", "iv", "v", "vi", "vii", "viii", "ix", "x"];

  return (
    <Stack
      flex="1"
      overflowX="clip"
      justify="center"
      align="center"
      px={4}
      pt={{ base: 10, md: 16 }}
      pb={6}
      gap={{ base: 10, md: 16, lg: 24 }}
    >
        <Stack gap={2} align="center" w="full" maxW="40rem">
          <Text
            w="full"
            fontSize={{ base: "4xl", sm: "5xl", md: "6xl" }}
            fontWeight="bold"
            color="fg.muted"
            textAlign="center"
            lineHeight="1.1"
          >
            Jason Smith
          </Text>
          <Text
            w="full"
            fontSize={{ base: "lg", md: "2xl" }}
            fontWeight="bold"
            color="fg.muted"
            textAlign="center"
          >
            Frontend Developer | Full Stack In Training | Creative
          </Text>
        </Stack>
        <List.Root
          as="ol"
          listStyleType="none"
          p={0}
          m={0}
          w="full"
          maxW={{ base: "100%", md: "32rem", xl: "40rem" }}
        >
          {navItems.map((item, idx) => (
            <List.Item
              key={item.href}
              w="full"
            >
              <Link
                href={item.href}
                display="flex"
                alignItems="center"
                w="full"
                py={2}
                px={{ base: 1, md: 3 }}
                borderRadius="md"
                transition="transform 160ms ease, background-color 160ms ease"
                _hover={{ textDecoration: "none", transform: { base: "none", md: "scale(1.04)" } }}
                _focusVisible={{
                  outline: "2px solid",
                  outlineColor: "fg.muted",
                  outlineOffset: "4px",
                  transform: { base: "none", md: "scale(1.04)" },
                  bg: "blackAlpha.200",
                  textDecoration: "none",
                }}
              >
                <Text
                  fontSize={{ base: "xl", md: "2xl" }}
                  fontWeight="bold"
                  color="fg.muted"
                  flexShrink={0}
                >
                  {item.label}
                </Text>

                <Box
                  flex="1"
                  minW="4"
                  mx={{ base: 3, md: 4 }}
                  borderBottomWidth="2px"
                  borderBottomStyle="dotted"
                  borderBottomColor="red.400"
                  opacity={0.9}
                />

                <Text
                  minW="3ch"
                  textAlign="right"
                  fontSize={{ base: "xl", md: "2xl" }}
                  fontWeight="bold"
                  color="red.400"
                  flexShrink={0}
                >
                  {roman[idx] ?? ""}
                </Text>
              </Link>
            </List.Item>
          ))}
        </List.Root>
    </Stack>
  );
}
