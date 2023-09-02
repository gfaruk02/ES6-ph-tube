// console.log('hello js')

const loadPhtube = async () =>{
    const res = await fetch('https://openapi.programming-hero.com/api/videos/categories');
    const data = await res.json();
    const news = data.data;
    // console.log(news);

    const newsTabMenu = document.getElementById('news-body-menu');
    // newsTabMenu.textContent="";
    news.forEach((newsmenu)=>{
        const newsMenuLi = document.createElement('li');
        newsMenuLi.innerHTML = `
            <a onclick="displyPhtube('${newsmenu.category_id}')"> ${newsmenu.category} </a>
        `;
        newsTabMenu.appendChild(newsMenuLi);
    });
    // displyPhtube();
//    displaySort(news) 
    
}

const displyPhtube = async(id)=>{
    // console.log(id)
   const res= await fetch(`https://openapi.programming-hero.com/api/videos/category/${id}`);
   const data = await res.json();
//    console.log(data);
   const newsContainer = document.getElementById('news-container');
   newsContainer.textContent = "";

   const noNewsDataShow = document.getElementById('no-data-show');
   noNewsDataShow.textContent = "";
   //check data.data length is 0,
//    displaySort(data.data);
   if(data.data.length === 0){
    const div = document.createElement('div');
    div.classList = `pt-36 flex flex-col justify-center items-center text-center`;
    div.innerHTML =`
    <img class="h-56 w-56" src="img/Icon.png" alt="">
    <h1 class="pt-8 text-3xl text-gray-900 font-bold leading-10"> Oops!! Sorry, There is no <br> content here </h1>
    `;
    noNewsDataShow.appendChild(div);
   }
   else{
   data.data.forEach((news)=>{
    // displaySort(news);
    const minute = Math.floor(news.others.posted_date / 60);
    const hours = Math.floor(minute / 60); 
    const minutes = Math.floor(minute -(hours*60));
   

    const div = document.createElement('div');
    div.innerHTML =`
        <div class="card w-80 lg:w-72 bg-base-100 shadow-xl">
            <figure><img class="bg-cover" src="${news.thumbnail}" alt="Shoes" />
            
            ${news.others.posted_date > 0 ?
            `<p class=" absolute bg-zinc-600 text-white px-1 py-2 rounded-lg ml-48 lg:ml-49 mt-32 text-xs"> ${hours} hr : ${minutes} mins </p>` :'' }
            </figure>

            <div class=" flex gap-2 px-2 py-2">

            <div class="">
                <img class="h-12 w-12 rounded-full flex-start" src="${news.authors[0].profile_picture}" alt="" />
            </div>
            <div>
                <h2 class="card-title text-lg">${news.title}</h2>
                <div class=" flex items-center gap-2 pt-1"> 
                <p>${news.authors[0].profile_name} </p> <p>${news.authors[0].verified === true ? `<img class="h-6 w-6" src="./img/fi_10629607.svg" alt="">` : ""} </p> </div>
                <p class=" py-2">${news.others.views}</p>
            </div>
            
            </div>
        </div>
    `
    newsContainer.appendChild(div);
    
   });
}
// sortData(id)

}

// const displaySort = (news) => {
//     // const sortCantainer = document.getElementById('sort')
//     // //Clear phone container cards before adding new cards
//     // sortCantainer.textContent = '';
//     const newData = parseInt(news.others.views)
//     // console.log(newData)
//     newData.sort((a, b) => (b.newData) - (a.newData));
//     // console.log(news);
//     displyPhtube(newData);
//     // newData.forEach( sortItem =>{
//     //     // console.log(phone)
//     //     // 2. create a div 
//     //     const li = document.createElement('li');
//     //     // phoneCard.classList = `card mx-auto mt-2 pt-2 w-80 bg-base-100 shadow-xl`;
//     //     //3. set innerHTML
//     //     li.innerHTML =`
//     //     <a onclick="displaySort(${sortItem})" class="">Sort by view</a>
//     //     `
//     //     //4. appendChild
//     //     sortCantainer.appendChild(li)
//     // })
    

