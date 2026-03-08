# Deployment & Domain Instructions

## 1. Vercel Deployment

Vercel is the creator of Next.js and the best platform for deploying it.

1. Create an account on [Vercel](https://vercel.com/)
2. Install Vercel CLI via npm (if you have Node.js): `npm i -g vercel` or directly link your GitHub/GitLab repository to Vercel on their website.
3. If using Git: Push this code to a new GitHub repository, then on Vercel dashboard click **Add New > Project**, import the repository.
4. Framework Preset will automatically default to `Next.js`.
5. Click **Deploy**.

## 2. Netlify Deployment

1. Create a [Netlify](https://www.netlify.com/) account.
2. Push your code to a Git repository (GitHub/GitLab/Bitbucket).
3. In Netlify dashboard, click **Add new site > Import an existing project**.
4. Authorize Git, select your repository.
5. Build Settings:
   - Build Command: `next build`
   - Publish directory: `.next`
6. Click **Deploy site**.

## 3. Self-Hosting (VPS/Dedicated Server)

1. Ensure Node.js (v18+) is installed on your server.
2. Clone or copy your code to the server.
3. Run `npm install` inside the project folder.
4. Run `npm run build` to create the production build.
5. Start the server using PM2 (recommended): `pm2 start npm --name "college-website" -- start`
6. Setup Nginx or Apache as a reverse proxy pointing port 80/443 to `http://localhost:3000`.

---

## Instructions for Connecting the Domain (`latelkcollege.liveblog365.com`)

Assuming you deployed on Vercel:

1. Go to your project settings in the Vercel Dashboard.
2. Navigate to **Domains > Add**.
3. Enter `latelkcollege.liveblog365.com` and click **Add**.
4. Vercel will provide DNS records you need to add to your Domain Registrar or DNS host.
   - Typically an **A Record** pointing to `76.76.21.21` 
   - OR a **CNAME Record** pointing to `cname.vercel-dns.com`
5. Go to the dashboard where you purchased `liveblog365.com` (or your DNS manager).
6. Find "DNS Settings" or "DNS Management".
7. Add the records exactly as provided by Vercel.
8. Wait a few minutes (up to 24 hours for full propagation), and Vercel will secure the domain with an auto-renewing SSL certificate.

*(The same DNS record approach applies if deploying to Netlify or Self-hosting, but you will use their respective IP/CNAME targets).*
