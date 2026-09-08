import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import basicSsl from "@vitejs/plugin-basic-ssl";
import { createHash } from "node:crypto";
import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import { tmpdir, userInfo } from "node:os";
import AutoImport from "unplugin-auto-import/vite";
const base = process.env.BASE_PATH || "/";
const cacheUser = createHash("sha256").update(userInfo().username).digest("hex").slice(0, 12);
const heroMediaPaths = [
  "/assets/video/home-hero.webm",
  "/assets/video/home-hero.mp4",
  "/assets/images/figma-home/hero-group.png",
];
const heroHash = createHash("sha256");
for (const path of heroMediaPaths) heroHash.update(readFileSync(resolve(__dirname, `public${path}`)));
const heroMediaVersion = heroHash.digest("hex").slice(0, 16);
// https://vite.dev/config/
export default defineConfig({
  // Windows users and the Codex sandbox cannot always delete each other's files.
  // Keep a reusable cache per OS account so config changes can invalidate it safely.
  cacheDir: resolve(__dirname, `node_modules/.vite-kbc-${cacheUser}`),
  define: {
    __BASE_PATH__: JSON.stringify(base),
    __HOME_HERO_MEDIA_VERSION__: JSON.stringify(heroMediaVersion),
  },
  plugins: [
    {
      name: "kbc-hero-media-cache",
      configureServer(server) {
        server.middlewares.use((request, response, next) => {
          const url = new URL(request.url || "/", "http://localhost");
          if (!heroMediaPaths.includes(url.pathname)) return next();
          const policy = url.searchParams.get("v") === heroMediaVersion
            ? "public, max-age=31536000, immutable"
            : "public, max-age=0, must-revalidate";
          // Keep Vite's static serving, ETags and byte-range support; override
          // only its development no-cache header for these three media files.
          const setHeader = response.setHeader.bind(response);
          response.setHeader = (name, value) => setHeader(name, name.toLowerCase() === "cache-control" ? policy : value);
          response.setHeader("Cache-Control", policy);
          next();
        });
      },
    },
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
      "/admin": {
        target: process.env.KBC_API_PROXY_TARGET || "http://127.0.0.1:8000",
        changeOrigin: true,
      },
      "/api": {
        target: process.env.KBC_API_PROXY_TARGET || "http://127.0.0.1:8000",
        changeOrigin: true,
      },
      "/media": {
        target: process.env.KBC_API_PROXY_TARGET || "http://127.0.0.1:8000",
        changeOrigin: true,
      },
    },
  },
});
