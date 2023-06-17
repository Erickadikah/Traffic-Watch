import React from 'react';
import { GetServerSideProps, NextApiRequest } from 'next';
// import { Button } from '@material-ui/core';
import Layout from 'src/components/houseForm';
import HouseForm from './HouseFom'
export default function Add(){
    return(
        <Layout>
            <HouseForm />
        </Layout>
    ) 
}