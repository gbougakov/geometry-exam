import React, { useState } from 'react'
import Button from '../components/button'
import '../styles/index.css'
import Loader from '../components/loader'
import { useRouter } from 'next/router'
import Head from 'next/head'

export default () => {
  const router = useRouter()
  const [isLoading, setLoading] = useState(false)
  const [isSubmitting, setSubmitting] = useState(false)
  const [code, setCode] = useState(false)
  return <div className="min-h-screen p-10 flex justify-center items-center">
    <Head>
      <title>Геометрия</title>
      <meta name="description" content="Сайт для подготовки к зачету"/>
    </Head>
    <div className="flex flex-col w-full md:w-1/4 text-center justify-center">
      <Button isLoading={isLoading} onClick={() => {
        setLoading(true)
        const t1 = Math.floor(Math.random() * 15) + 10
        const t2 = Math.floor(Math.random() * 45) + 10
        const t3 = Math.floor(Math.random() * 45) + 10
        router.push(`/slip/${t1}${t2}${t3}`)
      }}>Сгенерировать билет</Button> 
      <p className="text-gray-700 my-2">или</p>
      <form onSubmit={e => {
        e.preventDefault()
        setSubmitting(true)
        router.push(`/slip/${code}`)
      }}>
        <div className="flex shadow items-center py-2 px-3">
          <input type="text" pattern="[0-9]{6}" className="flex-grow" placeholder="Введите номер билета" onChange={e => setCode(e.target.value)}></input>
          <button type="submit" disabled={isSubmitting}>{isSubmitting ? <Loader></Loader> : "→"}</button>
        </div>
      </form>
      <p className="mt-5">Сайт сделан <a href="https://instagram.com/gbougakov/" className="text-blue-700 underline">Жорой из 8"И"</a>, задачи из зачета</p>
    </div>
    
  </div>
}
