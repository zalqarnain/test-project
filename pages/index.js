import Head from 'next/head'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import Banners from '../components/Banners'
export default function Home() {
  return (
    <div>
      <div>
        <Banners />
      </div>
    </div>
  )
}
