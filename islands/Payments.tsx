import { useState } from "preact/hooks";
import { Handlers, PageProps } from '$fresh/server.ts';
import { IPayments } from '../utils/types.ts';

interface PaymentProps {
  payment: IPayments
}
 
const staticsPayments = 
[
    {
      title: 'QIWI',
      path: '/payments/ps-qiwi.svg',
      comission: 0
    },
    {
      title: 'Банковская карта',
      path: '/payments/ps-card.svg',
      comission: 5
    },
    {
      title: 'Система Быстрых Платежей (СБП)',
      path: '/payments/ps-sbp.svg',
      comission: 4.5,
    },
    {
      title: 'Кошелек LAVA',
      path: '/payments/ps-lava.svg',
      comission: 0
    }
]

export default function Payments({payment}: PaymentProps) {
  if (!payment) return <p>Error 404</p>
  return (
    <div className="ant-spin-nested-loading">
          <div className="ant-spin-container">
              <div className="services">
                  {payment.data.map((data) => {
                    return (
                        <div className="body">
                            <div className="logo">
                                <img src={data.img} />
                            </div>
                            <div>
                                <span className="service_title">{data.name}</span>
                                <br></br>
                                <span>
                                    Комиссия {data.conversion}%
                                </span>
                            </div>
                        </div>
                    )
                  })}
                  
              </div>
          </div>
    </div>
  );
}
