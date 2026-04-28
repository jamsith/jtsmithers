import { createSystem, defineConfig, defaultConfig } from "@chakra-ui/react"

const config = defineConfig({
    theme: {
        tokens: {
            colors: {
                stardew: {
                    50: { value: "#59c9f1" },
                    100: { value: "#151152" },
                    200: { value: "#b52121" },
                    300: { value: "#6b3710" },
                    400: { value: "#dda059" },
                    500: { value: "#ffd921" },
                    600: { value: "#e5c27a" },
                    700: { value: "#f7dfa7" },
                    800: { value: "#f9eccf" },
                    900: { value: "#fbf9f2" },
                },
            },
        },
        semanticTokens: {
            colors: {
                "stardew-bg-1": { value: { _light: "stardew.50", _dark: "stardew.900" } },
                "stardew-bg-2": { value: { _light: "stardew.100", _dark: "stardew.800" } },
                "stardew-bg-3": { value: { _light: "stardew.200", _dark: "stardew.700" } },
                "stardew-bg-4": { value: { _light: "stardew.300", _dark: "stardew.600" } },
                "stardew-bg-5": { value: { _light: "stardew.400", _dark: "stardew.500" } },
                "stardew-bg-6": { value: { _light: "stardew.500", _dark: "stardew.400" } },
                "stardew-bg-7": { value: { _light: "stardew.600", _dark: "stardew.300" } },
                "stardew-bg-8": { value: { _light: "stardew.700", _dark: "stardew.200" } },
                "stardew-bg-9": { value: { _light: "stardew.800", _dark: "stardew.100" } },
            },
        },
    },
})

export const system = createSystem(defaultConfig, config)