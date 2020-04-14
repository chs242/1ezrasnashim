export const loadScript = (src, id) =>
  new Promise((resolve, reject) => {
    const script = document.createElement('script')
    script.src = src
    if (id) script.id = id
    script.addEventListener('load', () => {
      resolve({ successful: true })
    })
    script.addEventListener('error', event => {
      reject({ error: event })
    })
    document.head.appendChild(script)
  })

export const reloadScript = (id, src) => {
  const script = document.getElementById(id)
  script.remove();

  return loadScript(src, id)
}
