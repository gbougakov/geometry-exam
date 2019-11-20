import Loader from '../components/loader'

export default function Button (props) {
  return (
    <button onClick={props.onClick} disabled={props.isLoading} className={"shadow border rounded py-2 px-3 text-sm uppercase focus:outline-none transition-all focus:shadow-outline w-full " + (props.isLoading ? 'bg-transparent text-black border-black' : 'bg-black text-white hover:bg-transparent hover:text-black hover:border-black')} type={props.type}>
      {props.isLoading ? <Loader></Loader> : props.children}
    </button>
  )
}