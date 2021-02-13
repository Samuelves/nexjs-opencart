import Head from 'next/head'
import Header from '../components/header'
import BreadCrumbs from '../components/breadcrumbs'
import Categories from '../components/categories'
import PromoCard from '../components/promocard'
import ProductList from '../components/productlist'
export default function Home() {
  return (
    <div>
      <Head>
        <title>Nexjs Opencart</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header/>
      <BreadCrumbs/>
      <Categories/>
      <PromoCard/>
      <ProductList/>
    </div>
  )
}
