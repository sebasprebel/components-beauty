const defaultValueElementsToShow = 6

const sliceArray = (
  arrayToslice: any[],
  numberofElementsToShow: number = defaultValueElementsToShow
) => {
  return arrayToslice?.slice(0, numberofElementsToShow)
}

export default sliceArray