// }

// const sortData = async(id)=>{
//     const res = await fetch(`https://openapi.programming-hero.com/api/videos/category/${id}`);
//     const data = await res.json();
//     // const sordId =data.data;
//     const sordId =data.data;
//     // const users =data.data;
//     // const displyData=()=>{

//     // };
//     // const newData = parseInt(sordId.others.views)
//     console.log(sordId)
//     // sordId.sort((a, b) => (b.sordId) - (a.sordId));
//     // sordId.sort((a, b) => parseInt(b.sordId.others.views) - parseInt(a.sordId.others.views))
//     // console.log(sordId)
//     // let dataArray = [];
//     // sordId.forEach((news)=>{
//     // console.log(news.others.views)
//     // const dataSort = news.others.views;
//     // dataArray.push[dataSort];
//     // dataArray.sort((a, b) => parseInt(b.news.others.views) - parseInt(a.news.others.views))
//     // displyPhtube(dataSort);
//     // displyPhtube(news);
//     // });

//     // const users = [];
//     // users.sort((a, b) => parseInt(b.) - parseInt(a.others.views))
//     // const sortView = document.getElementById('sort');
//     // const li=document.createElement('li')
//     // li.innerHTML=`
//     // <a onclick="sortData(${users})" class="">Sort by view</a>
//     // `;
//     // sortView.appendChild(li);
// }
// sortData(1000)
loadPhtube();
displyPhtube(1000);

//===============================================

// console.log('hello js')

// const loadPhtube = async () =>{
//     const res = await fetch('https://openapi.programming-hero.com/api/videos/categories');
//     const data = await res.json();
//     const news = data.data;
//     // console.log(news);

//     const newsTabMenu = document.getElementById('news-body-menu');
//     // newsTabMenu.textContent="";
//     news.forEach((newsmenu)=>{
//         const newsMenuLi = document.createElement('li');
//         newsMenuLi.innerHTML = `
//             <a onclick="displyPhtube('${newsmenu.category_id}')"> ${newsmenu.category} </a>
//         `;
//         newsTabMenu.appendChild(newsMenuLi);
//     });
//     // displyPhtube();
// //    displaySort(news) 
    
// }

// const displyPhtube = async(id)=>{
//     // console.log(id)
//    const res= await fetch(`https://openapi.programming-hero.com/api/videos/category/${id}`);
//    const data = await res.json();
// //    console.log(data);
//    const newsContainer = document.getElementById('news-container');
//    newsContainer.textContent = "";

//    const noNewsDataShow = document.getElementById('no-data-show');
//    noNewsDataShow.textContent = "";
//    //check data.data length is 0,
// //    displaySort(data.data);
//    if(data.data.length === 0){
//     const div = document.createElement('div');
//     div.classList = `pt-36 flex flex-col justify-center items-center text-center`;
//     div.innerHTML =`
//     <img class="h-56 w-56" src="img/Icon.png" alt="">
//     <h1 class="pt-8 text-3xl text-gray-900 font-bold leading-10"> Oops!! Sorry, There is no <br> content here </h1>
//     `;
//     noNewsDataShow.appendChild(div);
//    }
//    else{
//    data.data.forEach((news)=>{
//     // displaySort(news);
//     const minute = Math.floor(news.others.posted_date / 60);
//     const hours = Math.floor(minute / 60); 
//     const minutes = Math.floor(minute -(hours*60));
   

//     const div = document.createElement('div');
//     div.innerHTML =`
//         <div class="card w-80 lg:w-72 bg-base-100 shadow-xl">
//             <figure><img class="bg-cover" src="${news.thumbnail}" alt="Shoes" />
            
//             ${news.others.posted_date > 0 ?
//             `<p class=" absolute bg-zinc-600 text-white px-1 py-2 rounded-lg ml-48 lg:ml-49 mt-32 text-xs"> ${hours} hr : ${minutes} mins </p>` :'' }
//             </figure>

