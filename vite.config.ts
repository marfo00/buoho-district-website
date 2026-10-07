import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';
import { defineConfig, type Plugin } from 'vite';
import fs from 'fs';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

function syncImagesPlugin(): Plugin {
  return {
    name: 'sync-images-plugin',
    configureServer(server) {
      server.middlewares.use('/api/sync-images', (req, res, next) => {
        if (req.method === 'POST') {
          let body = '';
          req.on('data', (chunk) => {
            body += chunk;
          });
          req.on('end', () => {
            try {
              const data = JSON.parse(body);
              const keyToPath: Record<string, string> = {
                buoho_district_custom_logo: 'public/images/gallery/logo_full.jpg',
                buoho_church_building_image: 'public/images/buoho_central_church.jpg',
                buoho_pastor_thomas_appiah_photo: 'public/images/leadership/pastor_thomas_appiah.jpg',
                buoho_home_pastor_image: 'public/images/leadership/pastor_thomas_appiah.jpg',
                buoho_page_pastor_image: 'public/images/leadership/pastor_thomas_appiah.jpg',
                'buoho_event_strategic_growth_flyer': 'public/images/events/strategic_growth_plan.jpg',
                'buoho_ministry_youth_week-2026': 'public/images/ministries/youth_week.jpg',
                'buoho_ministry_womens_week-2026': 'public/images/ministries/womens_week.png',
                'buoho_ministry_children_week-2026': 'public/images/ministries/children_week.jpg',
                'buoho_gallery_sharing-love': 'public/images/gallery/sharing_love.jpg',
                'buoho_gallery_singer-dancing': 'public/images/gallery/singer_dancing.jpg',
                'buoho_gallery_men-dancing': 'public/images/gallery/men_dancing.jpg',
                'buoho_gallery_woman-dancing': 'public/images/gallery/woman_dancing.jpg',
                'buoho_gallery_apostle-nyamekye': 'public/images/gallery/apostle_nyamekye.jpg',
                'buoho_gallery_aps-annor-knees': 'public/images/gallery/aps_annor_knees.jpg',
                'buoho_gallery_prophet-annor-solo': 'public/images/leadership/prophet_annor_solo.jpg',
                'buoho_gallery_elder-agyepong': 'public/images/leadership/elder_dr_agyepong.jpg',
                'buoho_gallery_elder-seth-miah': 'public/images/leadership/elder_seth_miah.jpg',
                'buoho_gallery_prophet-annor-wife': 'public/images/leadership/prophet_annor_and_wife.jpg',
                'buoho_gallery_pemem-dawn': 'public/images/events/pemem_dawn_prayers.jpg',
              };

              let savedCount = 0;
              const jsonPath = path.resolve(__dirname, 'src/data/customImages.json');
              let existingJson: Record<string, string> = {};
              try {
                if (fs.existsSync(jsonPath)) {
                  existingJson = JSON.parse(fs.readFileSync(jsonPath, 'utf-8'));
                }
              } catch {}

              for (const [key, dataUrl] of Object.entries(data)) {
                if (typeof dataUrl === 'string' && dataUrl.startsWith('data:image/')) {
                  const targetRelPath = keyToPath[key];
                  if (targetRelPath) {
                    const absTarget = path.resolve(__dirname, targetRelPath);
                    fs.mkdirSync(path.dirname(absTarget), { recursive: true });
                    const base64Data = dataUrl.replace(/^data:image\/\w+;base64,/, '');
                    fs.writeFileSync(absTarget, Buffer.from(base64Data, 'base64'));
                    savedCount++;
                  }
                  existingJson[key] = dataUrl;
                }
              }

              fs.writeFileSync(jsonPath, JSON.stringify(existingJson, null, 2));

              res.writeHead(200, { 'Content-Type': 'application/json' });
              res.end(JSON.stringify({ success: true, savedCount }));
            } catch (err: any) {
              res.writeHead(500, { 'Content-Type': 'application/json' });
              res.end(JSON.stringify({ error: err.message }));
            }
          });
        } else {
          next();
        }
      });
    },
  };
}

export default defineConfig(() => {
  return {
    plugins: [react(), tailwindcss(), syncImagesPlugin()],
    resolve: {
      alias: {
        '@': resolve(__dirname, './src'),
      },
    },
    build: {
      chunkSizeWarningLimit: 1500,
    },
    server: {
      hmr: process.env.DISABLE_HMR !== 'true',
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
