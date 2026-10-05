import { Box, Container, Link, Stack, Text } from "@chakra-ui/react";
import Image from "next/image";

type Photo = {
    src: string;
    alt: string;
    width: number;
    height: number;
};

type Hobby = {
    id: string;
    numeral: string;
    title: string;
    paragraphs: string[];
    columns: { base: number; md: number; lg: number };
    photos: Photo[];
};

const hobbies: Hobby[] = [
    {
        id: "backpacking",
        numeral: "i",
        title: "Backpacking",
        paragraphs: [
            "A past life in the Sawtooth Mountains: still water, granite underfoot, and a lot of miles between the two. Shenandoah pictures coming soon!",
        ],
        columns: { base: 1, md: 2, lg: 2 },
        photos: [
            {
                src: "/hobbies/backpacking/alpine-lake.jpg",
                alt: "An alpine lake reflecting a rocky, forested mountain ridge",
                width: 1024,
                height: 768,
            },
            {
                src: "/hobbies/backpacking/granite-overlook.jpg",
                alt: "A pale granite overlook above a pine forest and a distant peak",
                width: 1024,
                height: 768,
            },
            {
                src: "/hobbies/backpacking/granite-boulders.jpg",
                alt: "Boulders on a granite slab, with a lake and sunlit ridge beyond the trees",
                width: 1024,
                height: 768,
            },
            {
                src: "/hobbies/backpacking/river.jpg",
                alt: "Jason beside a river in the forest, wearing a cap and sunglasses",
                width: 1024,
                height: 682,
            },
        ],
    },
    {
        id: "art",
        numeral: "ii",
        title: "Art & crafts",
        paragraphs: [
            "Paintings on canvas, jewelry using whatever seems neat, wood burning, chalk... Commissions welcome!",
        ],
        columns: { base: 1, md: 2, lg: 3 },
        photos: [
            {
                src: "/hobbies/art/crown.jpg",
                alt: "A purple crown painted on a splattered violet canvas",
                width: 1024,
                height: 768,
            },
            {
                src: "/hobbies/art/direwolf.jpg",
                alt: "A black direwolf head painted in thick strokes on white, with red in the mouth",
                width: 1024,
                height: 768,
            },
            {
                src: "/hobbies/art/eagle.jpg",
                alt: "A diving eagle painted in black, white, and gold stars on a blue canvas",
                width: 1024,
                height: 768,
            },
            {
                src: "/hobbies/art/buffalo.jpg",
                alt: "A charging blue buffalo with a red stripe, painted on a white canvas with red and blue splatters",
                width: 1024,
                height: 768,
            },
            {
                src: "/hobbies/art/eye.jpg",
                alt: "A glossy painting of an eye with a black sunburst pupil, ringed by red and yellow flames",
                width: 1024,
                height: 768,
            },
            {
                src: "/hobbies/art/frogs.jpg",
                alt: "Three frogs in formal coats on a red and cream checkerboard, covering eyes, ears, and mouth",
                width: 377,
                height: 1024,
            },
            {
                src: "/hobbies/art/mural.jpg",
                alt: "A wall mural of overlapping outlined circles in blue, green, red, and black",
                width: 1024,
                height: 473,
            },
            {
                src: "/hobbies/art/earrings.jpg",
                alt: "Handmade hoop earrings with blue, speckled, and white clay beads on kraft cards",
                width: 1024,
                height: 768,
            },
        ],
    },
    {
        id: "hockey",
        numeral: "iii",
        title: "Hockey",
        paragraphs: [
            "Inline hockey. Would've gone pro if it weren't for these dang knees... and maybe the fact that professional ice hockey isn't really a thing anymore.",
        ],
        columns: { base: 1, md: 2, lg: 2 },
        photos: [
            {
                src: "/hobbies/hockey/skating.jpg",
                alt: "Jason skating in a teal number 13 jersey, red pants, and inline skates",
                width: 709,
                height: 817,
            },
            {
                src: "/hobbies/hockey/on-the-floor.jpg",
                alt: "Jason on the rink in a teal number 13 jersey with an A, holding a stick",
                width: 1024,
                height: 684,
            },
        ],
    },
];

