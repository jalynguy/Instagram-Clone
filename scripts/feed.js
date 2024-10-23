const contentData = 
[
    {
        username: 'johnmultiverse',
        userimg: 'assets/readmeImages/multiverse.jpeg',
        imgSrc: './assets/readmeImages/Japan.jpg',
        likes: 420,
        caption: 'Wish you were here OwO',
        date: '10/22/2024',
        verified: true
    },
    {
        username: 'abowlofstew',
        userimg: 'https://www.marthastewart.com/thmb/osDxXC2bsOxJwSpPI9YWk6p-XLo=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/335974-beef-stew-hero-uncropped-02-272c272f03e94a7eaef0cdd0eccb3600.jpg',
        imgSrc: 'https://www.allrecipes.com/thmb/qbGGkvMvNjvwUGd5mpaiVAIMTpg=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/263037-instant-pot-beef-stew-mfs-beauty-4x3-BP-2467-3e45373d48544a7caf708248751a4c1c.jpg',
        likes: 238,
        caption: 'Eating good out here',
        date: '10/15/2024',
        verified: false
    },
    {
        username: 'Clover',
        userimg: 'https://media.licdn.com/dms/image/v2/C4E0BAQGcF6uTtvukQg/company-logo_200_200/company-logo_200_200/0/1630589986614/clovernetwork_logo?e=2147483647&v=beta&t=G-b3AC8xb82OXDTXhEvGexls-_K_lui99-ROL9KORbI',
        imgSrc: 'https://brilliantpos.com/wp-content/uploads/2023/08/clover-page-duo-stock-photo.jpg',
        likes: 9001,
        caption: 'Need reliable POS checking? Clover is here to provide for small businesses!',
        date: '10/23/2024',
        verified: true
    },
    {
        username: 'TheHunterWhiteOfficial',
        userimg: 'https://i.pinimg.com/564x/dd/cd/aa/ddcdaa248799b48b12defd1febaea514.jpg',
        imgSrc: 'https://assets.wired2fish.com/uploads/2023/06/jason-megabass-glide-bank-fishing-bass.webp',
        likes: 1003,
        caption: 'Anotha Day, Anotha Fish',
        date: '10/12/2024',
        verified: true
    },
    {
        username: 'Memes R Us',
        userimg: 'https://play-lh.googleusercontent.com/Moxg6k9ke9sXqd_PikDI9uRgHzFYopMaNESRJ48IwNptXXjZxw71NBoOCHmKiGqJDQ',
        imgSrc: 'https://i.redd.it/t4sgqf1hvot61.jpg',
        likes: 24,
        caption: 'Follow for your daily dose of memes',
        date: '10/19/2024',
        verified: false
    }
];


// Dymamically Create Content for page via the JSON data
// stored up above. Uses JQuery
function createContent(){
    let container = $('.main-content');
    $.each(contentData, function(index, item){
        let div = $("<div>").addClass("content-element");
        if(item.verified == true){
            div.append(`<h4> <img src="${item.userimg}" alt="profileimg.jpg" class="profileImage"> ${item.username} <i class="bi bi-patch-check-fill text-verified"></i> </h4>`);
        }
        else{
            div.append(`<h4> <img src="${item.userimg}" alt="profileimg.jpg" class="profileImage"> ${item.username} </h4>`);
        }
        div.append(`<img src="${item.imgSrc}" alt="image">`);
        div.append(`
            <div class='action-bar'>
                <div class="action-items-1"> 
                    <a> <i class="bi bi-heart text-icons"></i> </a>
                    <a> <i class="bi bi-chat text-icons"></i></a>
                    <a> <i class="bi bi-send text-icons"></i> </a>
                </div>
                <div class="action-items-2">
                    <a> <i class="bi bi-bookmark text-icons"></i></a>
                </div>
            </div>`
        )
        div.append(`<div> ${item.likes} Likes </div>`);
        div.append(`<p> <b> ${item.username} </b> ${item.caption} </p>`);
        div.append(`<div style='color:gray'> View All Comments </div>`)
        div.append(`<div style='color:gray'> ${item.date} </div>`)
        container.append(div);
    });
}
createContent();