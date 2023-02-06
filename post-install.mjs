#!/usr/bin/env zx

console.log('Parching ladle:')
await $`cp public/favicon.png public/mask-icon.png public/touch-icon.png node_modules/@ladle/react/lib/app/`
await $`sed -i 's|<link rel="icon" href="/favicon.svg" />|<link rel="icon" href="/favicon.png" />|' node_modules/@ladle/react/lib/app/index.html`
await $`sed -i 's|<link rel="mask-icon" href="/mask-icon.svg" color="#000000" />|<link rel="mask-icon" href="/mask-icon.png" color="#000000" />|' node_modules/@ladle/react/lib/app/index.html`
