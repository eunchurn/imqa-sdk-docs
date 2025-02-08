import crypto from 'node:crypto'
import https from 'node:https'

const algorithm = 'sha384'

function getSRIString(data: string) {
  return getIntegrity(algorithm, getSRIHash(data))
}

function getIntegrity(algorithm: string, hash: string) {
  return `${algorithm}-${hash}`
}

function getSRIHash(data: string) {
  return crypto.createHash(algorithm).update(data, 'utf8').digest('base64')
}

export function getSRIHashIntegrity(url: string) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      let data = ''

      res.on('data', (chunk) => {
        data += chunk
      })

      res.on('end', () => {
        const hash = getSRIString(data)
        resolve(hash)
      })
    })
  })
}
