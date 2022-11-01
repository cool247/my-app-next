import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router';

export default function Home() {

  const router = useRouter()

  const handleClick = () => {
    console.log("order placed");
    router.push("/products")

  }

  return (
    <div>
      Home
      <h5><Link href={"/blog"}>Blog </Link></h5>

      <br />
      <button onClick={handleClick} >Place Order</button>

    </div>
  )
}
