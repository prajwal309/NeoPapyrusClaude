# NeoPapyrus Vercel Deployment

This package is ready to deploy on Vercel.

## Deploy
1. Upload this folder to GitHub or drag it into Vercel.
2. Create a new Vercel project from the folder/repo.
3. No framework preset is required.
4. Deploy.

## Local preview
```bash
npm install -g vercel
vercel dev
```

## Notes
- API routes live under `/api`.
- Static pages live under `public/` and are mapped via `vercel.json`.
- Book markdown and assets remain under `books/`.
- `server.local.js` is kept only as a historical reference and is not used by Vercel.
