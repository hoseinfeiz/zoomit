import * as React from "react"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  Card, CardContent
} from "@/components/ui"
import img1 from './images/1.webp'
import img2 from './images/2.png'
import img3 from './images/3.jpg'
import img4 from './images/4.webp'
import Image from "next/image"
function Banner() {
  return (
    <Carousel className="w-full ">
      <CarouselContent>
        {[img1,img2,img3,img4].map((image, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <Card className="p-0">
                <CardContent className="relative flex aspect-square h-[400px] items-center justify-center">
                  <Image src={image} alt='banner' fill className="object-cover" />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}

export default Banner