//             <div class=" flex gap-2 px-2 py-2">

//             <div class="">
//                 <img class="h-12 w-12 rounded-full flex-start" src="${news.authors[0].profile_picture}" alt="" />
//             </div>
//             <div>
//                 <h2 class="card-title text-lg">${news.title}</h2>
//                 <div class=" flex items-center gap-2 pt-1"> 
//                 <p>${news.authors[0].profile_name} </p> <p>${news.authors[0].verified === true ? `<img class="h-6 w-6" src="./img/fi_10629607.svg" alt="">` : ""} </p> </div>
//                 <p class=" py-2">${news.others.views}</p>
//             </div>
            
//             </div>
//         </div>
//     `
//     newsContainer.appendChild(div);
//     // displaySort(news);
//     // const newData = parseInt(news.others)
//     // console.log(newData)
//    });
// }
// // sortData(id)
// // displaySort(id);
// }

// let use = [];
// const displaySort = (news) => {

//     const newData = parseInt(news.others.views)
// // let values = newData.map(newData)
//     // newData.sort((a, b) =>  b - a);
//     use.push(...values)
//     // newData.textContent="";
//     // newData.map((news)=>{
//     //     news++;
//     //     use.push(news)
//         console.log(use)
//     // });
    
//     // console.log(newData)
//     // console.log(newData)
//     // use.sort((a, b) =>  b - a);
//     // use.textContent='';
//     // console.log(use)
//     // use.push(use)

//     // newData.sort((a, b) => (b.newData) - (a.newData));
//     // newData.sort((a, b) => new Date(b.parseInt(others.views)) - new Date(a.parseInt(others.views)));
  
// //   console.log(news);
//     // console.log(news);
//     // displyPhtube(news);
//     // newData.forEach( sortItem =>{
//     //     // console.log(phone)
//     //     // 2. create a div 
//     //     const li = document.createElement('li');
//     //     // phoneCard.classList = `card mx-auto mt-2 pt-2 w-80 bg-base-100 shadow-xl`;
//     //     //3. set innerHTML
//     //     li.innerHTML =`
//     //     <a onclick="displaySort(${sortItem})" class="">Sort by view</a>
//     //     `
//     //     //4. appendChild
//     //     sortCantainer.appendChild(li)
//     // })
    

// }

// // const sortData = async(id)=>{
// //     const res = await fetch(`https://openapi.programming-hero.com/api/videos/category/${id}`);
// //     const data = await res.json();
// //     // const sordId =data.data;
// //     const sordId =data.data;
// //     // const users =data.data;
// //     // const displyData=()=>{

// //     // };
// //     // const newData = parseInt(sordId.others.views)
// //     console.log(sordId)
// //     // sordId.sort((a, b) => (b.sordId) - (a.sordId));
// //     // sordId.sort((a, b) => parseInt(b.sordId.others.views) - parseInt(a.sordId.others.views))
// //     sordId.sort((a, b) => new Date(b.parseInt(others.views)) - new Date(a.parseInt(others.views)));
// //     console.log(sordId)
// //     // let dataArray = [];
// //     // sordId.forEach((news)=>{
// //     // console.log(news.others.views)
// //     // const dataSort = news.others.views;
// //     // dataArray.push[dataSort];
// //     // dataArray.sort((a, b) => parseInt(b.news.others.views) - parseInt(a.news.others.views))
// //     // displyPhtube(dataSort);
// //     // displyPhtube(news);
// //     // });

// //     // const users = [];
// //     // users.sort((a, b) => parseInt(b.) - parseInt(a.others.views))
// //     // const sortView = document.getElementById('sort');
// //     // const li=document.createElement('li')
// //     // li.innerHTML=`
// //     // <a onclick="sortData(${users})" class="">Sort by view</a>
// //     // `;
// //     // sortView.appendChild(li);
// // }
// // sortData(1000)
// loadPhtube();
// displyPhtube(1000);

