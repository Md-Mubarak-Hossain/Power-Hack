import React, { useEffect } from 'react';

const useBill = (bill) => {
    let sum=0;
    useEffect(()=>{
        let Bill=`${bill}`
        sum=sum+Bill;
    },[bill])
    return(<>
    {sum}
    </>)
};

export default useBill;