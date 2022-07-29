export default function ColorSku(element: any) {
  const isHexa = element.innerText.includes('#')

  isHexa
    ? (element.style.background = element.innerText)
    : (element.style.background = `url(/arquivos/${element.innerText}.jpg)`)
  element.style.backgroundPosition = 'center'
  element.style.backgroundSize = 'cover'
  element.style.backgroundRepeat = 'no-repeat'
}
