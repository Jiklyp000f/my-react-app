import { Link } from 'react-router-dom';
import './Footer.css';

export const Footer = () => {
	return (
		<>
			<div className='footer'>
				<div className='footer__logo'>
					<Link to={'/'}>
						<img className='footer__contacts-logo' src='/src/assets/images/logo.png' alt='' />
					</Link>
				</div>
				<div className='footer__content'>
					<div className='footer__content-top'>
						<div className='footer__links'>
							<div className='footer__links-block'>
								<Link to="*">
                  					Главная
                  				</Link>
                  				<Link to="*">
                  					Услуги
                  					</Link>
                  				<Link to="*">
                  					Технологии
                  				</Link>
                  				<Link to="*">
                  					Безопасность
                  				</Link>
                  				<Link to="*">
                  					Поддержка
                  				</Link>
                  				<Link to="*">
                  					Карта сайта
                  				</Link>
							</div>
							<div className='footer__links-block'>
								 <Link to="*">
                  					Конфиденциальность
                  				</Link>
                  				<Link to="*">
                  					Файлы cookie
                  				</Link>
                  				<Link to="*">
                  					Условия
                  				</Link>
                  				<Link to="*">
                  					Информация
                  				</Link>
                  				<Link to="*">
                  					Условия
                  				</Link>
                  				<Link to="*">
                  					Реклама
                  				</Link>
							</div>
						</div>
						<div className='footer__contacts'>
							<p className='footer__contacts-block-title'>Контакты</p>
							<p className='footer__contacts-block-text phone'>+7 (495) 123-45-67</p>
							<p className='footer__contacts-block-text phone'>+7 (495) 123-45-68</p>
							<p className='footer__contacts-block-text mail'>support@autonexus.com</p>
						</div>
					</div>

					<div className='footer__disclaimer'>
						<p>
							Услуги и их доступность могут отличаться в зависимости от региона. Подробности уточняйте у менеджеров.
							Изображения на экране смоделированы. Опыт использования может отличаться. Для некоторых услуг может
							потребоваться регистрация в системе AutoNexus. <br></br>
							Некоторые функции могут быть недоступны для всех моделей автомобилей. Для доступа к некоторым функциям
							может потребоваться мобильное приложение AutoNexus. Дополнительная регистрация,
							<br></br>условия и тарифы могут применяться.
						</p>
						<p>
							*Представляет экономию по сравнению с обычными неакционными ценами. Для получения скидки необходимо
							приобрести две услуги одновременно. Не суммируется с другими предложениями. <br></br>
							Не действует на предыдущие покупки. Предложение не передается. Не обменивается на наличные. Действует
							только на товары в наличии. <br></br>
							Предложение может быть изменено или отменено в любое время без предварительного уведомления. В некоторых
							регионах предложение может не действовать.
						</p>
						<p>
							©2023 AutoNexus. Все права защищены. AutoNexus и логотип AutoNexus являются товарными знаками AutoNexus.{' '}
							<br></br>
							Другие названия и бренды могут быть товарными знаками их соответствующих владельцев.
						</p>
					</div>
				</div>
			</div>
		</>
	);
};
