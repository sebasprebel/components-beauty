const orderAlphabetic =(arraytoOrder:Array<any>)=>{
    return arraytoOrder?.sort((a:any, b:any) => {
        if (a.name < b.name) {
            return -1;
        }
        if (a.name > b.name) {
            return 1;
        }
        return 0;
    });
}

export default orderAlphabetic