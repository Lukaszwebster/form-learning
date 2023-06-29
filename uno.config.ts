import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetTypography,
  presetUno,
  presetWebFonts,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'

export default defineConfig({
  shortcuts: [
    ['btn', 'px-4 py-1 rounded inline-block bg-teal-700 text-white cursor-pointer !outline-none hover:bg-teal-800 disabled:cursor-default disabled:bg-gray-600 disabled:opacity-50'],
    ['icon-btn', 'inline-block cursor-pointer select-none opacity-75 transition duration-200 ease-in-out hover:opacity-100 hover:text-teal-600'],
  ],
  theme: {
    colors: {
      white: '#FFFFFF',
      black: '#000000',
      blue: '#3E86F5',
      grey: '#00000080',
      lightGray: '#E5E5E5',
      lightBlueButton: 'rgba(62, 134, 245, 1)',
      lightBlack: 'rgba(0, 0, 0, 0.50)',
      pinkBackground: '#FCDDEC',
      pink: '#F178B6',
      yellow: '#D6FF41',
      grayText: '#7A7A7A',

    },

  },
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons({
      scale: 1.2,
      warn: true,
    }),
    presetTypography(),
    presetWebFonts({
      fonts: {
        sans: 'Poppins',
        serif: 'DM Serif Display',
        mono: 'DM Mono',
      },
    }),
  ],
  transformers: [
    transformerDirectives(),
    transformerVariantGroup(),
  ],
  safelist: 'prose m-auto text-left'.split(' '),
})
