import React from 'react'

const HeaderCarousel = () => {
    var banners = [
        {
            image: "https://minhocmit.com/wp-content/uploads/2022/12/b0eff0d933c2c89c91d3-scaled.jpg",
            href: "https://minhocmit.com/tag/di%CC%A3a-chi%CC%89-ban-long-chim-do%CC%A3c-de%CC%A3p/",
        },
        {
            image: "https://www.sieuthilongchim.net//img/webroot/upload/image/files/slide(1).png",
            href: "https://www.sieuthilongchim.net/",
        },
        {
            image: "https://www.sieuthilongchim.net//img/webroot/upload/image/files/l%E1%BB%93ng%20cu%20g%C3%A1y/canhluatreotuong.png",
            href: "http://sieuthilongchim.net/chi-tiet-san-pham/cay-lua-treo-tuong-than-go-la-tung",
        },
        // {
        //   image: "https://top1hanoi.com/StoreData/images/PageData/long-chim-o-ha-noi-4.jpg",
        //   href: "https://top1hanoi.com/cua-hang/long-chim-o-ha-noi.html",
        // },
    ]

    return (
        <div id="carouselExampleCaptions" className="carousel slide carousel-page carousel-fade" data-bs-ride="carousel">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner h-100">
                {
                    banners.map((item, index) => (
                        <div className={index === 0 ? "carousel-item active h-100" : "carousel-item h-100"} key={index}>
                            <a href={item.href} className='h-100'>
                                <img src={item.image} className="d-block w-100 h-100" alt="..." />
                                {/* <div className="carousel-caption d-none d-md-block">
                        <h5>First slide label</h5>
                        <p>Some representative placeholder content for the first slide.</p>
                      </div> */}
                            </a>
                        </div>
                    )
                    )
                }

            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>


    )
}

export default HeaderCarousel