function PhotoMasonry({
    photos,
    columns,
    prioritizeFirst = false,
}: {
    photos: Photo[];
    columns: Hobby["columns"];
    prioritizeFirst?: boolean;
}) {
    return (
        <Box columnCount={columns} columnGap={{ base: 4, md: 5 }}>
            {photos.map((photo, index) => (
                <Box
                    key={photo.src}
                    breakInside="avoid"
                    mb={{ base: 4, md: 5 }}
                    overflow="hidden"
                    borderRadius="xl"
                    borderWidth="1px"
                    borderColor="border"
                    bg="bg.emphasized"
                    lineHeight="0"
                    display="inline-block"
                    w="full"
                >
                    <Image
                        src={photo.src}
                        alt={photo.alt}
                        width={photo.width}
                        height={photo.height}
                        priority={prioritizeFirst && index === 0}
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        style={{ width: "100%", height: "auto", display: "block" }}
                    />
                </Box>
            ))}
        </Box>
    );
}

export default function HobbiesPage() {
    return (
        <Container maxW="6xl" py={{ base: 10, md: 16 }}>
            <Stack gap={{ base: 12, md: 16 }}>
                <Stack gap={4}>
                    <Link href="/" w="fit-content" color="fg.muted">
                        ← Home
                    </Link>
                    <Text fontSize={{ base: "4xl", md: "5xl" }} fontWeight="bold">
                        Hobbies
                    </Text>
                    <Text fontSize={{ base: "lg", md: "xl" }} color="fg.muted" maxW="72ch">
                        Trails, paint, and the rink.
                    </Text>
                    <Stack direction="row" gap={{ base: 4, md: 8 }} flexWrap="wrap" pt={2}>
                        {hobbies.map((hobby) => (
                            <Link
                                key={hobby.id}
                                href={`#${hobby.id}`}
                                color="fg.muted"
                                fontWeight="bold"
                                fontSize="lg"
                                _hover={{ textDecoration: "none", color: "fg" }}
                            >
                                {hobby.title}
                                <Text as="span" color="red.400" ml={2}>
                                    {hobby.numeral}
                                </Text>
                            </Link>
                        ))}
                    </Stack>
                </Stack>

                {hobbies.map((hobby, index) => (
                    <Stack
                        key={hobby.id}
                        id={hobby.id}
                        gap={{ base: 5, md: 6 }}
                        scrollMarginTop="2rem"
                    >
                        <Stack direction="row" align="center" gap={4}>
                            <Text fontSize={{ base: "3xl", md: "4xl" }} fontWeight="bold">
                                {hobby.title}
                            </Text>
                            <Box
                                flex="1"
                                borderBottomWidth="2px"
                                borderBottomStyle="dotted"
                                borderBottomColor="red.400"
                                opacity={0.9}
                            />
                            <Text
                                minW="3ch"
                                textAlign="right"
                                fontSize={{ base: "2xl", md: "3xl" }}
                                fontWeight="bold"
                                color="red.400"
                            >
                                {hobby.numeral}
                            </Text>
                        </Stack>

                        <Stack gap={3} maxW="72ch">
                            {hobby.paragraphs.map((paragraph) => (
                                <Text
                                    key={paragraph}
                                    color="fg.muted"
                                    fontSize={{ base: "md", md: "lg" }}
                                    lineHeight="tall"
                                >
                                    {paragraph}
                                </Text>
                            ))}
                        </Stack>

                        <PhotoMasonry
                            photos={hobby.photos}
                            columns={hobby.columns}
                            prioritizeFirst={index === 0}
                        />
                    </Stack>
                ))}
            </Stack>
        </Container>
    );
}
