# Design System for Gamekaiju & Appkaiju

Using Tailwind and Ladle.

## How to develop?

```bash
# start the development mode
$ npm run dev

# if you want to check how the static site will look like
$ npm run serve
```

## How to publish?

Project is configured to do a package publish on every commit to main. So, after the commits containing your work, but before pushing to main, on a working tree clean, do:

```bash
npm version <major|minor|patch>
git push --all origin
```

## How to consume?

Project is configured to be private, so source code will not be public. Nonetheless, you can consume it as follows:

```bash
npm install @gamekaiju/monster-designsystem
```

## How to deploy a static site?

Configure your Vercel deployment to use Vite and the same scripts that the package uses instead of the default ones, i.e. the following:

![Vercel Deployment](https://monster-designsystem.vercel.app/vercel-deployment.png)
