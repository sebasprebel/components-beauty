import React from 'react'

type Props = {
  name: string
}

function ExampleComponent({ name }: Props) {
  return <div>Hey, {name}</div>
}

export default ExampleComponent
