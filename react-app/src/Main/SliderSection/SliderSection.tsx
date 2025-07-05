import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './Slider.css';

import { sliderData, type ISliderData } from './sliderData';
import SliderCard from './SliderCard';

export const SliderSection = () => {
	return (
		<div className='slider'>
			<Swiper
				modules={[Navigation, Pagination, Autoplay]}
				spaceBetween={20}
				slidesPerView={1}
				navigation
				pagination={{ clickable: true }}
				autoplay={{ delay: 3000 }}
				breakpoints={{
					640: {
						slidesPerView: 1,
					},
					960: {
						slidesPerView: 2,
					},
					1200: {
						slidesPerView: 4,
					},
				}}>
				{sliderData.map((item: ISliderData, index: number) => (
					<SwiperSlide key={index}>
						<SliderCard
							title={item.title}
							price={item.price}
							description={item.description}
							image={item.image}
							alt={item.alt}
						/>
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	);
};
