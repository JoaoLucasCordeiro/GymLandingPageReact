import React from 'react';
import { pricing } from '../data'
import PlanLIst from './PlanList'

const Pricing = () => {
  const { icon, title, plans } = pricing
  return (
    <section>

      <div className='section-title-group max-w-[540px] mx-auto px-4 lg:px-6'>
        <img src={icon} alt="ícone" />
        <h2 className='h2'>
          {title} <span className='text-primary-200'>.</span>
        </h2>
      </div>

      <PlanLIst plans={plans}/>


    </section>
  )
};

export default Pricing;
