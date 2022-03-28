const defaultValueElementsToShow:number = 6;

const sliceArray =(arrayToslice:Array<any>,numberofElementsToShow:number = defaultValueElementsToShow)=>{
  return arrayToslice?.slice(0,numberofElementsToShow)
}

export default sliceArray