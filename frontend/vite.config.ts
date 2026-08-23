import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import basicSsl from "@vitejs/plugin-basic-ssl";
import { resolve } from "node:path";
import { tmpdir } from "node:os";
import AutoImport from "unplugin-auto-import/vite";
const base = process.env.BASE_PATH || "/";
// https://vite.dev/config/
export default defineConfig({
  // Each Windows dev process gets an isolated disposable cache. This avoids
  // EPERM failures when antivirus/indexing tools retain handles to an older
  // dependency optimiser file after a server restart.
  cacheDir: resolve(tmpdir(), "kent-site-vite", String(process.pid)),
  define: {
    __BASE_PATH__: JSON.stringify(base),
  },
  plugins: [
    basicSsl({
      name: "Kent Business College Local Development",
      domains: ["localhost", "127.0.0.1"],
      certDir: resolve(tmpdir(), "kent-site-vite-basic-ssl"),
    }),
    react(),
    AutoImport({
      imports: [
        {
          react: [
            ["default", "React"],
            "useState",
            "useEffect",
            "useContext",
            "useReducer",
            "useCallback",
            "useMemo",
            "useRef",
            "useImperativeHandle",
            "useLayoutEffect",
            "useDebugValue",
            "useDeferredValue",
            "useId",
            "useInsertionEffect",
            "useSyncExternalStore",
            "useTransition",
            "startTransition",
            "lazy",
            "memo",
            "forwardRef",
            "createContext",
            "createElement",
            "cloneElement",
            "isValidElement",
          ],
        },
        {
          "react-router-dom": [
            "useNavigate",
            "useLocation",
            "useParams",
            "useSearchParams",
            "Link",
            "NavLink",
            "Navigate",
            "Outlet",
          ],
        },
      ],
      dts: true,
    }),
  ],
  base,
  build: {
    sourcemap: false,
    outDir: 'out',
  },
  resolve: {
    alias: {
      "@": resolve(__dirname, "./src"),
    },
  },
  optimizeDeps: {
    // Bundle the project's known browser dependencies in one pass. This keeps
    // CommonJS interop (notably react-fast-compare) correct without allowing a
    // later dependency scan to rewrite files while Windows has them open.
    noDiscovery: true,
    include: [
      "@hookform/resolvers/zod",
      "@reduxjs/toolkit",
      "@tanstack/react-query",
      "dompurify",
      "lucide-react",
      "react",
      "react-dom",
      "react-dom/client",
      "react-fast-compare",
      "react-helmet-async",
      "react-hook-form",
      "react-redux",
      "react-router-dom",
      "zod",
    ],
  },
  server: {
    host: "0.0.0.0",
    strictPort: true,
    proxy: {
      "/api": {
        target: "http://127.0.0.1:8000",
        changeOrigin: true,
      },
      "/media": {
        target: "http://127.0.0.1:8000",
        changeOrigin: true,
      },
    },
  },
});
