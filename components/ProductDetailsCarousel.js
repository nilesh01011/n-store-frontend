import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";

function ProductDetailsCarousel({ images }) {
    return (
        <div className="text-white text-[20px] w-full max-w-[1360px] mx-auto sticky top-[50px]">
            <Carousel
                infiniteLoop={true}
                showIndicators={false}
                showStatus={false}
                thumbWidth={60}
                className="productCarousel"
            >
                {images?.map((img) => (
                    <img
                        key={img.id}
                        src={img.attributes.url}
                        alt={img.attributes.name}
                    />
                ))}
                {/* <img alt='product-banners' src="/p2.png" />
                <img alt='product-banners' src="/p3.png" />
                <img alt='product-banners' src="/p4.png" />
                <img alt='product-banners' src="/p5.png" />
                <img alt='product-banners' src="/p6.png" />
                <img alt='product-banners' src="/p7.png" /> */}
            </Carousel>
        </div>
    )
}

export default ProductDetailsCarousel