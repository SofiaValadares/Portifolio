import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import { Resvg } from '@resvg/resvg-js'

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const publicDir = path.join(root, 'public')
const logoSvg = path.join(publicDir, 'logo.svg')
const htmlPath = path.join(root, 'index.html')
const png32 = path.join(publicDir, 'favicon-32x32.png')
const png16 = path.join(publicDir, 'favicon-16x16.png')
const appleTouchIcon = path.join(publicDir, 'apple-touch-icon.png')
const pngPath = png32

const svgSource = fs.readFileSync(logoSvg)

function renderPng(size) {
  const resvg = new Resvg(svgSource, {
    fitTo: { mode: 'width', value: size },
  })

  return resvg.render().asPng()
}

fs.writeFileSync(png32, renderPng(32))
fs.writeFileSync(png16, renderPng(16))
fs.writeFileSync(appleTouchIcon, renderPng(180))

const b64 = fs.readFileSync(pngPath).toString('base64')
const dataUri = `data:image/png;base64,${b64}`

const html = `<!doctype html>
<html lang="pt-BR">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/png" href="${dataUri}" />
    <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
    <link rel="icon" href="/favicon.ico" sizes="any" />
    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900&family=Montserrat+Alternates:ital,wght@0,400;0,600;0,700;0,800;1,400;1,600;1,700;1,800&family=Google+Sans+Code:wght@400;500;600&display=swap"
      rel="stylesheet"
    />
    <title>Sofia Valadares | Portfolio</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>
`

fs.writeFileSync(htmlPath, html)

const png = fs.readFileSync(pngPath)
const icoHeader = Buffer.alloc(6)
icoHeader.writeUInt16LE(0, 0)
icoHeader.writeUInt16LE(1, 2)
icoHeader.writeUInt16LE(1, 4)

const entry = Buffer.alloc(16)
entry[0] = 32
entry[1] = 32
entry.writeUInt16LE(1, 4)
entry.writeUInt16LE(32, 6)
entry.writeUInt32LE(png.length, 8)
entry.writeUInt32LE(22, 12)

fs.writeFileSync(path.join(publicDir, 'favicon.ico'), Buffer.concat([icoHeader, entry, png]))
fs.copyFileSync(pngPath, path.join(publicDir, 'favicon.png'))

console.log('Favicon synced: transparent <S/> only')
