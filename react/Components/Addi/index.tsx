import React, {useEffect} from 'react'



const Addi = () => {
     
  useEffect(() => {
    const script = document.createElement("script")

    script.src =
    "https://s3.amazonaws.com/statics.addi.com/vtex/js/vtex-co-widget-wrapper.bundle.min.js"

    script.setAttribute("data-name","vtexAddiWidget")
    script.setAttribute("data-id","beautyholicsprebel")
    script.setAttribute("data-element-reference",".vtex-store-components-3-x-skuSelectorContainer")
    script.setAttribute("data-ally-slug","beautyholicsprebel-ecommerce")
    script.setAttribute("widget-margin","10px auto")
    script.async = true;
    document.body.appendChild(script)

    return () => {
      document.body.removeChild(script)
    }
  }, [])

  return (
    <></>
  )
}



export default Addi
