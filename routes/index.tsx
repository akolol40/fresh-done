import Counter from "../islands/Counter.tsx";
import { Fragment, h } from "preact";
import { Layout } from "../components/Layout.tsx";
import { Head }from"$fresh/runtime.ts";
import Payments from "../islands/Payments.tsx";
import { Handlers, PageProps } from '$fresh/server.ts';
import { IPayments } from '../utils/types.ts';

export const handler: Handlers<IPayments[] | null> = {
  async GET(request, ctx) {
    const response = await fetch('https://public.ecorpay.net/?class=info&method=payways');
    const payments = await (response.json()) as IPayments[]
    if (!payments) {
      return ctx.render(null)
    }
    return ctx.render(payments)
  }
}
 

export default function Home({data: payments} : PageProps<IPayments[] | null>) {
  return (<Fragment>
    <Head>
      <title>Invoices</title>
      <link rel="stylesheet" href="/css/global.css"/>
    </Head>
    <Layout>
    <div className="payment">
      <div className="wrapper">
        <div className="header">
          <a href="#" className="logo">
            <img src="/logo.svg" alt="logo"/>
            <p>Payment</p>
          </a>
        </div>
        <div className="title">Пополнить кошелек Payment</div>

        <div className="ant-spin-nested-loading">
          <div className="ant-spin-container">
              <div className="services">
                  <Payments payment={payments}/>
              </div>
          </div>
        </div>
      </div>
    </div>

    <div className="info">
      <div className="only_hieght">
        <div className="body">
          <div className="info">
            <div className="top">
              <div>
                Buy-accs.ru
                <br></br>
                <span className="sum">200 Р</span>
              </div>
            </div>

            <div>
              <span className="infoTitle">Назначение перевода</span>
              <br></br>
              <span className="infoComment">Оплата заказа №{Math.round(Math.random() * 1000)}</span>
            </div>

            <div className="infoTitle">
            Счёт действителен до 28.07.2022
            </div>

            <div className="bottom">
              <div className="help">
                Нужна помощь? 
                <div className="links">
                    <img src="/payments/icon-telegram.svg" width="32"/>
                    <img src="/payments/icon-email.svg" width="32"/>
                </div>
              </div>
              <div className="offer">
                Совершая перевод, вы соглашаетесь 
                <br></br>
                <a href="#" target="blank">с офертой</a>
              </div>
          </div>
          </div>
        </div>
      </div>
    </div>
    </Layout>
    </Fragment>
  );
}
