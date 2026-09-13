<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://ai.google.dev/static/site-assets/images/share-ais-513315318.png" />
</div>

# Run and deploy your AI Studio app

This contains everything you need to run your app locally.

View your app in AI Studio: https://ai.studio/apps/ce81f9b5-cb2b-4a3a-825f-92c3b37cc727

## Run Locally

**Prerequisites:**  Node.js


1. Install dependencies:
   `npm install`
2. Set the `GEMINI_API_KEY` in [.env.local](.env.local) to your Gemini API key
3. Run the app:
   `npm run dev`

## Deploy to Cloudflare Pages

### Option 1: Direct CLI Deploy (Fastest)

1. Log in to your Cloudflare account from your terminal:
   ```bash
   npx wrangler login
   ```
2. Deploy the application:
   ```bash
   npm run deploy
   ```
   *Your live URL will be displayed in the terminal (e.g., `https://hams-ai.pages.dev`).*

### Option 2: Connect Git Repo (Automatic CI/CD)

1. Push this project to GitHub or GitLab.
2. In the [Cloudflare Dashboard](https://dash.cloudflare.com/):
   - Navigate to **Compute (Workers & Pages)** > **Create application** > **Pages** > **Connect to Git**.
   - Select your repository.
   - Configure the build settings:
     - **Framework preset:** `Vite`
     - **Build command:** `npm run build`
     - **Build output directory:** `dist`
   - Click **Save and Deploy**. Cloudflare will automatically build and deploy every time you push code.

