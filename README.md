This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
yarn dev

```
## Folder Structure

refer to the below link for an indept explanation on the pattern
Open [link](https://nextjs.org/docs/app/building-your-application/routing/colocation)

and a good example
 
Open [link](https://stackoverflow.com/questions/76214501/nextjs-13-folder-structure-best-practice#:~:text=In%20version%2013%2C%20Next.,the%20components%20on%20server%20side.) 

## Design system

As can be observed from the folder structure,the folder structure follows the atomic design principle, so it is imperative for you to follow suit, components should go to the appropriate folders during or after building them :

```
_components/atoms
_components/molecules
_components/organisms
```

To learn more about Atomic Design, take a look at the following resources:

- [Atomic Design Resource](https://bradfrost.com/blog/post/atomic-web-design/) - learn about atomic design.
- [Atomic Design Resource](https://uxdesign.cc/atomic-design-how-to-design-systems-of-components-ab41f24f260e) - learn more.

##### More on Folder Structure

To simplify things further we abstrated atomics design  templates into Hocs and layouts , this gives pages consistent layout and structure,
## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
