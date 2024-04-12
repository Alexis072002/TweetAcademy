// vite.config.js
import { defineConfig } from "file:///mnt/c/Users/Alexis/Downloads/Bureau/git%20epitech/W-WEB-090-LIL-1-1-academie-judikael2.bellance/frontend/node_modules/vite/dist/node/index.js";
import simpleHtmlPlugin from "file:///mnt/c/Users/Alexis/Downloads/Bureau/git%20epitech/W-WEB-090-LIL-1-1-academie-judikael2.bellance/frontend/node_modules/vite-plugin-simple-html/dist/index.js";
import react from "file:///mnt/c/Users/Alexis/Downloads/Bureau/git%20epitech/W-WEB-090-LIL-1-1-academie-judikael2.bellance/frontend/node_modules/@vitejs/plugin-react/dist/index.mjs";
import path from "path";
var __vite_injected_original_dirname = "/mnt/c/Users/Alexis/Downloads/Bureau/git epitech/W-WEB-090-LIL-1-1-academie-judikael2.bellance/frontend";
var vite_config_default = defineConfig({
  server: {
    port: 3e3
  },
  build: {
    outDir: "../dist"
  },
  root: "src",
  plugins: [
    simpleHtmlPlugin({
      inject: {
        data: {
          title: "Tweet - Academy"
        }
      }
    }),
    react({
      // Use React plugin in all *.jsx and *.tsx files
      include: "**/*.{jsx,tsx}"
    })
  ],
  resolve: {
    alias: {
      src: path.resolve(__vite_injected_original_dirname, "src"),
      "#": path.resolve(__vite_injected_original_dirname, "src")
    }
  },
  optimizeDeps: {
    include: [
      "axios",
      "@tanstack/react-query",
      "react-router-dom",
      "react",
      "@mui/material",
      "react-toastify",
      "react-icons"
    ]
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvbW50L2MvVXNlcnMvQWxleGlzL0Rvd25sb2Fkcy9CdXJlYXUvZ2l0IGVwaXRlY2gvVy1XRUItMDkwLUxJTC0xLTEtYWNhZGVtaWUtanVkaWthZWwyLmJlbGxhbmNlL2Zyb250ZW5kXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvbW50L2MvVXNlcnMvQWxleGlzL0Rvd25sb2Fkcy9CdXJlYXUvZ2l0IGVwaXRlY2gvVy1XRUItMDkwLUxJTC0xLTEtYWNhZGVtaWUtanVkaWthZWwyLmJlbGxhbmNlL2Zyb250ZW5kL3ZpdGUuY29uZmlnLmpzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9tbnQvYy9Vc2Vycy9BbGV4aXMvRG93bmxvYWRzL0J1cmVhdS9naXQlMjBlcGl0ZWNoL1ctV0VCLTA5MC1MSUwtMS0xLWFjYWRlbWllLWp1ZGlrYWVsMi5iZWxsYW5jZS9mcm9udGVuZC92aXRlLmNvbmZpZy5qc1wiO2ltcG9ydCB7ZGVmaW5lQ29uZmlnfSBmcm9tICd2aXRlJztcbmltcG9ydCBzaW1wbGVIdG1sUGx1Z2luIGZyb20gJ3ZpdGUtcGx1Z2luLXNpbXBsZS1odG1sJztcbmltcG9ydCByZWFjdCBmcm9tIFwiQHZpdGVqcy9wbHVnaW4tcmVhY3RcIjtcbmltcG9ydCBwYXRoIGZyb20gJ3BhdGgnO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xuICAgICAgICBzZXJ2ZXI6IHtcbiAgICAgICAgICAgICAgICBwb3J0OiAzMDAwLFxuICAgICAgICB9LFxuICAgICAgICBidWlsZDoge1xuICAgICAgICAgICAgICAgIG91dERpcjogJy4uL2Rpc3QnLFxuICAgICAgICB9LFxuICAgICAgICByb290OiAnc3JjJyxcbiAgICAgICAgcGx1Z2luczogW1xuICAgICAgICAgICAgICAgIHNpbXBsZUh0bWxQbHVnaW4oe1xuICAgICAgICAgICAgICAgICAgICAgICAgaW5qZWN0OiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogXCJUd2VldCAtIEFjYWRlbXlcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICByZWFjdCh7XG4gICAgICAgICAgICAgICAgICAgIC8vIFVzZSBSZWFjdCBwbHVnaW4gaW4gYWxsICouanN4IGFuZCAqLnRzeCBmaWxlc1xuICAgICAgICAgICAgICAgICAgICBpbmNsdWRlOiAnKiovKi57anN4LHRzeH0nLFxuICAgICAgICAgICAgfSksXG4gICAgICAgIF0sXG4gICAgICAgIHJlc29sdmU6IHtcbiAgICAgICAgICAgICAgICBhbGlhczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3JjOiBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCAnc3JjJyksXG4gICAgICAgICAgICAgICAgICAgICAgICBcIiNcIjogcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgJ3NyYycpLFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgb3B0aW1pemVEZXBzOiB7XG4gICAgICAgICAgICAgICAgaW5jbHVkZTogW1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJheGlvc1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJAdGFuc3RhY2svcmVhY3QtcXVlcnlcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwicmVhY3Qtcm91dGVyLWRvbVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJyZWFjdFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJAbXVpL21hdGVyaWFsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcInJlYWN0LXRvYXN0aWZ5XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcInJlYWN0LWljb25zXCIsXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgfVxufSk7Il0sCiAgIm1hcHBpbmdzIjogIjtBQUF5ZSxTQUFRLG9CQUFtQjtBQUNwZ0IsT0FBTyxzQkFBc0I7QUFDN0IsT0FBTyxXQUFXO0FBQ2xCLE9BQU8sVUFBVTtBQUhqQixJQUFNLG1DQUFtQztBQUt6QyxJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUNwQixRQUFRO0FBQUEsSUFDQSxNQUFNO0FBQUEsRUFDZDtBQUFBLEVBQ0EsT0FBTztBQUFBLElBQ0MsUUFBUTtBQUFBLEVBQ2hCO0FBQUEsRUFDQSxNQUFNO0FBQUEsRUFDTixTQUFTO0FBQUEsSUFDRCxpQkFBaUI7QUFBQSxNQUNULFFBQVE7QUFBQSxRQUNBLE1BQU07QUFBQSxVQUNFLE9BQU87QUFBQSxRQUNmO0FBQUEsTUFDUjtBQUFBLElBQ1IsQ0FBQztBQUFBLElBQ0wsTUFBTTtBQUFBO0FBQUEsTUFFRSxTQUFTO0FBQUEsSUFDakIsQ0FBQztBQUFBLEVBQ0w7QUFBQSxFQUNBLFNBQVM7QUFBQSxJQUNELE9BQU87QUFBQSxNQUNDLEtBQUssS0FBSyxRQUFRLGtDQUFXLEtBQUs7QUFBQSxNQUNsQyxLQUFLLEtBQUssUUFBUSxrQ0FBVyxLQUFLO0FBQUEsSUFDMUM7QUFBQSxFQUNSO0FBQUEsRUFDQSxjQUFjO0FBQUEsSUFDTixTQUFTO0FBQUEsTUFDRDtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLElBQ1I7QUFBQSxFQUNSO0FBQ1IsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
