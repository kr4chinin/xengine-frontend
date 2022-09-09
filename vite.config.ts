import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import eslint from 'vite-plugin-eslint'
import svgr from 'vite-plugin-svgr'
import { VitePluginFonts } from 'vite-plugin-fonts'

export default defineConfig({
	plugins: [
		react(),
		eslint(),
		svgr(),
		VitePluginFonts({
			google: {
				families: ['Poppins']
			}
		})
	]
})
