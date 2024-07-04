import React from 'react'
import Card from '@/components/Card';
import crypto from '../../public/images/crypto.png';
import Frame2 from '../../public/images/frame2.png';
import Frame3 from '../../public/images/frame3.png';
import Frame4 from '../../public/images/frame4.png';
import Frame5 from '../../public/images/frame5.png';

import unlock from "../../public/images/unlock.png";



const Games = () => {
  return (
    <div className='grid grid-cols-3 gap-3 space-y-5 items-center 
    '>
      <Card
        img={crypto}
        header={'cryptoblades'}
        text={'Earn skill tokens through battles craft weapons and trade unique NFTs in this play to earn RPG  '}
        btn={'Play now'}

      />
      <Card
        img={Frame2}
        header={'cryptoblades'}
        text={'Earn skill tokens through battles craft weapons and trade unique NFTs in this play to earn RPG  '}
        btn={'Play now'}
        id="1"
        className=""
      />
      <Card
        img={Frame3}
        header={'cryptoblades'}
        text={'Earn skill tokens through battles craft weapons and trade unique NFTs in this play to earn RPG  '}
        btn={'Play now'}
      />
      <Card
        img={Frame5}
        header={'cryptoblades'}
        text={'Earn skill tokens through battles craft weapons and trade unique NFTs in this play to earn RPG  '}
        btn={'Play now'}
        className="w-250"
        id="2"
      />
      <Card
        img={Frame4}
        header={'cryptoblades'}
        text={'Earn skill tokens through battles craft weapons and trade unique NFTs in this play to earn RPG  '}
        btn={'Play now'}
      />
      <Card
        img={unlock}
        header={'cryptoblades'}
        text={'Earn skill tokens through battles craft weapons and trade unique NFTs in this play to earn RPG  '}
        btn={'Play now'}
        id="3"
      />
    </div>
  )
}

export default Games
