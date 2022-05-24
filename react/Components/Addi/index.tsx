import React, {useEffect} from 'react'

const Addi = () => {
     
  useEffect(() => {
    const script = document.createElement("script")

    script.src =
    "https://s3.amazonaws.com/statics.addi.com/vtex/js/vtex-co-widget-wrapper.bundle.min.js"

    script.setAttribute("data-name","vtexAddiWidget")
    script.setAttribute("data-id","beautyholicsprebel")
    script.setAttribute("data-element-reference",".vtex-product-quantity-1-x-quantitySelectorContainer")
    script.setAttribute("data-ally-slug","beautyholicsprebel-ecommerce")
    script.setAttribute("widget-margin","10px auto")
    script.async = true;
    document.body.appendChild(script)

    return () => {
      document.body.removeChild(script)
    }
  }, [])

  return (
    <>
    <div className="addi-widget-wrapper"></div>
    <script id="addi-product-page" data-name="vtexAddiWidget" data-id="beautyholicsprebel" data-element-reference=".cantidad" data-ally-slug="beautyholicsprebel-ecommerce" widget-margin="10px auto" src="https://s3.amazonaws.com/statics.addi.com/vtex/js/vtex-co-widget-wrapper.bundle.min.js" ></script></>
  )
}



export default Addi
