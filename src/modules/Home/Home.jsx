import React from 'react'
import Header from '../../components/Header/Header'
import Statistics from './HomeItem/Statistics'
import orders from '../../assets/icons/home_orders.svg'
import price from '../../assets/icons/home_price.svg'
import cancle from '../../assets/icons/home_cancled.svg'
import AllOrders from './HomeItem/AllOrders'
import DayDish from './HomeItem/DayDish'

import dish from '../../assets/images/daydish.png'

export default function Home() {
  return (
    <>
      <Header text={'Главная'} />
      <section className="hero">

        <div className="hero_statistics">
          <Statistics color={'green'} src={orders} text={'Всего заказов'} num={'1750'} />
          <Statistics color={'blue'} src={price} text={'Общая сумма'} num={'129 000'} />
          <Statistics color={'red'} src={cancle} text={'Отмененные'} num={'125'} />
        </div>

        <div className="hero_orders">
          <div className="hero_orders_left">
            <h3 className="hero_orders_title">Все заказы</h3>
            <AllOrders waiter={'Aзиз'} color={'green'} time={'10'} num={'21'} date={'10:30 | сегодня'} orders={'1 x Пицца пепперони'} orders2={'2 x Кола 1л'} orders3={'1 x Саллад цезарь'} />
          </div>
          <div className="hero_orders_roght">
            <h3 className="hero_orders_title">Блюдо дня</h3>
            <DayDish foto={dish} name={'Филе-миньон'} color={'green'} stock={'в наличии'} subtitle={'Говядина, чеснок, маш салат, черный перец, листья, масло, соус'} price={'1500c'} />
          </div>
        </div>
      </section>
    </>
  )
}
