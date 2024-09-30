https://nextjs.org/docs/app/api-reference/functions/generate-metadata

- <link preload >
    - установить в loyout.tsx втором, где "use client":
        - ReactDOM.preload("/12334.jpg", { as: "image", fetchPriority: 'high' })