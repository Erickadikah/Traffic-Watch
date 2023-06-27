"use client"
// import { createPost } from '@/app/Actions/IncidentsAction'
import React, { useRef} from 'react';

const AddPage = () => {
  const formRef = useRef<HTMLFormElement>(null)

  async function handleAction(formDatas: any) {
    const location = formDatas.get('location')
    const description = formDatas.get('description')
    const image = formDatas.get('image')

    // await createPost({location, description, image})

    formRef.current?.reset()
  }

  return (   
    <form action='' className='flex flex-col gap-20 p-10 mt-32'
      ref={formRef}>
      <input type='text' name='location' placeholder='loaction' required/>
      <input type='text' name='description' placeholder='description' required/>
      <input type='text' name='image' placeholder='image' required/>
      <button type='submit'>Create</button>
    </form>
  );
};

export default AddPage;
