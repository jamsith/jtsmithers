import { ColorModeButton } from "@/components/ui/color-mode";
import { Box, Link, List, Stack, Text } from "@chakra-ui/react"

export default function Home() {

  const navItems = [
    { href: "/about", label: "About" },
    { href: "/blog", label: "Blog" },
    { href: "/component-playground", label: "Components" },
    { href: "/projects", label: "Projects" },
  ];

  const roman = ["i", "ii", "iii", "iv", "v", "vi", "vii", "viii", "ix", "x"];

  return (
    <Stack bg="bg.emphasized" height="100vh" >
      <Stack bg="bg.info" display="flex" flexDirection="column" justifyContent="space-around" p={4} h="100%">
        <Box w="100%" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
          <Text fontSize="4xl" fontWeight="bold" color="fg.muted">Jason Smith</Text>
          <Text fontSize="2xl" fontWeight="bold" color="fg.muted">Frontend Developer | Full Stack In Training | Creative</Text>
          <List.Root
            as="ol"
            listStyleType="none"
            p={0}
            m={0}
            w="min(720px, 30%)"
          >
            {navItems.map((item, idx) => (
              <List.Item
                key={item.href}
                display="flex"
                alignItems="center"
                w="full"
                py={2}
                px={3}
                borderRadius="md"
                transition="transform 160ms ease, background-color 160ms ease"
                _hover={{ transform: "scale(1.04)" }}
                _focusWithin={{ transform: "scale(1.04)", bg: "blackAlpha.200" }}
              >
                <Link
                  href={item.href}
                  fontSize="2xl"
                  fontWeight="bold"
                  color="fg.muted"
                  _hover={{ textDecoration: "none" }}
                  _focusVisible={{ outline: "2px solid", outlineColor: "fg.muted", outlineOffset: "4px" }}
                >
                  {item.label}
                </Link>

                <Box
                  flex="1"
                  mx={4}
                  borderBottomWidth="2px"
                  borderBottomStyle="dotted"
                  borderBottomColor="red.400"
                  opacity={0.9}
                />

                <Text
                  minW="3ch"
                  textAlign="right"
                  fontSize="2xl"
                  fontWeight="bold"
                  color="red.400"
                >
                  {roman[idx] ?? ""}
                </Text>
              </List.Item>
            ))}
          </List.Root>
        </Box>
      </Stack>
      <Stack direction="row" justify="space-around" align="center" p={4}><ColorModeButton /></Stack>

    </Stack>

  );
}
