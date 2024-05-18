import React from 'react'

const ProductDescription = () => {

  return (

    <div className='description-box my-10 mx-10'>

      <div className='description-navigator flex'>
        <div className="description-box-nav-box text-base flex justify-center align-center border-[1px] py-3 px-5">Description</div>
        <div className="description-box-nav-box fade  text-base flex justify-center align-center border-[1px] py-3 px-5 bg-[#fbfbfb] text-[#555]">Reviews (122)</div>
      </div>

      <div className="description-box-description flex flex-col gap-6 p-10 pb-5 border-[1px]">

        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus voluptatem fugit rem? Fugiat, pariatur veritatis? Earum, quaerat? Laborum, aspernatur saepe ducimus minus similique odit unde? Veniam unde architecto expedita adipisci.</p>

        <p>Provident numquam reprehenderit magni dolorem labore at deserunt sint amet cum voluptatem. Commodi labore quaerat pariatur voluptates ipsam voluptatibus! Expedita excepturi aliquam dolores sit soluta iste deserunt tempora saepe rem.</p>
      </div>

    </div>
  )
}

export default ProductDescription