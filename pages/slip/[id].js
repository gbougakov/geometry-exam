import {useRouter} from 'next/router'
import '../../styles/index.css'
import getBaseURL from '../../helpers/getBaseURL'
import fetch from 'isomorphic-unfetch'
import Head from 'next/head'

const Slip = props => {
  const router = useRouter()

  return (
    <div className="min-h-screen p-10 flex justify-center items-center">
      <Head>
        <title>Билет №{router.query.id} • Геометрия</title>
        <meta name="description" content="Сайт для подготовки к зачету по геометрии"/>
      </Head>
      <div className="flex flex-col w-full md:w-1/3">
        <h1 className="text-3xl font-black">Билет №{router.query.id}</h1>
        <h2 className="text-2xl font-bold">Теория</h2>
        <p>{props.t1}</p>
        <h2 className="text-2xl mt-5 font-bold">Задача 1</h2>
        <p>{props.t2}</p>
        <h2 className="text-2xl mt-5 font-bold">Задача 2</h2>
        <p>{props.t3}</p>
        <p className="mt-5">Сайтик сделан <a href="https://instagram.com/gbougakov/" className="text-blue-700 underline">Жорой из 8"И"</a>, задачи из зачета</p>
      </div>
    </div>
    //<h1>{router.query.id}</h1>
  )
}

Slip.getInitialProps = async function({req, query}) {
  const res = await fetch(`${getBaseURL(req)}/api/slip.js?id=${query.id}`)
  const data = await res.json()

  return data
}

export default Slip