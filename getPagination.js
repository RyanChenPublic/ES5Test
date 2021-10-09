const getPagination = (offset,limit,total) =>{

    //get total page
    const totalPage = Math.ceil(total / limit);

    //get currentPage
    let currentPage = Math.ceil((offset +1) / limit);
    if(offset <0){
        currentPage = 1;
    }
    if(offset>=total)
    {
        currentPage = totalPage;
    }

    //顯示頁籤五個
    const renderPageLen = 5;
    //取得頁籤開始頁
    let startPage = currentPage -Math.floor(renderPageLen/2);
    if( currentPage <= Math.ceil(renderPageLen/2))
    {
        startPage = 1;
    }
    if(currentPage >= (totalPage-2) )
    {
        startPage = totalPage - renderPageLen +1;
    }
    
    //從頁籤開始頁產生五筆record
    let renderPages = Array.from({length:renderPageLen},(v,i) => (startPage +i) );
    return {

        currentPage,
        totalPage,
        renderPages,

    }
}



console.log(getPagination(0, 5, 33)); // { currentPage: 1, totalPage: 7, renderPages: [1,2,3,4,5] }
console.log(getPagination(5, 5, 33)); // { currentPage: 2, totalPage: 7, renderPages: [1,2,3,4,5] }
console.log(getPagination(10, 5, 33)); // { currentPage: 3, totalPage: 7, renderPages: [1,2,3,4,5] }
console.log(getPagination(15, 5, 33)); // { currentPage: 4, totalPage: 7, renderPages: [2,3,4,5,6] }
console.log(getPagination(20, 5, 33)); // { currentPage: 5, totalPage: 7, renderPages: [3,4,5,6,7] }

console.log(getPagination(25, 5, 33)); // { currentPage: 6, totalPage: 7, renderPages: [3,4,5,6,7] }
console.log(getPagination(30, 5, 33)); // { currentPage: 7, totalPage: 7, renderPages: [3,4,5,6,7] }